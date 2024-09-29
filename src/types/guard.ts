import { THEME_TYPE } from "@/utils/constants";

export const themeTypeGuard = (theme: string): theme is THEME_TYPE =>
  theme === THEME_TYPE.DARK || theme === THEME_TYPE.LIGHT;
