"use client"

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ThemeLight from "./svg/ThemeLight";
import ThemeDark from "./svg/ThemeDark";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        className="text-sm p-2 hover:bg-slate-100 rounded dark:hover:bg-slate-700"
        onClick={() => {
          setTheme(
            resolvedTheme === "dark" ? "light" : "dark"
          );
        }}
      >
      { resolvedTheme === "light" ? (
          <ThemeLight />
        ) : (
          <ThemeDark />
        )}
      </button>
    </>
  );
};

export default ThemeSwitcher;
