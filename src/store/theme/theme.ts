import { THEME_TYPE } from "@/utils/constants";
import { create } from "zustand";

interface ThemeState {
  theme: THEME_TYPE.DARK | THEME_TYPE.LIGHT;
}

interface ThemeAction {
  actions: {
    setTheme: (theme: THEME_TYPE.DARK | THEME_TYPE.LIGHT) => void;
  };
}

const useThemeStore = create<ThemeState & ThemeAction>()((set) => ({
  theme: THEME_TYPE.LIGHT,
  actions: {
    setTheme: (theme) => set(() => ({ theme })),
  },
}));

export default useThemeStore;
