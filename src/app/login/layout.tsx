import type { ReactNode } from "react";

interface LoginLayout {
  children: ReactNode;
}

export default function Layout({ children }: Readonly<LoginLayout>) {
  return <div className="hero-content">{children}</div>;
}
