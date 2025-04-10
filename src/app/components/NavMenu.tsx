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
            <div className="md:hidden flex items-center justify-between">
                <ThemeToggle />
                {!isOpen ? (
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <Menu size={20} />
                    </button>
                ) : null}
                {isOpen && (
                    <div className="absolute right-0 top-0 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg z-10 border border-gray-200 dark:border-gray-700">
                        <div className="flex justify-end">
                            <button
                                onClick={toggleMenu}
                                className="mr-1 mt-1 p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                aria-label="Close menu"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="py-1">
                            <Link
                                href="/"
                                className="flex items-center gap-4 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 rounded-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                <House /> Home
                            </Link>
                            <Link
                                href="/posts"
                                className="flex items-center gap-4 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                onClick={() => setIsOpen(false)}
                            >
                                <NotebookText /> Posts
                            </Link>

                            <Link
                                href="/feed.xml"
                                className="flex items-center gap-4 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 rounded-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                <Rss /> RSS
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
