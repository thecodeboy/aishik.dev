import Link from "next/link"
import { getAllPosts } from "@/lib/posts"

export default function Posts() {
  const posts = getAllPosts()

  return (
    <div className="mt-12 mb-20">
      <h1 className="text-3xl font-bold mb-8">All Posts</h1>

      <div className="space-y-10">
        {posts.map((post) => (
          <div key={post.slug} className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-0">
            <Link href={`/posts/${post.slug}`} className="group">
              <h2 className="text-xl font-semibold group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 mb-3">{post.date}</p>
              <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
              <span className="inline-block mt-3 text-gray-600 dark:text-gray-400 font-medium group-hover:underline">
                Read more →
              </span>
            </Link>
          </div>
        ))}

        {posts.length === 0 && <p className="text-gray-500 dark:text-gray-400 italic">No posts found.</p>}
      </div>
    </div>
  )
}
