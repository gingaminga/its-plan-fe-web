"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ThemeChanger() {
  const [theme, setTheme] = useState(false);

  const onChangeTheme = () => {
    setTheme((currentTheme) => !currentTheme);
  };

  return (
    <label className="btn btn-circle btn-ghost swap swap-rotate max-sm:btn-sm" htmlFor="theme-changer">
      <input
        aria-labelledby="Theme changer"
        checked={theme}
        id="theme-changer"
        onChange={onChangeTheme}
        type="checkbox"
      />
      <Sun className="swap-on fill-current max-sm:h-5 max-sm:w-5" />
      <Moon className="swap-off fill-current max-sm:h-5 max-sm:w-5" />
    </label>
  );
}
