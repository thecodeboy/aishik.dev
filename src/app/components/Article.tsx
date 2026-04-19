export default function Article({ children }: { children: React.ReactNode }) {
  return (
    <article className="prose prose-lg mx-auto mt-6 max-w-3xl text-slate-700 prose-headings:font-sans prose-headings:tracking-tight prose-headings:text-slate-950 prose-h1:font-serif prose-h1:text-5xl prose-h1:font-semibold prose-h1:italic prose-h1:tracking-[-0.04em] prose-p:text-slate-600 prose-p:text-pretty prose-a:text-emerald-700 prose-a:no-underline hover:prose-a:text-emerald-600 prose-strong:text-slate-950 prose-code:text-slate-900 prose-pre:rounded-[24px] prose-pre:border prose-pre:border-white/10 prose-pre:bg-slate-950 prose-hr:border-black/10 prose-blockquote:border-emerald-500 prose-blockquote:text-slate-600 dark:text-slate-200 dark:prose-invert dark:prose-headings:text-white dark:prose-p:text-slate-300 dark:prose-a:text-emerald-300 dark:hover:prose-a:text-emerald-200 dark:prose-strong:text-white dark:prose-blockquote:text-slate-300">
      {children}
    </article>
  );
}
