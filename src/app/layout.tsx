import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import "./main.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Link from "next/link";
import NavMenu from "./components/NavMenu";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://aishik.dev"),
  title: {
    default: "Aishik Saha",
    template: "%s | Aishik Saha",
  },
  description:
    "Personal site of Aishik Saha, a senior machine learning engineer at ServiceNow in the Netherlands working on AI Data Explorer and thoughtful software systems.",
  applicationName: "aishik.dev",
  authors: [{ name: "Aishik Saha", url: "https://aishik.dev" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aishik Saha",
    description:
      "Notes on AI systems, product engineering, distributed systems, and a small photo journal.",
    type: "website",
    url: "https://aishik.dev",
    siteName: "aishik.dev",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        alt: "Aishik Saha - Personal site preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aishik Saha",
    description:
      "Writing and notes from Aishik Saha on AI systems, product engineering, and software craft.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f1e8" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1220" },
  ],
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aishik Saha",
    url: "https://aishik.dev",
    jobTitle: "Senior Machine Learning Engineer",
    sameAs: [
      "https://www.linkedin.com/in/thecodeboy",
      "https://github.com/thecodeboy",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${cormorant.variable}`}
    >
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Aishik Saha's Blog"
          href="/feed.xml"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <div className="relative isolate min-h-screen overflow-hidden">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="animate-float absolute left-[-7rem] top-10 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-500/[0.12]" />
              <div
                className="animate-float absolute right-[-5rem] top-48 h-80 w-80 rounded-full bg-orange-300/[0.35] blur-3xl dark:bg-orange-400/10"
                style={{ animationDelay: "-4s" }}
              />
              <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-white/60 via-white/5 to-transparent dark:from-slate-950/[0.45] dark:via-transparent" />
            </div>

            <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
              <header className="sticky top-4 z-40 mb-8">
                <div className="rounded-[28px] border border-black/5 bg-white/70 px-5 py-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_20px_60px_rgba(2,6,23,0.36)]">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <Link
                        className="inline-block text-lg font-semibold tracking-tight text-slate-950 no-underline dark:text-white"
                        href="/"
                      >
                        Aishik Saha
                      </Link>
                      <p className="mt-1 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300">
                        Senior machine learning engineer at ServiceNow
                        Netherlands, working on AI Data Explorer and dependable
                        product systems.
                      </p>
                    </div>
                    <NavMenu />
                  </div>
                </div>
              </header>

              <main className="flex-1 pb-10">{children}</main>

              <footer className="mt-auto pb-6">
                <div className="rounded-[28px] border border-black/5 bg-white/60 px-6 py-6 text-sm text-slate-600 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300 dark:shadow-[0_20px_60px_rgba(2,6,23,0.32)]">
                  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <p className="max-w-2xl leading-6 text-pretty">
                      Except as otherwise noted, the content of this page is
                      licensed under the Creative Commons Attribution 4.0
                      License, and code samples are licensed under the MIT
                      License.
                    </p>
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                      © 2026 Aishik Saha
                    </p>
                  </div>
                </div>
              </footer>
            </div>
          </div>

          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
