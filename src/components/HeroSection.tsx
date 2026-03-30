import Link from "next/link";

const LARK_FORM_URL =
  "https://ljpbqpwr5vbk.jp.larksuite.com/scheduler/96c06a2209d4e79e";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-slate-900 flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#d4af37]/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10 w-full">
        <div className="max-w-3xl">
          <p className="text-[#d4af37] text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 md:mb-6">
            AI WEB CONSTRUCTION & ASSET BUILDING
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight mb-4 md:mb-6">
            AIで、あなたの<br />
            ビジネスを<br />
            <span className="text-[#d4af37]">「資産」</span>に変える。
          </h1>
          <p className="text-slate-300 text-base md:text-xl leading-relaxed mb-4">
            自分で学ぶか、プロに任せるか。<br />
            2つの選択肢で、在宅ビジネスを再現性高く構築する。
          </p>
          <p className="text-slate-400 text-sm mb-8 md:mb-10">
            寝ている間も価値を届ける仕組みを、AIの力で。
          </p>

          {/* 2択CTA */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link
              href="/#course-register"
              className="inline-flex items-center justify-center px-6 md:px-8 py-4 bg-white text-slate-900 font-bold text-sm tracking-wider hover:bg-[#d4af37] hover:text-white transition-colors"
            >
              無料で学ぶ（Day 1〜）
            </Link>
            <Link
              href={LARK_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 md:px-8 py-4 border-2 border-[#d4af37] text-[#d4af37] font-bold text-sm tracking-wider hover:bg-[#d4af37] hover:text-slate-900 transition-colors"
            >
              プロに任せる（無料相談）
            </Link>
          </div>
        </div>

        {/* 2択カード */}
        <div className="mt-10 md:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl">
          <div className="border border-slate-700 p-5 md:p-6 hover:border-[#d4af37] transition-colors group">
            <p className="text-[#d4af37] text-xs font-bold tracking-widest uppercase mb-3">Option 01</p>
            <h3 className="text-white font-bold text-lg md:text-xl mb-2">自分でAIを学ぶ</h3>
            <p className="text-slate-400 text-sm mb-4">AI実践講座（無料10日間 → 有料5モジュール）</p>
            <Link href="/#course" className="text-[#d4af37] text-sm font-bold group-hover:underline">
              詳しく見る →
            </Link>
          </div>
          <div className="border border-[#d4af37] p-5 md:p-6 bg-[#d4af37]/5 group">
            <p className="text-[#d4af37] text-xs font-bold tracking-widest uppercase mb-3">Option 02</p>
            <h3 className="text-white font-bold text-lg md:text-xl mb-2">プロに丸投げする</h3>
            <p className="text-slate-400 text-sm mb-4">極（KIWAMI）— 約7日で資産型Webシステムを納品</p>
            <Link href="/#kiwami" className="text-[#d4af37] text-sm font-bold group-hover:underline">
              詳しく見る →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
