import Link from "next/link";

const LARK_FORM_URL =
  "https://ljpbqpwr5vbk.jp.larksuite.com/share/base/form/shrjp9gksNra45vIjBd3UBlJ23e";

const kiwamiPlans = [
  {
    name: "梅",
    nameEn: "Lite",
    originalPrice: "198,000",
    price: "150,000",
    includes: ["「売れる」LP制作", "簡易診断アプリ"],
    recommended: false,
  },
  {
    name: "竹",
    nameEn: "Standard",
    originalPrice: "398,000",
    price: "350,000",
    includes: ["「売れる」LP制作", "診断アプリ実装", "LINEステップ配信案", "Kindle出版サポート"],
    recommended: true,
    badge: "最も投資対効果が高いプラン",
  },
  {
    name: "松",
    nameEn: "Premium",
    originalPrice: "698,000",
    price: "600,000",
    includes: ["フルパッケージ全内容", "全方位運用支援"],
    recommended: false,
  },
];

export function PlansSection() {
  return (
    <section id="plans" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-[#d4af37] text-xs font-bold tracking-[0.3em] uppercase mb-4">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">料金プラン</h2>
          <p className="text-slate-500 text-sm">価格は税抜。キャンペーン価格適用中。原則値引きなし。</p>
        </div>

        {/* Course Pricing */}
        <div className="mb-20">
          <h3 className="text-xl font-black text-slate-900 mb-8 text-center">
            AI実践講座
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="border border-slate-200 p-8">
              <p className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-4">Free Plan</p>
              <div className="mb-6">
                <span className="text-5xl font-black text-slate-900">0</span>
                <span className="text-slate-500 ml-1">円</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-600 mb-8">
                <li className="flex items-center gap-2"><span className="text-[#d4af37]">✓</span>Day 1〜10の動画コンテンツ</li>
                <li className="flex items-center gap-2"><span className="text-[#d4af37]">✓</span>AI基礎〜Antigravityまで</li>
                <li className="flex items-center gap-2"><span className="text-[#d4af37]">✓</span>メール登録のみで即開始</li>
              </ul>
              <Link
                href="/register"
                className="block text-center py-3 bg-slate-900 text-white text-sm font-bold tracking-wider hover:bg-[#d4af37] transition-colors"
              >
                無料登録する
              </Link>
            </div>

            <div className="border-2 border-[#d4af37] p-8 relative bg-[#d4af37]/5">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d4af37] text-slate-900 text-xs font-black px-4 py-1">
                RECOMMENDED
              </span>
              <p className="text-xs font-bold text-[#d4af37] tracking-wider uppercase mb-4">Paid Plan</p>
              <div className="mb-6">
                <p className="text-slate-400 text-sm mb-1">料金は相談後にご案内</p>
                <span className="text-2xl font-black text-slate-900">お問い合わせください</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-600 mb-8">
                <li className="flex items-center gap-2"><span className="text-[#d4af37]">✓</span>Module 1〜5の全動画コンテンツ</li>
                <li className="flex items-center gap-2"><span className="text-[#d4af37]">✓</span>LP作成・SNS自動化・Claude Code</li>
                <li className="flex items-center gap-2"><span className="text-[#d4af37]">✓</span>有料会員専用ダッシュボード</li>
                <li className="flex items-center gap-2"><span className="text-[#d4af37]">✓</span>無料プランの全コンテンツ含む</li>
              </ul>
              <Link
                href={LARK_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 bg-[#d4af37] text-slate-900 text-sm font-bold tracking-wider hover:bg-[#c09b28] transition-colors"
              >
                有料プランを問い合わせる
              </Link>
            </div>
          </div>
        </div>

        {/* Kiwami Pricing */}
        <div>
          <h3 className="text-xl font-black text-slate-900 mb-2 text-center">
            極（KIWAMI）— Web資産構築サービス
          </h3>
          <p className="text-center text-slate-500 text-sm mb-8">毎月2名様限定 / 約7日納品 / 値引き不可</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kiwamiPlans.map((plan) => (
              <div
                key={plan.name}
                className={`p-8 relative flex flex-col ${
                  plan.recommended
                    ? "border-2 border-[#d4af37] bg-slate-900 text-white"
                    : "border border-slate-200"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d4af37] text-slate-900 text-xs font-black px-3 py-1 whitespace-nowrap">
                    {plan.badge}
                  </span>
                )}
                <div className="mb-6">
                  <p className={`text-xs font-bold tracking-wider uppercase mb-2 ${plan.recommended ? "text-[#d4af37]" : "text-slate-400"}`}>
                    【{plan.name}】{plan.nameEn}
                  </p>
                  <p className={`text-sm line-through mb-1 ${plan.recommended ? "text-slate-500" : "text-slate-400"}`}>
                    ¥{plan.originalPrice}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-black ${plan.recommended ? "text-[#d4af37]" : "text-slate-900"}`}>
                      ¥{plan.price}
                    </span>
                    <span className={`text-sm ${plan.recommended ? "text-slate-400" : "text-slate-500"}`}>（税抜）</span>
                  </div>
                </div>

                <ul className={`space-y-2 text-sm flex-1 mb-8 ${plan.recommended ? "text-slate-300" : "text-slate-600"}`}>
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#d4af37] font-bold shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={LARK_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 text-sm font-bold tracking-wider transition-colors ${
                    plan.recommended
                      ? "bg-[#d4af37] text-slate-900 hover:bg-[#c09b28]"
                      : "bg-slate-900 text-white hover:bg-[#d4af37]"
                  }`}
                >
                  このプランで相談する
                </Link>
              </div>
            ))}
          </div>

          {/* Monthly support add-on */}
          <div className="mt-8 border border-dashed border-slate-300 p-6 max-w-2xl mx-auto text-center">
            <p className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-2">Optional Add-on</p>
            <p className="font-black text-slate-900 text-xl mb-1">
              月額伴走サポート <span className="text-[#d4af37]">¥30,000</span><span className="text-sm text-slate-500">/月（税抜）</span>
            </p>
            <p className="text-sm text-slate-500 mt-2">
              【守り】サーバー・ドメイン管理、緊急トラブル対応<br />
              【攻め】AIによる発信ネタ出し、LINEステップ数値分析、月1回の作戦会議
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
