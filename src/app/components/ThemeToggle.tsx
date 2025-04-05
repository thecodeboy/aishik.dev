"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    )
}
