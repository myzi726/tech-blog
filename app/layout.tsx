import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "먕먕지의 개발기록",
  description: "개인 기술 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-white dark:bg-black">
          <header className="border-b border-zinc-200 dark:border-zinc-800">
            <nav className="mx-auto max-w-6xl px-6 py-4">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="text-xl font-bold text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
                >
                  먕먕지의 개발기록
                </Link>
                <div className="flex gap-6">
                  <Link
                    href="/"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    글 목록
                  </Link>
                </div>
              </div>
            </nav>
          </header>
          <main className="mx-auto max-w-6xl px-6 py-12">{children}</main>
          <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-16">
            <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
              © {new Date().getFullYear()} 기술 블로그. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
