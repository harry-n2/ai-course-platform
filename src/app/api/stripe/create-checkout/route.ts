import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@/lib/supabase/server";

// 有料プラン価格定義（税抜・円）
const PLANS = {
  ume:  { name: "【梅】ライトプラン",    price: 150000 },
  take: { name: "【竹】スタンダードプラン", price: 350000 },
  matsu:{ name: "【松】プレミアムプラン", price: 600000 },
} as const;

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { planId } = await request.json() as { planId: keyof typeof PLANS };
  const plan = PLANS[planId];

  if (!plan) {
    return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    customer_email: user.email,
    line_items: [
      {
        price_data: {
          currency: "jpy",
          product_data: {
            name: `WTN AI実践講座 ${plan.name}`,
            description: "Module 01〜05の全コンテンツにアクセスできます",
          },
          unit_amount: plan.price,
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/paid?success=1`,
    cancel_url:  `${process.env.NEXT_PUBLIC_APP_URL}/checkout?cancelled=1`,
    metadata: {
      userId: user.id,
      planId,
    },
  });

  return NextResponse.json({ url: session.url });
}
