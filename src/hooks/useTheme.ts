import useThemeStore from "@/store/theme/theme";
import { THEME_TYPE } from "@/utils/constants";
import { ChangeEvent } from "react";

export default function useTheme() {
  const theme = useThemeStore((state) => state.theme);
  const { setTheme } = useThemeStore((state) => state.actions);

  /**
   * @description 테마 변경 시 이벤트
   */
  const toggleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const changedTheme = event.target.checked ? THEME_TYPE.DARK : THEME_TYPE.LIGHT;
    setTheme(changedTheme);
    document.documentElement.setAttribute("data-theme", changedTheme);
  };

  return {
    isDark: theme === THEME_TYPE.DARK,
    isLight: theme === THEME_TYPE.LIGHT,
    theme,
    toggleHandler,
  };
}
