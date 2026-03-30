import Link from "next/link";
import { CheckCircle, Lock } from "lucide-react";

const freeDays = [
  { day: "Day 1", title: "Gemini / ChatGPT / Claude の使い方", desc: "3大AIの特徴と使い分けを習得" },
  { day: "Day 2", title: "Gem・Projectのカスタム設定", desc: "自分専用AIアシスタントを作る" },
  { day: "Day 3-4", title: "実践プロンプト術", desc: "黄金の4要素で高品質な回答を引き出す" },
  { day: "Day 5", title: "Nano bananaで画像生成", desc: "LP・SNSに使えるビジュアルを即作成" },
  { day: "Day 6-7", title: "NotebookLM活用", desc: "資料専用AIで正確な情報分析" },
  { day: "Day 8-10", title: "Google Antigravity（集大成）", desc: "自律型AIエージェントで業務を丸ごと自動化", highlight: true },
];

const paidModules = [
  { module: "Module 01", title: "無料コース習得と振り返り", desc: "AIマネジメント基礎を確認・定着（約7日）" },
  { module: "Module 02", title: "LP作成・アプリ開発", desc: "Antigravity特化：バイブコーディングで「稼げるLP」を構築（約7日）" },
  { module: "Module 03", title: "Antigravity向けフォルダ構築", desc: "AIが自律的に動ける「基地」を設計（約7日）" },
  { module: "Module 04", title: "X・note SNS運用半自動化", desc: "1時間で1週間の投稿ストックを作る仕組み（約7日）" },
  { module: "Module 05", title: "VS Code × Claude Code連携", desc: "本格エンジニア環境でのデプロイ実践（希望者・2〜4週間）" },
];

export function CourseSection() {
  return (
    <section id="course" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="text-[#d4af37] text-xs font-bold tracking-[0.3em] uppercase mb-4">Option 01</p>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4">
            AI実践講座
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            AIの基礎から、LP作成・SNS自動化・本格開発まで。<br className="hidden sm:block" />
            週末の数時間でも実践できる体系的なカリキュラム。
          </p>
        </div>

        {/* Guidance Video */}
        <div className="mb-10 md:mb-14 max-w-3xl mx-auto">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <video
              className="absolute inset-0 w-full h-full bg-slate-900"
              src="/free-guidance.mp4"
              controls
              playsInline
              preload="metadata"
            />
          </div>
        </div>

        {/* Free Plan */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <div className="h-px flex-1 bg-slate-200" />
            <div className="px-4 md:px-6 py-2 bg-slate-900 text-white text-xs md:text-sm font-bold tracking-wider text-center">
              FREE — 無料プラン（Day 1〜10）
            </div>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {freeDays.map((item) => (
              <div
                key={item.day}
                className={`p-4 md:p-5 border ${item.highlight ? "border-[#d4af37] bg-[#d4af37]/5" : "border-slate-200"}`}
              >
                <p className={`text-xs font-bold tracking-wider mb-2 ${item.highlight ? "text-[#d4af37]" : "text-slate-400"}`}>
                  {item.day}
                </p>
                <h4 className="font-bold text-slate-900 text-sm md:text-base mb-1">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
                {item.highlight && (
                  <span className="inline-block mt-2 text-xs bg-[#d4af37] text-white px-2 py-0.5 font-bold">
                    無料コース集大成
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Paid Plan */}
        <div className="mb-10 md:mb-12">
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <div className="h-px flex-1 bg-slate-200" />
            <div className="px-4 md:px-6 py-2 bg-[#d4af37] text-slate-900 text-xs md:text-sm font-bold tracking-wider text-center">
              PAID — 有料プラン（Module 1〜5）
            </div>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="space-y-3">
            {paidModules.map((item) => (
              <div key={item.module} className="flex items-start gap-3 md:gap-4 p-4 md:p-5 border border-slate-200 hover:border-[#d4af37] transition-colors group">
                <Lock size={16} className="text-[#d4af37] mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-xs font-bold text-[#d4af37] tracking-wider mb-1">{item.module}</p>
                  <h4 className="font-bold text-slate-900 text-sm md:text-base">{item.title}</h4>
                  <p className="text-sm text-slate-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div id="course-register" className="bg-slate-900 p-6 md:p-10 text-center">
          <h3 className="text-xl md:text-2xl font-black text-white mb-3">まずは無料で体験する</h3>
          <p className="text-slate-400 text-sm mb-6 md:mb-8">Day 1〜10を無料で受講。AI活用の基礎を身につけてから、次のステップを判断できます。</p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center px-8 md:px-10 py-4 bg-white text-slate-900 font-bold text-sm tracking-wider hover:bg-[#d4af37] hover:text-white transition-colors"
            >
              <CheckCircle size={16} className="mr-2" />
              無料会員登録（0円）
            </Link>
            <Link
              href="/checkout"
              className="inline-flex items-center justify-center px-8 md:px-10 py-4 border-2 border-[#d4af37] text-[#d4af37] font-bold text-sm tracking-wider hover:bg-[#d4af37] hover:text-slate-900 transition-colors"
            >
              有料プランを申し込む
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
