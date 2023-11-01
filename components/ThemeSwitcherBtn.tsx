import { useState } from "react";
import ThemeLight from "./svg/ThemeLight";
import ThemeDark from "./svg/ThemeDark";

function ThemeSwitcherBtn() {
    const [theme, toggleTheme] = useState(true)
    
    return (
        <>
            <button
                type="button"
                className="text-sm p-2 hover:bg-slate-100 rounded dark:hover:bg-slate-700"
                onClick={() => toggleTheme((prev) => !prev)}
            >
                {
                    theme ? (
                        <ThemeLight />
                    ) : (
                        <ThemeDark />)
                }
            </button>
        </>
    );
}

export default ThemeSwitcherBtn;