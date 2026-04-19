"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/5 bg-white/70 text-slate-700 shadow-sm backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-slate-950 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:bg-slate-800"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      type="button"
    >
      {isDark ? <SunMedium size={18} /> : <MoonStar size={18} />}
    </button>
  );
}
