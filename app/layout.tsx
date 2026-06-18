import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "설탭 줌스터디 | 함께 집중하는 온라인 스터디룸",
  description:
    "설탭 온라인 Zoom 스터디룸 — 매주 월~금 오후 6시~11시, 손 인증으로 함께 집중해요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKR.variable}`}>
      <body className="min-h-screen bg-slate-50 font-[var(--font-noto-sans-kr)]">
        {children}
      </body>
    </html>
  );
}
