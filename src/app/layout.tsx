import "@/assets/styles/globals.css";
import Header from "@/components/common/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ITS PLAN",
  description: "Plan of life! It's plan :)",
};

interface IRootLayout {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<IRootLayout>) {
  const cookieStore = cookies();
  const themeCookie = cookieStore.get("theme");
  const theme = themeCookie?.value;

  return (
    <html lang="ko" data-theme={theme ?? ""}>
      {!theme && (
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              const isDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
              document.documentElement.setAttribute("data-theme", isDark ? 'dark' : 'light');
            `,
            }}
          />
        </head>
      )}
      <body className={inter.className}>
        <div className="h-screen min-h-screen w-screen">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
