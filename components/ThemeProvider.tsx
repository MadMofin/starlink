"use client";

import { ThemeName, THEMES, themes } from "@/theme/themes";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type ThemeContextType = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

const DEFAULT_THEME = THEMES.ONE_LIGHT;

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeName>(DEFAULT_THEME);

  const saveOnLocalStorage = (theme: ThemeName) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as ThemeName | null;

    if (savedTheme && Object.keys(themes).includes(savedTheme)) {
      setTheme(savedTheme);
    } else {
      setTheme(DEFAULT_THEME);
      saveOnLocalStorage(DEFAULT_THEME);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const selectedTheme = themes[theme];

    Object.entries(selectedTheme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value as string);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: saveOnLocalStorage,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
};
