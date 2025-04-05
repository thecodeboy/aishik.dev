"use client"

import { useState } from "react"
import Link from "next/link"
import { HomeIcon as House, Menu, NotebookText, Rss, X } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"

export default function NavMenu() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="relative">
            {/* Desktop Navigation - Horizontal Links */}
            <div className="hidden md:flex items-center space-x-2">
                <Link
                    href="/"
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 font-medium p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                    <House /> Home
                </Link>
                <Link
                    href="/posts"
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 font-medium p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                    <NotebookText /> Posts
                </Link>
                <Link
                    href="/feed.xml"
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 font-medium p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                    <Rss /> RSS
                </Link>
                <ThemeToggle />
            </div>
            {/* Mobile Navigation - Burger Menu */}
            <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg py-1 z-10 border border-gray-200 dark:border-gray-700">
                        <Link
                            href="/"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/posts"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                            onClick={() => setIsOpen(false)}
                        >
                            Posts
                        </Link>
                        <Link
                            href="/feed.xml"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                            onClick={() => setIsOpen(false)}
                        >
                            RSS
                        </Link>
                        <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
                            <ThemeToggle />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
