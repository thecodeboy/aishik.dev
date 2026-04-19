import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-12">
      <div className="w-full max-w-2xl rounded-[32px] border border-black/5 bg-white/[0.72] px-6 py-10 text-center shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/[0.72] dark:shadow-[0_24px_80px_rgba(2,6,23,0.38)] sm:px-10 sm:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          This page wandered off.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-7 text-slate-600 dark:text-slate-300">
          The link may be old, the URL may be wrong, or this page may have been
          moved somewhere more sensible.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:shadow-black/30 dark:hover:bg-slate-100"
        >
          <ArrowLeft size={16} />
          Back home
        </Link>
      </div>
    </section>
  );
}
