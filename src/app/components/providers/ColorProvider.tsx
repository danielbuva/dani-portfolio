"use client";

import { type ReactNode, useState } from "react";
import { ThemeContext } from "~/app/hooks/useTheme";

export function ColorProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");

  const toggleMode = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleMode,
      }}
    >
      <body id={theme}>{children}</body>
    </ThemeContext.Provider>
  );
}
