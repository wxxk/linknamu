import type { Metadata } from "next";
import { Noto_Serif_KR, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSerifKR = Noto_Serif_KR({
  subsets: ["korean"],
  weight: ["600", "700"],
  variable: "--font-display-kr",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["korean"],
  weight: ["400", "500"],
  variable: "--font-body-kr",
});

export const metadata: Metadata = {
  title: "링크나무",
  description: "내 모든 링크를 한 페이지에 모아 두고 공유하는 링크나무",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${notoSerifKR.variable} ${notoSansKR.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
