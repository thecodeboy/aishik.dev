import fs from "fs"
import path from "path"

export type Post = {
    slug: string
    title: string
    date: string
    excerpt: string
    externalUrl?: string
}

type ExternalPost = {
    title: string
    date: string
    excerpt: string
    url: string
}

export function getAllPosts(): Post[] {
    // Path to posts directory
    const postsDirectory = path.join(process.cwd(), "src/app/posts")

    // Get all post directories (excluding files)
    const postSlugs = fs.readdirSync(postsDirectory).filter((file) => {
        return fs.statSync(path.join(postsDirectory, file)).isDirectory()
    })

    // For each post, extract metadata
    const localPosts = postSlugs.map((slug) => {
        // Read the MDX file
        const mdxPath = path.join(postsDirectory, slug, "page.mdx")
        const fileContents = fs.readFileSync(mdxPath, "utf8")

        // Extract title (first h1)
        const titleMatch = fileContents.match(/# (.*)/)
        const title = titleMatch ? titleMatch[1] : slug

        // Extract date
        const dateMatch = fileContents.match(/Published on (.*)/)
        const date = dateMatch ? dateMatch[1] : ""

        // Extract excerpt (first paragraph after title)
        const excerptMatch = fileContents.match(/# .*\n\nPublished on .*\n\n(.*)/)
        const excerpt = excerptMatch ? excerptMatch[1].substring(0, 150) + "..." : ""

        return {
            slug,
            title,
            date,
            excerpt,
        }
    })

    // Load external posts from JSON
    const externalPostsPath = path.join(postsDirectory, "external-posts.json")
    let externalPosts: Post[] = []
    
    if (fs.existsSync(externalPostsPath)) {
        const externalPostsData: ExternalPost[] = JSON.parse(
            fs.readFileSync(externalPostsPath, "utf8")
        )
        externalPosts = externalPostsData.map((post) => ({
            slug: post.url, // Use URL as slug for external posts
            title: post.title,
            date: post.date,
            excerpt: post.excerpt,
            externalUrl: post.url,
        }))
    }

    // Combine and sort all posts by date (newest first)
    const allPosts = [...localPosts, ...externalPosts]
    return allPosts.sort((a, b) => {
        // Parse dates in format "DD MMM YYYY" or "D MMM YYYY"
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        
        // Sort in descending order (newest first)
        return dateB.getTime() - dateA.getTime()
    })
}

