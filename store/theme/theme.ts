import { THEME_TYPE } from "@/utils/constants";
import { create } from "zustand";

interface ThemeAction {
  actions: {
    setTheme: (theme: THEME_TYPE.DARK | THEME_TYPE.LIGHT) => void;
  };
}

interface ThemeState {
  theme: THEME_TYPE.DARK | THEME_TYPE.LIGHT;
}

const useThemeStore = create<ThemeAction & ThemeState>()((set) => ({
  actions: {
    setTheme: (theme) => set(() => ({ theme })),
  },
  theme: THEME_TYPE.LIGHT,
}));

export default useThemeStore;
