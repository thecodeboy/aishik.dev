"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon as House,
  Images,
  Menu,
  NotebookText,
  Rss,
  X,
  type LucideIcon,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems: Array<{
  href: string;
  label: string;
  icon: LucideIcon;
}> = [
  { href: "/", label: "Home", icon: House },
  { href: "/posts", label: "Posts", icon: NotebookText },
  { href: "/photos", label: "Photos", icon: Images },
  { href: "/feed.xml", label: "RSS", icon: Rss },
];

export default function NavMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div className="relative flex items-center gap-2">
      <nav className="hidden items-center gap-1 rounded-full border border-black/5 bg-white/[0.55] p-1 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/[0.55] md:flex">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition duration-200 ${
                isActive(item.href)
                  ? "bg-slate-950 text-white shadow-sm hover:bg-slate-950 dark:bg-white dark:text-slate-950 dark:hover:bg-white"
                  : "text-slate-700 hover:bg-slate-950/5 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
              }`}
            >
              <Icon size={16} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <ThemeToggle />

      <button
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/5 bg-white/70 text-slate-700 shadow-sm backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-slate-950 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:bg-slate-800 md:hidden"
        aria-controls="mobile-nav"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        type="button"
      >
        {isOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {isOpen ? (
        <div
          id="mobile-nav"
          className="absolute right-0 top-14 w-64 rounded-[28px] border border-black/5 bg-white/90 p-3 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90 dark:shadow-[0_20px_60px_rgba(2,6,23,0.45)] md:hidden"
        >
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition duration-200 ${
                    isActive(item.href)
                      ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                      : "text-slate-700 hover:bg-slate-950/5 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
                  }`}
                >
                  <Icon size={17} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
