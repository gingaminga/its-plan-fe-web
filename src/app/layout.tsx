import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "POL",
  description: "Plan of life",
};

interface IRootLayout {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<IRootLayout>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
