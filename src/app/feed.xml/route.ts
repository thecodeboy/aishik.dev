import { getAllPosts } from "@/lib/posts"
import { NextResponse } from "next/server"

export async function GET() {
  const posts = getAllPosts()
  const baseUrl = "https://aishik.dev"

  // Format the current date according to RFC 822
  const now = new Date()
  const buildDate = now.toUTCString()

  // Create the RSS XML
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Aishik Saha's Blog</title>
  <link>${baseUrl}</link>
  <description>Senior Software Engineer writing about platforms and distributed systems</description>
  <language>en</language>
  <lastBuildDate>${buildDate}</lastBuildDate>
  <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
  ${posts
      .map((post) => {
        const dateObj = new Date(post.date)
        const pubDate = isNaN(dateObj.getTime())
          ? post.date
          : dateObj.toUTCString()

        return `
  <item>
    <title><![CDATA[${post.title}]]></title>
    <link>${baseUrl}/posts/${post.slug}</link>
    <guid isPermaLink="true">${baseUrl}/posts/${post.slug}</guid>
    <pubDate>${pubDate}</pubDate>
    <description><![CDATA[${post.excerpt}]]></description>
  </item>`
      })
      .join("")}
</channel>
</rss>`

  // Return the RSS feed with the appropriate content type
  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
