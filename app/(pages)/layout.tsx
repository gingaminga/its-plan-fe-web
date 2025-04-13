import { PropsWithChildren } from "react";

type AppLayoutProps = PropsWithChildren;

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="w-68 px-10 transition-all duration-200 md:w-[48rem] 2xl:w-full">{children}</div>
    </div>
  );
}
