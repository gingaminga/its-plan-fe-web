import type { ReactNode } from "react";

interface ILoginLayout {
  children: ReactNode;
}

export default function LoginLayout({ children }: Readonly<ILoginLayout>) {
  return <div className="hero-content">{children}</div>;
}
