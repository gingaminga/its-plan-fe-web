import GlobalNavigationBar from "@/components/common/GlobalNavigationBar";
import { Bell, CircleUserRound, Leaf, Menu } from "lucide-react";

export default function Header() {
  // TODO: 로그인 여부에 따른 예외처리

  return (
    <header className="navbar absolute top-0 w-full shadow-lg">
      <div className="navbar-start">
        <div className="dropdown hidden gap-2 max-sm:flex">
          <div tabIndex={0} role="button" className="btn btn-circle btn-ghost max-sm:btn-sm" aria-label="Menu button">
            <Menu className="max-sm:h-5 max-sm:w-5" />
          </div>
          <GlobalNavigationBar />
        </div>
        <a className="btn btn-ghost text-xl" href="/">
          ITS PLAN
          <Leaf className="h-5 w-5 text-green-600" />
        </a>
      </div>
      <div className="navbar-center max-sm:hidden">
        <GlobalNavigationBar />
      </div>
      <div className="navbar-end gap-2">
        <button aria-label="Alarm button" className="btn btn-circle btn-ghost max-sm:btn-sm" type="button">
          <div className="indicator">
            <span className="badge indicator-item badge-primary badge-xs" />
            <Bell className="max-sm:h-5 max-sm:w-5" />
          </div>
        </button>
        <button aria-label="Setting button" className="btn btn-circle btn-ghost max-sm:btn-sm" type="button">
          <CircleUserRound className="max-sm:h-5 max-sm:w-5" />
        </button>
      </div>
    </header>
  );
}
