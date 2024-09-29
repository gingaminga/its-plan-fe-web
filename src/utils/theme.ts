import { themeTypeGuard } from "@/types/guard";
import { STORAGE_KEY, THEME_TYPE } from "@/utils/constants";
import Cookies from "js-cookie";

export const getSystemTheme = () => {
  const isDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

  return isDark ? THEME_TYPE.DARK : THEME_TYPE.LIGHT;
};

export const getStorageTheme = () => {
  const isBlockCookie = !window.navigator.cookieEnabled;

  if (isBlockCookie) {
    // 스토리지 접근이 불가하면 시스템 테마로 설정
    return getSystemTheme();
  }

  const theme = Cookies.get(STORAGE_KEY.THEME);
  if (!theme) {
    // 초기 테마 정보가 설정이 안 되어 있으면 시스템 테마로 설정
    return getSystemTheme();
  }

  if (!themeTypeGuard(theme)) {
    // 테마 정보와 상이한 값이 설정된 경우 시스템 테마로 설정
    Cookies.remove(STORAGE_KEY.THEME);

    return getSystemTheme();
  }

  return theme;
};
