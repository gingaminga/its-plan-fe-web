import type { ReactNode } from "react";

interface LoginLayoutProps {
  children: ReactNode;
}

export default function LoginLayout({ children }: Readonly<LoginLayoutProps>) {
  return <div className="hero-content">{children}</div>;
}
