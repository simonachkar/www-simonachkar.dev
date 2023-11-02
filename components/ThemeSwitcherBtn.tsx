import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ThemeLight from "./svg/ThemeLight";
import ThemeDark from "./svg/ThemeDark";
import ThemeSystem from "./svg/ThemeSystem";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const [showText, setShowText] = useState(false);
  const { theme, setTheme } = useTheme();

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
      
            setShowText(true);
            setTimeout(() => {
              setShowText(false);  
            }, 1000);

          setTheme(
            theme === "light" ? "system" : theme === "dark" ? "light" : "dark"
          );
        }}
      >
        {theme === "system" ? (
          <ThemeSystem />
        ) : theme === "light" ? (
          <ThemeLight />
        ) : (
          <ThemeDark />
        )}
      </button>
    
        <p className={`text-xs md:text-sm absolute mt-12 font-mono tracking-wider ${showText ? 'opacity-100' : 'opacity-0' } duration-300`}>
          Theme: 
          <span className="font-bold">
            {" "}
            {theme === "system"
              ? " System"
              : theme === "light"
              ? " Light"
              : " Dark"}
          </span>
        </p>
      
    </>
  );
};

export default ThemeSwitcher;
