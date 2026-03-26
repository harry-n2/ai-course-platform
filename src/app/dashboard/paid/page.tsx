export const dynamic = "force-dynamic";

import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Lock } from "lucide-react";

const LARK_FORM_URL =
  "https://ljpbqpwr5vbk.jp.larksuite.com/share/base/form/shrjp9gksNra45vIjBd3UBlJ23e";

const paidModules = [
  { id: "paid-guidance", label: "Paid Guidance", title: "有料コース全体像・進め方", videoId: null },
  { id: "module01", label: "Module 01", title: "無料コース習得と振り返り（約7日）", videoId: null },
  { id: "module02", label: "Module 02", title: "LP作成・アプリ開発（Antigravity特化）（約7日）", videoId: null },
  { id: "module03", label: "Module 03", title: "Google Antigravity向けフォルダ構築（約7日）", videoId: null },
  { id: "module04", label: "Module 04", title: "X・note SNS運用半自動化（約7日）", videoId: null },
  { id: "module05", label: "Module 05", title: "VS Code × Claude Code連携（希望者・2〜4週間）", videoId: null, optional: true },
];

export default async function PaidDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/register");

  const { data: profile } = await supabase
    .from("users")
    .select("is_paid_member")
    .eq("id", user.id)
    .single();

  if (!profile?.is_paid_member) redirect("/checkout");

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-4 md:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-widest text-slate-900">
          WT<span className="text-[#d4af37]">N</span>
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-xs bg-[#d4af37] text-slate-900 px-3 py-1 font-black">PAID</span>
          <span className="text-xs text-slate-500 hidden sm:block">{user.email}</span>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
        <h1 className="text-2xl font-black text-slate-900 mb-2">有料プラン — AI実践講座</h1>
        <p className="text-slate-500 text-sm mb-8">Module 1〜5のフルコンテンツを受講してください。</p>

        <div className="space-y-3">
          {paidModules.map((module) => (
            <div key={module.id} className={`bg-white border p-5 ${module.optional ? "border-dashed border-slate-300" : "border-slate-200 hover:border-[#d4af37]"} transition-colors`}>
              <div className="flex items-start gap-4">
                <span className="text-xs font-bold text-[#d4af37] tracking-wider shrink-0 w-24">{module.label}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-slate-900">{module.title}</h3>
                    {module.optional && (
                      <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 font-bold">希望者のみ</span>
                    )}
                  </div>
                  {module.videoId ? (
                    <div className="mt-4 aspect-video bg-black">
                      <iframe
                        src={`https://player.vimeo.com/video/${module.videoId}`}
                        className="w-full h-full"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="mt-3 aspect-video bg-slate-100 flex items-center justify-center">
                      <p className="text-slate-400 text-sm">動画準備中</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Completion upsell to 極 */}
        <div className="mt-12 bg-slate-900 p-8 text-center">
          <p className="text-[#d4af37] text-xs font-bold tracking-[0.3em] uppercase mb-3">Graduation</p>
          <h3 className="text-2xl font-black text-white mb-3">
            コース修了後の次のステップ
          </h3>
          <p className="text-slate-300 text-sm mb-6">
            学んだスキルを自分のビジネスに活かす準備はできましたか？<br />
            「極」サービスでは、プロがあなたのWeb資産を約7日で構築します。
          </p>
          <Link
            href={LARK_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-4 bg-[#d4af37] text-slate-900 font-black text-sm tracking-wider hover:bg-[#c09b28] transition-colors"
          >
            <Lock size={14} className="mr-2" />
            極サービスの無料相談を予約する
          </Link>
        </div>
      </div>
    </div>
  );
}
