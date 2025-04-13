import useThemeStore from "@/store/theme/theme";
import { STORAGE_KEY, THEME_TYPE } from "@/utils/constants";
import { getStorageTheme } from "@/utils/theme";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function useTheme() {
  const theme = useThemeStore((state) => state.theme);
  const { setTheme } = useThemeStore((state) => state.actions);

  /**
   * @description 테마 변경 시 이벤트
   */
  const toggleHandler = () => {
    const changedTheme = theme === THEME_TYPE.DARK ? THEME_TYPE.LIGHT : THEME_TYPE.DARK;

    document.documentElement.dataset.theme = changedTheme;
    Cookies.set(STORAGE_KEY.THEME, changedTheme);
    setTheme(changedTheme);
  };

  /**
   * @description 최초 로드 시 현재 테마 정보 저장하기
   */
  useEffect(() => {
    const storageTheme = getStorageTheme();
    setTheme(storageTheme);
  }, [setTheme]);

  return {
    isDark: theme === THEME_TYPE.DARK,
    isLight: theme === THEME_TYPE.LIGHT,
    theme,
    toggleHandler,
  };
}
