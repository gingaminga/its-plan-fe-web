"use client";

import useTheme from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";

export default function ThemeChanger() {
  const { isDark, toggleHandler } = useTheme();

  return (
    <label className="btn btn-circle btn-ghost swap swap-rotate max-sm:btn-sm" htmlFor="theme-changer">
      <input
        aria-labelledby="Theme changer"
        className="theme-controller"
        checked={isDark}
        id="theme-changer"
        onChange={toggleHandler}
        type="checkbox"
      />
      <Sun className="swap-on fill-current max-sm:h-5 max-sm:w-5" />
      <Moon className="swap-off fill-current max-sm:h-5 max-sm:w-5" />
    </label>
  );
}
