import Link from "next/link";
import { Zap, Smartphone, TrendingDown, BookOpen, MessageSquare } from "lucide-react";

const LARK_FORM_URL =
  "https://ljpbqpwr5vbk.jp.larksuite.com/share/base/form/shrjp9gksNra45vIjBd3UBlJ23e";

const features = [
  {
    icon: Zap,
    title: "「売れる」LP制作",
    desc: "心理学に基づいた構成で、訪問者を顧客に変える高品質なランディングページを制作。",
  },
  {
    icon: Smartphone,
    title: "診断アプリ実装",
    desc: "ゲーミフィケーションで高CVRを実現する診断アプリを標準装備。集客の入り口を劇的に変える。",
  },
  {
    icon: MessageSquare,
    title: "LINEステップ設計",
    desc: "見込み客を自動でファン化し、成約まで導くLINEステップ配信シナリオを設計・実装。",
  },
  {
    icon: BookOpen,
    title: "Kindle出版サポート",
    desc: "権威性の獲得と自動集客導線を確保するKindle出版をフルサポート。",
  },
  {
    icon: TrendingDown,
    title: "ランニングコスト圧縮",
    desc: "GitHub活用・資産型構築により月額固定費を極限までカット。外部ツール依存ゼロを目指す。",
  },
];

const painPoints = [
  "良い商品はあるのに、集客や売り方がわからない",
  "SNS発信やブログ更新に追われ、本業に集中できない",
  "毎月のツール代や広告費が負担になっている",
];

export function KiwamiSection() {
  return (
    <section id="kiwami" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#d4af37] text-xs font-bold tracking-[0.3em] uppercase mb-4">Option 02</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            高単価講座・構築サービス
            <span className="block text-[#d4af37]">「極（KIWAMI）」</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            人生を変える「具体的手段」を、約7日で。<br />
            あなたの代わりに、集客・教育・販売するシステムを丸ごと構築します。
          </p>
        </div>

        {/* Pain Points */}
        <div className="bg-slate-900 p-8 mb-16 max-w-3xl mx-auto">
          <h3 className="text-white font-bold text-lg mb-6 text-center">
            こんな課題を抱えていませんか？
          </h3>
          <div className="space-y-4">
            {painPoints.map((pain, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-[#d4af37] font-black text-lg leading-none mt-0.5">×</span>
                <p className="text-slate-300">{pain}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-slate-700 text-center">
            <p className="text-[#d4af37] font-bold">
              必要なのは労働量ではなく、<br />「寝ている間も価値を届ける仕組み」です。
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h3 className="text-center text-2xl font-black text-slate-900 mb-3">
            パッケージ「極」の全貌
          </h3>
          <p className="text-center text-slate-500 text-sm mb-10">
            通常1〜2ヶ月かかる構築を、AI爆速納品で約7日に圧縮。毎月<strong>2名様限定</strong>。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white p-6 border border-slate-200 hover:border-[#d4af37] transition-colors group">
                <f.icon size={28} className="text-[#d4af37] mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-slate-900 mb-2">{f.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
            <div className="bg-[#d4af37] p-6 flex flex-col justify-center">
              <p className="text-slate-900 font-black text-4xl mb-2">7<span className="text-xl">日</span></p>
              <p className="text-slate-900 font-bold text-sm">AI爆速納品</p>
              <p className="text-slate-800 text-xs mt-2">通常1〜2ヶ月 → 約7日に圧縮</p>
            </div>
          </div>
        </div>

        {/* Role division */}
        <div className="bg-white border border-slate-200 p-8 mb-16 max-w-3xl mx-auto">
          <h3 className="text-center text-xl font-black text-slate-900 mb-8">役割分担</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <p className="font-bold text-[#d4af37] text-sm tracking-wider uppercase">私たち（AI WEB専門家）</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><span className="text-[#d4af37] font-bold">✓</span>面倒なPC作業</li>
                <li className="flex items-center gap-2"><span className="text-[#d4af37] font-bold">✓</span>システム管理</li>
                <li className="flex items-center gap-2"><span className="text-[#d4af37] font-bold">✓</span>デザイン調整</li>
                <li className="flex items-center gap-2"><span className="text-[#d4af37] font-bold">✓</span>戦略・ネタ出し</li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="font-bold text-slate-400 text-sm tracking-wider uppercase">あなた（クライアント）</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><span className="text-slate-400 font-bold">✓</span>お客様への直接対応</li>
                <li className="flex items-center gap-2"><span className="text-slate-400 font-bold">✓</span>「魂」を吹き込む作業</li>
                <li className="flex items-center gap-2"><span className="text-slate-400 font-bold">✓</span>ネタへの肉付け・送信</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-slate-500 text-sm mt-6 italic">
            「魔法ではありません。最強の車を提供しますが、運転するのはあなたです。」
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-500 text-sm mb-6">
            毎月2名様限定 — まずはあなたの「強み」が資産化できるか、無料で診断します
          </p>
          <Link
            href={LARK_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-12 py-5 bg-[#d4af37] text-slate-900 font-black text-sm tracking-wider hover:bg-[#c09b28] transition-colors"
          >
            無料相談を予約する →
          </Link>
        </div>
      </div>
    </section>
  );
}
