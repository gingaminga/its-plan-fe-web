import type { ReactNode } from "react";

interface ToDoDailyLayoutProps {
  children: ReactNode;
}

export default function ToDoDailyLayout({ children }: Readonly<ToDoDailyLayoutProps>) {
  return <div className="hero-content w-full">{children}</div>;
}
