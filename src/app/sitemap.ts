import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/posts"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aishik.dev"
  const posts = getAllPosts()

  // Create sitemap entries for all blog posts
  const postEntries = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Add static pages
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...postEntries,
  ]
}
