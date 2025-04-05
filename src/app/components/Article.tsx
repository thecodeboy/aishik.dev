export default function Article({ children }: { children: React.ReactNode }) {
  return <article className="prose lg:prose-xl dark:prose-invert mt-12">{children}</article>
}
