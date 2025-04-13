import { PropsWithChildren } from "react";

type AppLayoutProps = PropsWithChildren;

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="w-full px-10 transition-all duration-200 max-xs:w-48">{children}</div>
    </div>
  );
}
