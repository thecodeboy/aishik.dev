"use client";

import { useDeferredValue, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Search } from "lucide-react";
import { Post } from "@/lib/posts";

export default function PostList({ posts }: { posts: Post[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const deferredQuery = useDeferredValue(searchQuery);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(deferredQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(deferredQuery.toLowerCase()),
  );

  return (
    <div>
      <div className="rounded-[30px] border border-black/5 bg-white/[0.68] p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/[0.68] dark:shadow-[0_20px_60px_rgba(2,6,23,0.34)] sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <label
              htmlFor="post-search"
              className="text-sm font-semibold text-slate-900 dark:text-white"
            >
              Search posts
            </label>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Filter by title or excerpt.
            </p>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Showing {filteredPosts.length} of {posts.length}
          </p>
        </div>

        <div className="relative mt-4">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            id="post-search"
            type="text"
            placeholder="Search by title, topic, or phrase"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-[22px] border border-black/[0.08] bg-white/80 py-3.5 pl-11 pr-4 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:border-white/10 dark:bg-slate-950/[0.35] dark:text-white dark:focus:border-emerald-300 dark:focus:ring-emerald-300/10"
          />
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        {filteredPosts.map((post) => {
          const card = (
            <article className="group rounded-[30px] border border-black/5 bg-white/[0.68] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-black/10 hover:bg-white dark:border-white/10 dark:bg-slate-900/[0.68] dark:shadow-[0_20px_60px_rgba(2,6,23,0.34)] dark:hover:border-white/20 dark:hover:bg-slate-900/80 sm:p-7">
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <span>{post.date}</span>
                {post.readingTime ? (
                  <>
                    <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                    <span>{post.readingTime}</span>
                  </>
                ) : null}
                {post.isExternal ? (
                  <span className="rounded-full bg-orange-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-700 dark:bg-orange-500/10 dark:text-orange-200">
                    External
                  </span>
                ) : null}
              </div>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 transition-colors group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-300">
                {post.title}
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-slate-600 dark:text-slate-300 text-pretty">
                {post.excerpt}
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-100">
                {post.isExternal ? "Read externally" : "Read article"}
                {post.isExternal ? (
                  <ArrowUpRight size={16} />
                ) : (
                  <ArrowRight size={16} />
                )}
              </span>
            </article>
          );

          if (post.isExternal) {
            return (
              <a
                key={post.slug}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {card}
              </a>
            );
          }

          return (
            <Link key={post.slug} href={post.href}>
              {card}
            </Link>
          );
        })}

        {filteredPosts.length === 0 ? (
          <div className="rounded-[28px] border border-dashed border-black/10 bg-white/50 px-6 py-8 text-center text-slate-600 backdrop-blur-md dark:border-white/15 dark:bg-slate-900/[0.45] dark:text-slate-300">
            No posts matched that search yet.
          </div>
        ) : null}
      </div>
    </div>
  );
}
