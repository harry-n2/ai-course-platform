"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "AI実践講座は本当に無料で受講できますか？",
    a: "はい。Day 1〜10のコンテンツはメールアドレス登録のみで無料受講できます。有料プラン（Module 1〜5）はお問い合わせ後にご案内します。",
  },
  {
    q: "AIの知識がゼロでも大丈夫ですか？",
    a: "大丈夫です。Day 1からChatGPT・Gemini・Claudeの基本操作を丁寧に解説しています。副業を始めたい会社員の方を主な対象として設計されています。",
  },
  {
    q: "「極」サービスの納品まで本当に約7日ですか？",
    a: "AI爆速納品により、通常1〜2ヶ月かかる構築を約7日に圧縮しています。ヒアリング内容の確認や素材のご提供状況によって若干前後する場合があります。",
  },
  {
    q: "毎月2名様限定とはどういう意味ですか？",
    a: "お一人おひとりにAIリソースとディレクションを集中させ、確実に品質を保って約7日で納品するために枠を限定しています。枠が埋まり次第ご案内が遅れる場合があります。",
  },
  {
    q: "「極」サービスの値引きはできますか？",
    a: "原則として値引きは行っておりません。品質とブランド価値を維持するためのポリシーです。",
  },
  {
    q: "修正対応はどこまで無料ですか？",
    a: "緊急トラブル（バグ・不具合）は無制限・無料で即時対応します。通常の変更（文言・デザインの好み）は月2回まで無料で対応しています。3回目以降は別途有償スポット対応となります。",
  },
  {
    q: "月額サポートは必須ですか？",
    a: "「極」サービスの月額サポート（30,000円/月）は任意です。ご自身でサーバー管理・運用が可能な方は不要です。ただし、継続的な改善・分析サポートを希望される方にはお勧めしています。",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-[#d4af37] text-xs font-bold tracking-[0.3em] uppercase mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">よくある質問</h2>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-200">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-bold text-slate-900 pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-[#d4af37] shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
