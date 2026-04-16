import { useLayoutEffect, useState, type ReactNode } from "react";
import { ThemeContext, type Theme } from "../contexts/ThemeContext";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("site-theme") as Theme;
    if (saved) return saved;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return prefersDark ? "dark" : "light";
  });
  useLayoutEffect(() => {
    const root = document.documentElement;

    localStorage.setItem("site-theme", theme);

    root.style.colorScheme = theme;
    root.dataset.theme = theme
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
