import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import PostList from "../components/PostList";

export const metadata: Metadata = {
  title: "Posts",
  description:
    "Writing by Aishik Saha on AI platforms, software engineering, distributed systems, and the things learned along the way.",
};

export default function Posts() {
  const posts = getAllPosts();
  const externalCount = posts.filter((post) => post.isExternal).length;

  return (
    <div className="pb-20 pt-2 sm:pt-4">
      <section className="rounded-[32px] border border-black/5 bg-white/[0.72] px-6 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/[0.72] dark:shadow-[0_24px_80px_rgba(2,6,23,0.38)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-orange-500/80 dark:bg-orange-300/80" />
          Writing archive
        </p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white sm:text-6xl text-balance">
          Notes on systems, AI tooling, and the practical side of building.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 text-pretty">
          A mix of posts published here and external writing collected in one
          place. Search by title or excerpt to jump straight to what looks
          useful.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
          <span className="rounded-full border border-black/5 bg-white/[0.65] px-4 py-2 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/[0.35]">
            {posts.length} total posts
          </span>
          <span className="rounded-full border border-black/5 bg-white/[0.65] px-4 py-2 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/[0.35]">
            {posts.length - externalCount} on-site
          </span>
          <span className="rounded-full border border-black/5 bg-white/[0.65] px-4 py-2 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/[0.35]">
            {externalCount} external
          </span>
        </div>
      </section>

      <section className="mt-8">
        <PostList posts={posts} />
      </section>
    </div>
  );
}
