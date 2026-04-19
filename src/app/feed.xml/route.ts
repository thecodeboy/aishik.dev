import { getAllPosts } from "@/lib/posts";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = getAllPosts();
  const baseUrl = "https://aishik.dev";

  // Format the current date according to RFC 822
  const now = new Date();
  const buildDate = now.toUTCString();

  // Create the RSS XML
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>aishik.dev - Personal site of Aishik Saha</title>
  <link>${baseUrl}</link>
  <description>Aishik Saha is a senior machine learning engineer. This is his personal site. 
    He is passionate about building platforms and distributed systems.</description>
  <language>en</language>
  <lastBuildDate>${buildDate}</lastBuildDate>
  <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
  ${posts
    .map((post) => {
      const link = post.isExternal ? post.href : `${baseUrl}${post.href}`;
      const pubDate = post.publishedAt
        ? new Date(post.publishedAt).toUTCString()
        : post.date;

      return `
  <item>
    <title><![CDATA[${post.title}]]></title>
    <link>${link}</link>
    <guid isPermaLink="true">${link}</guid>
    <pubDate>${pubDate}</pubDate>
    <description><![CDATA[${post.excerpt}]]></description>
  </item>`;
    })
    .join("")}
</channel>
</rss>`;

  // Return the RSS feed with the appropriate content type
  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
