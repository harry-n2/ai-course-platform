import Link from "next/link";

const LARK_FORM_URL =
  "https://ljpbqpwr5vbk.jp.larksuite.com/share/base/form/shrjp9gksNra45vIjBd3UBlJ23e";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <Link href="/" className="font-bold text-2xl tracking-widest text-white">
            WT<span className="text-[#d4af37]">N</span>
          </Link>
          <h1 className="text-2xl font-black text-white mt-6 mb-2">有料プランへアップグレード</h1>
          <p className="text-slate-400 text-sm">Module 1〜5のフルコンテンツにアクセスできます</p>
        </div>

        <div className="bg-white p-8">
          <div className="border-b border-slate-100 pb-6 mb-6">
            <h2 className="font-bold text-slate-900 mb-4">有料プランの内容</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><span className="text-[#d4af37] font-bold">✓</span>Module 01: 無料コース習得と振り返り</li>
              <li className="flex items-center gap-2"><span className="text-[#d4af37] font-bold">✓</span>Module 02: LP作成・アプリ開発（Antigravity特化）</li>
              <li className="flex items-center gap-2"><span className="text-[#d4af37] font-bold">✓</span>Module 03: フォルダ構築・ワークスペース設計</li>
              <li className="flex items-center gap-2"><span className="text-[#d4af37] font-bold">✓</span>Module 04: X・note SNS運用半自動化</li>
              <li className="flex items-center gap-2"><span className="text-[#d4af37] font-bold">✓</span>Module 05: VS Code × Claude Code（希望者）</li>
              <li className="flex items-center gap-2"><span className="text-[#d4af37] font-bold">✓</span>無料プランの全コンテンツ含む</li>
            </ul>
          </div>

          {/* Stripe payment button placeholder */}
          <div className="bg-slate-50 border border-dashed border-slate-300 p-6 text-center mb-6">
            <p className="text-slate-400 text-sm mb-2">Stripe決済（準備中）</p>
            <p className="text-xs text-slate-400">Stripeの設定完了後、ここに決済ボタンが表示されます</p>
          </div>

          <p className="text-center text-sm text-slate-500 mb-4">
            ご不明な点は下記よりお問い合わせください
          </p>
          <Link
            href={LARK_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-3 border border-[#d4af37] text-[#d4af37] text-sm font-bold hover:bg-[#d4af37] hover:text-slate-900 transition-colors"
          >
            お問い合わせ（Larkフォーム）
          </Link>
        </div>

        <p className="text-center mt-6">
          <Link href="/" className="text-slate-400 text-xs hover:text-white transition-colors">
            ← トップページへ戻る
          </Link>
        </p>
      </div>
    </div>
  );
}
