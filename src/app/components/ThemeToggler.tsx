"use client";

import LightDarkSVG from "./LightDarkSVG";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggler() {
  const { toggleMode, theme } = useTheme();

  return (
    <button onClick={toggleMode}>
      <LightDarkSVG dark={theme === "dark"} />
    </button>
  );
}
