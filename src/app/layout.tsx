import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "WTN | AI実践講座 × Web資産構築サービス「極」",
  description: "AIで、あなたのビジネスを「資産」に変える。自分で学ぶAI実践講座（無料〜有料）と、プロに任せるWeb資産構築サービス「極」。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
