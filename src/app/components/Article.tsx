export default function Article({ children }: { children: React.ReactNode }) {
  return <article className="prose lg:prose-xl mt-12">{children}</article>;
}
