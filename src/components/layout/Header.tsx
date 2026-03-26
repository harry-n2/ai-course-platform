"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const LARK_FORM_URL =
  "https://ljpbqpwr5vbk.jp.larksuite.com/scheduler/96c06a2209d4e79e";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="font-bold text-2xl tracking-widest text-slate-900 group-hover:text-[#d4af37] transition-colors">
            WT<span className="text-[#d4af37]">N</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold tracking-wider">
          <Link href="/#course" className="text-slate-600 hover:text-[#d4af37] transition-colors">
            AI実践講座
          </Link>
          <Link href="/#kiwami" className="text-slate-600 hover:text-[#d4af37] transition-colors">
            極サービス
          </Link>
          <Link href="/#plans" className="text-slate-600 hover:text-[#d4af37] transition-colors">
            料金プラン
          </Link>
          <Link href="/#faq" className="text-slate-600 hover:text-[#d4af37] transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href={LARK_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-bold tracking-wider border border-slate-300 text-slate-700 hover:border-[#d4af37] hover:text-[#d4af37] transition-colors"
          >
            お問い合わせ
          </Link>
          <Link
            href="/#course-register"
            className="px-5 py-2.5 text-xs font-bold tracking-wider bg-slate-900 text-white hover:bg-[#d4af37] transition-colors border-l-2 border-[#d4af37]"
          >
            無料で始める
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-slate-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="メニュー"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-6 space-y-4">
          <Link href="/#course" className="block text-sm font-bold text-slate-700 py-2" onClick={() => setMobileOpen(false)}>
            AI実践講座
          </Link>
          <Link href="/#kiwami" className="block text-sm font-bold text-slate-700 py-2" onClick={() => setMobileOpen(false)}>
            極サービス
          </Link>
          <Link href="/#plans" className="block text-sm font-bold text-slate-700 py-2" onClick={() => setMobileOpen(false)}>
            料金プラン
          </Link>
          <Link href="/#faq" className="block text-sm font-bold text-slate-700 py-2" onClick={() => setMobileOpen(false)}>
            FAQ
          </Link>
          <div className="pt-4 space-y-3">
            <Link
              href={LARK_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-5 py-3 text-sm font-bold border border-slate-300 text-slate-700"
              onClick={() => setMobileOpen(false)}
            >
              お問い合わせ
            </Link>
            <Link
              href="/#course-register"
              className="block text-center px-5 py-3 text-sm font-bold bg-slate-900 text-white"
              onClick={() => setMobileOpen(false)}
            >
              無料で始める
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
