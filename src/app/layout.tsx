import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./main.css"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Link from "next/link"
import NavMenu from "./components/NavMenu"
import { ThemeProvider } from "./components/ThemeProvider"

export const metadata: Metadata = {
  title: "aishik.dev - Personal site of Aishik Saha",
  description: "Aishik Saha is a Senior Software Engineer. This is his personal site.",
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200 antialiased flex flex-col min-h-screen mx-auto max-w-[692px] px-6">
        <ThemeProvider>
          <div className="pt-16 pb-8 flex-grow flex flex-col">
            <header className="flex justify-between items-center w-full">
              <div>
                <Link className="text-medium inline-block font-medium no-underline dark:text-white" href="/">
                  Aishik Saha
                </Link>
                <span className="text-medium font-medium leading-none text-gray-500 dark:text-gray-400 block">
                  Senior Software Engineer
                </span>
              </div>
              <NavMenu />
            </header>
            <main className="flex-grow">{children}</main>
            <footer className="mt-8 text-sm border-t border-gray-300 dark:border-gray-700">
              <div className="mt-4">
                Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution
                4.0 License, and code samples are licensed under the MIT License.
                <div className="mt-2">© Copyright 2025 Aishik Saha</div>
              </div>
            </footer>
          </div>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
