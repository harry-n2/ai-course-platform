"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";

const LARK_FORM_URL =
  "https://ljpbqpwr5vbk.jp.larksuite.com/share/base/form/shrjp9gksNra45vIjBd3UBlJ23e";

const PLANS = [
  {
    id: "ume",
    name: "梅",
    nameEn: "Lite",
    price: 150000,
    includes: ["「売れる」LP制作", "簡易診断アプリ"],
    recommended: false,
  },
  {
    id: "take",
    name: "竹",
    nameEn: "Standard",
    price: 350000,
    includes: ["「売れる」LP制作", "診断アプリ実装", "LINEステップ配信案", "Kindle出版サポート"],
    recommended: true,
  },
  {
    id: "matsu",
    name: "松",
    nameEn: "Premium",
    price: 600000,
    includes: ["フルパッケージ全内容", "全方位運用支援"],
    recommended: false,
  },
] as const;

type PlanId = "ume" | "take" | "matsu";

export default function CheckoutPage() {
  const [selectedPlan, setSelectedPlan] = useState<PlanId>("take");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleCheckout = async () => {
    setLoading(true);
    setError("");

    const res = await fetch("/api/stripe/create-checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ planId: selectedPlan }),
    });

    if (res.status === 401) {
      router.push("/register?redirect=checkout");
      return;
    }

    const data = await res.json();

    if (!res.ok || !data.url) {
      setError(data.error || "決済の開始に失敗しました。もう一度お試しください。");
      setLoading(false);
      return;
    }

    window.location.href = data.url;
  };

  const selected = PLANS.find((p) => p.id === selectedPlan)!;

  return (
    <div className="min-h-screen bg-slate-900 px-4 py-16">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <Link href="/" className="font-bold text-2xl tracking-widest text-white">
            WT<span className="text-[#d4af37]">N</span>
          </Link>
          <h1 className="text-2xl font-black text-white mt-6 mb-2">有料プランへアップグレード</h1>
          <p className="text-slate-400 text-sm">Module 1〜5のフルコンテンツにアクセスできます</p>
        </div>

        {/* Plan selector */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {PLANS.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`p-4 border-2 text-left transition-colors relative ${
                selectedPlan === plan.id
                  ? "border-[#d4af37] bg-[#d4af37]/10"
                  : "border-slate-700 hover:border-slate-500"
              }`}
            >
              {plan.recommended && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#d4af37] text-slate-900 text-xs font-black px-2 py-0.5 whitespace-nowrap">
                  推奨
                </span>
              )}
              <p className={`text-xs font-bold mb-1 ${selectedPlan === plan.id ? "text-[#d4af37]" : "text-slate-500"}`}>
                【{plan.name}】
              </p>
              <p className="text-white font-black text-lg">
                ¥{plan.price.toLocaleString()}
              </p>
              <p className="text-slate-400 text-xs mt-0.5">税抜</p>
            </button>
          ))}
        </div>

        {/* Selected plan detail */}
        <div className="bg-white p-8 mb-4">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-xs font-bold text-[#d4af37] tracking-wider uppercase mb-1">
                選択中のプラン
              </p>
              <h2 className="text-xl font-black text-slate-900">
                【{selected.name}】{selected.nameEn}プラン
              </h2>
            </div>
            <div className="text-right">
              <p className="text-3xl font-black text-slate-900">
                ¥{selected.price.toLocaleString()}
              </p>
              <p className="text-xs text-slate-400">税抜・買い切り</p>
            </div>
          </div>

          {/* 含まれる内容 */}
          <div className="border-t border-slate-100 pt-5 mb-6">
            <p className="text-xs font-bold text-slate-500 tracking-wider uppercase mb-3">
              含まれる内容
            </p>
            <ul className="space-y-2 text-sm text-slate-600 mb-4">
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#d4af37] shrink-0" />Module 01〜05 全動画コンテンツ</li>
              <li className="flex items-center gap-2"><CheckCircle size={14} className="text-[#d4af37] shrink-0" />無料プラン（Day 1〜10）含む</li>
              {selected.includes.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-[#d4af37] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 text-red-700 text-sm p-3 mb-4">
              {error}
            </div>
          )}

          {/* Stripe checkout button */}
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="w-full py-4 bg-slate-900 text-white font-black text-sm tracking-wider hover:bg-[#d4af37] hover:text-slate-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Stripeへ移動中..." : `¥${selected.price.toLocaleString()} で申し込む（Stripeで決済）`}
          </button>

          <p className="text-center text-xs text-slate-400 mt-3">
            Stripe社の安全な決済システムを使用しています
          </p>
        </div>

        {/* Contact */}
        <div className="text-center mb-6">
          <p className="text-slate-400 text-xs mb-2">ご不明な点はお気軽にご相談ください</p>
          <Link
            href={LARK_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4af37] text-xs font-bold hover:underline"
          >
            お問い合わせフォーム →
          </Link>
        </div>

        <p className="text-center">
          <Link href="/" className="text-slate-500 text-xs hover:text-white transition-colors">
            ← トップページへ戻る
          </Link>
        </p>
      </div>
    </div>
  );
}
