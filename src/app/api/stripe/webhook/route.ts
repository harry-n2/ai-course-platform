import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!);
}

function getSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  const stripe = getStripe();
  const supabaseAdmin = getSupabaseAdmin();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // 決済完了イベント
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    // metadataのuserIdを優先、なければemailで検索
    const userId = session.metadata?.userId;
    const customerEmail = session.customer_details?.email ?? session.customer_email;

    let targetUserId = userId;

    if (!targetUserId) {
      if (!customerEmail) {
        return NextResponse.json({ error: "No user identifier" }, { status: 400 });
      }
      const { data: user, error: userError } = await supabaseAdmin
        .from("users")
        .select("id")
        .eq("email", customerEmail)
        .single();

      if (userError || !user) {
        console.error("User not found:", customerEmail);
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
      targetUserId = user.id;
    }

    const { error: updateError } = await supabaseAdmin
      .from("users")
      .update({ is_paid_member: true })
      .eq("id", targetUserId);

    if (updateError) {
      console.error("Update error:", updateError);
      return NextResponse.json({ error: "Update failed" }, { status: 500 });
    }

    console.log(`✓ Paid member activated: userId=${targetUserId}`);
  }

  return NextResponse.json({ received: true });
}
