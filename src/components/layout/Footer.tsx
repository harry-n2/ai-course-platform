import Link from "next/link";

const LARK_FORM_URL =
  "https://ljpbqpwr5vbk.jp.larksuite.com/scheduler/96c06a2209d4e79e";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <span className="font-bold text-2xl tracking-widest text-white">
              WT<span className="text-[#d4af37]">N</span>
            </span>
            <p className="mt-3 text-sm max-w-xs">
              AIで、あなたのビジネスを「資産」に変える。
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 text-sm">
            <div className="space-y-2">
              <p className="font-bold text-white text-xs tracking-wider uppercase">サービス</p>
              <Link href="/#course" className="block hover:text-[#d4af37] transition-colors">AI実践講座</Link>
              <Link href="/#kiwami" className="block hover:text-[#d4af37] transition-colors">極サービス</Link>
              <Link href="/#plans" className="block hover:text-[#d4af37] transition-colors">料金プラン</Link>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-white text-xs tracking-wider uppercase">サポート</p>
              <Link href={LARK_FORM_URL} target="_blank" rel="noopener noreferrer" className="block hover:text-[#d4af37] transition-colors">お問い合わせ</Link>
              <Link href="/#faq" className="block hover:text-[#d4af37] transition-colors">FAQ</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-slate-700 text-xs text-center">
          © 2025 WTN. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
