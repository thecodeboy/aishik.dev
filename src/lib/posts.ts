import fs from "fs"
import path from "path"

export type Post = {
    slug: string
    title: string
    date: string
    excerpt: string
}

export function getAllPosts(): Post[] {
    // Path to posts directory
    const postsDirectory = path.join(process.cwd(), "src/app/posts")

    // Get all post directories (excluding files)
    const postSlugs = fs.readdirSync(postsDirectory).filter((file) => {
        return fs.statSync(path.join(postsDirectory, file)).isDirectory()
    })

    // For each post, extract metadata
    const posts = postSlugs.map((slug) => {
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

    // Sort posts by date (newest first)
    return posts.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

