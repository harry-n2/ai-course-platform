export const dynamic = "force-dynamic";

import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

const LARK_FORM_URL =
  "https://ljpbqpwr5vbk.jp.larksuite.com/scheduler/96c06a2209d4e79e";

const freeLessons = [
  { id: "guidance", label: "Free Guidance", title: "講座の進め方・全体像", videoId: null },
  { id: "day01", label: "Day 1", title: "Gemini / ChatGPT / Claude の使い方", videoId: null },
  { id: "day02", label: "Day 2", title: "Gem・Projectのカスタム設定", videoId: null },
  { id: "day03", label: "Day 3-4", title: "実践プロンプト術", videoId: null },
  { id: "day05", label: "Day 5", title: "Nano bananaで画像生成", videoId: null },
  { id: "day06", label: "Day 6-7", title: "NotebookLM活用", videoId: null },
  { id: "day08", label: "Day 8-10", title: "Google Antigravity（集大成）", videoId: null },
];

export default async function FreeDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/register");

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-4 md:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-widest text-slate-900">
          WT<span className="text-[#d4af37]">N</span>
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-xs bg-slate-200 text-slate-600 px-3 py-1 font-bold">FREE</span>
          <span className="text-xs text-slate-500 hidden sm:block">{user.email}</span>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
        {/* Upsell banner */}
        <div className="bg-slate-900 text-white p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-bold text-sm">有料プランにアップグレードする</p>
            <p className="text-slate-400 text-xs mt-1">Module 1〜5でLP作成・SNS自動化・Claude Codeを習得</p>
          </div>
          <Link
            href="/checkout"
            className="shrink-0 px-6 py-2.5 bg-[#d4af37] text-slate-900 text-xs font-black tracking-wider hover:bg-[#c09b28] transition-colors"
          >
            有料プランを見る →
          </Link>
        </div>

        <h1 className="text-2xl font-black text-slate-900 mb-2">無料プラン — AI実践講座</h1>
        <p className="text-slate-500 text-sm mb-8">Day 1〜10のコンテンツを受講してください。</p>

        <div className="space-y-3">
          {freeLessons.map((lesson) => (
            <div key={lesson.id} className="bg-white border border-slate-200 p-5 hover:border-[#d4af37] transition-colors">
              <div className="flex items-start gap-4">
                <span className="text-xs font-bold text-[#d4af37] tracking-wider shrink-0 w-20">{lesson.label}</span>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900">{lesson.title}</h3>
                  {lesson.videoId ? (
                    <div className="mt-4 aspect-video bg-black">
                      <iframe
                        src={`https://player.vimeo.com/video/${lesson.videoId}`}
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

        {/* Bottom upsell */}
        <div className="mt-12 bg-[#d4af37]/10 border border-[#d4af37] p-8 text-center">
          <p className="text-xs font-bold text-[#d4af37] tracking-wider uppercase mb-3">Next Step</p>
          <h3 className="text-2xl font-black text-slate-900 mb-3">さらに上を目指すなら</h3>
          <p className="text-slate-600 text-sm mb-6">
            有料プランで LP作成・SNS自動化・Claude Code連携を習得。<br />
            または「極」サービスでプロに丸ごと構築を依頼する選択肢も。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/checkout" className="px-8 py-3 bg-slate-900 text-white text-sm font-bold hover:bg-[#d4af37] transition-colors">
              有料プランを申し込む
            </Link>
            <Link href={LARK_FORM_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-[#d4af37] text-[#d4af37] text-sm font-bold hover:bg-[#d4af37] hover:text-slate-900 transition-colors">
              極サービスを相談する
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
