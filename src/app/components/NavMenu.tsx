"use client"

import { useState } from "react"
import Link from "next/link"
import { House, Menu, NotebookText, Rss, X } from "lucide-react"

export default function NavMenu() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="relative">
            {/* Desktop Navigation - Horizontal Links */}
            <div className="hidden md:flex items-center space-x-6">
                <Link href="/" className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium">
                    <House /> Home
                </Link>
                <Link href="/posts" className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium">
                    <NotebookText /> Posts
                </Link>
                <Link href="/feed.xml" className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium">
                    <Rss /> RSS
                </Link>
            </div>

            {/* Mobile Navigation - Burger Menu */}
            <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    className="p-2 rounded-md hover:bg-gray-200 transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                        <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                        <Link
                            href="/posts"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsOpen(false)}
                        >
                            Posts
                        </Link>
                        <Link
                            href="/feed.xml"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsOpen(false)}
                        >
                            RSS
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
