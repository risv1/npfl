"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as "light" | "dark";
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.classList.toggle('dark', storedTheme === 'dark');
        }
    }, []);

    const setThemeAndStore = (theme: "light" | "dark") => {
        setTheme(theme);
        localStorage.setItem("theme", theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    return (
        <div className="w-fit h-fit fixed top-5 right-5">
            <button onClick={() => setThemeAndStore(theme === "light" ? "dark" : "light")} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800">
                {theme === "light" ? <Moon size={24} color="#000000" /> : <Sun size={24} color="#ffffff" />}
            </button>
        </div>
    );
}

export default ThemeToggle;