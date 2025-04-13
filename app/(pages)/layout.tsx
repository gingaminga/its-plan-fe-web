import Header from "@/components/Header";
import { PropsWithChildren } from "react";

type AppLayoutProps = PropsWithChildren;

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center overflow-auto px-10 pt-14 transition-all duration-200">
        {children}
      </main>
    </div>
  );
}
