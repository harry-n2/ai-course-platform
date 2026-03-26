"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    const supabase = createClient();

    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setMessage(error.message);
      } else {
        router.push("/dashboard/free");
      }
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${location.origin}/dashboard/free` },
      });
      if (error) {
        setMessage(error.message);
      } else {
        setMessage("確認メールを送信しました。メールをご確認ください。");
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="font-bold text-2xl tracking-widest text-white">
            WT<span className="text-[#d4af37]">N</span>
          </Link>
          <h1 className="text-2xl font-black text-white mt-6 mb-2">
            {isLogin ? "ログイン" : "無料会員登録"}
          </h1>
          <p className="text-slate-400 text-sm">
            {isLogin ? "アカウントにログインする" : "AI実践講座（Day 1〜10）を無料で受講"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 space-y-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2 tracking-wider uppercase">
              メールアドレス
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
              placeholder="example@email.com"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2 tracking-wider uppercase">
              パスワード
            </label>
            <input
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
              placeholder="8文字以上"
            />
          </div>

          {message && (
            <p className={`text-sm p-3 ${message.includes("送信") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-slate-900 text-white font-bold text-sm tracking-wider hover:bg-[#d4af37] transition-colors disabled:opacity-50"
          >
            {loading ? "処理中..." : isLogin ? "ログインする" : "無料登録する"}
          </button>

          <p className="text-center text-sm text-slate-500">
            {isLogin ? "アカウントをお持ちでない方は" : "すでにアカウントをお持ちの方は"}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#d4af37] font-bold ml-1 hover:underline"
            >
              {isLogin ? "新規登録" : "ログイン"}
            </button>
          </p>
        </form>

        <p className="text-center mt-6">
          <Link href="/" className="text-slate-400 text-xs hover:text-white transition-colors">
            ← トップページへ戻る
          </Link>
        </p>
      </div>
    </div>
  );
}
