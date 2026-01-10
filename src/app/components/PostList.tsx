"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { Post } from "@/lib/posts";

export default function PostList({ posts }: { posts: Post[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 pl-10 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
      </div>

      <div className="space-y-10">
        {filteredPosts.map((post) => (
          <div
            key={post.slug}
            className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-0"
          >
            {post.externalUrl ? (
              <a
                href={post.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <h2 className="text-xl font-semibold group-hover:text-gray-500 dark:group-hover:text-gray-300 transition-colors">
                  {post.title} <ArrowUpRight className="inline-block" />
                </h2>
                <div className="flex gap-3 text-sm text-gray-500 dark:text-gray-400 mt-1 mb-3">
                  <p>{post.date}</p>
                  {post.readingTime && (
                    <>
                      <span>•</span>
                      <p>{post.readingTime}</p>
                    </>
                  )}
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {post.excerpt}
                </p>
                <span className="inline-block mt-3 text-gray-600 dark:text-gray-400 font-medium group-hover:underline">
                  Read on Medium →
                </span>
              </a>
            ) : (
              <Link href={`/posts/${post.slug}`} className="group">
                <h2 className="text-xl font-semibold group-hover:text-gray-500 dark:group-hover:text-gray-300 transition-colors">
                  {post.title}
                </h2>
                <div className="flex gap-3 text-sm text-gray-500 dark:text-gray-400 mt-1 mb-3">
                  <p>{post.date}</p>
                  {post.readingTime && (
                    <>
                      <span>•</span>
                      <p>{post.readingTime}</p>
                    </>
                  )}
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {post.excerpt}
                </p>
                <span className="inline-block mt-3 text-gray-600 dark:text-gray-400 font-medium group-hover:underline">
                  Read more →
                </span>
              </Link>
            )}
          </div>
        ))}

        {filteredPosts.length === 0 && (
          <p className="text-gray-500 dark:text-gray-400 italic">
            No posts found matching your search.
          </p>
        )}
      </div>
    </>
  );
}
