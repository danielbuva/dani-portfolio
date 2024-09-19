"use client";

import LightDarkSVG from "./LightDarkSVG";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggler() {
  const { toggleMode, theme } = useTheme();

  return (
    <button onClick={toggleMode} className="absolute right-0 px-1 pt-[2px]">
      <LightDarkSVG dark={theme === "dark"} />
    </button>
  );
}
