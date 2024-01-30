import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './main.css'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'aishik.dev - Personal site of Aishik Saha',
  description: 'Aishik Saha is a Senior Software Engineer. This is his personal site.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className='bg-gray-100 text-gray-700 antialiased mx-auto mt-16 mb-8 max-w-[692px] px-6'>
        <header className="flex flex-col items-start">
          <a className="text-medium inline-block font-medium no-underline" href="/">Aishik Saha</a>
          <span className="text-medium font-medium leading-none text-gray-500">Senior Software Engineer</span>
        </header>
        {children}
        <footer className="mt-60 text-sm">
          Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License,
          and code samples are licensed under the MIT License.
          <br />
          © Copyright 2023 Aishik Saha
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
