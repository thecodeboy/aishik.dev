import { getAllPosts } from "@/lib/posts"
import PostList from "../components/PostList"

export default function Posts() {
  const posts = getAllPosts()

  return (
    <div className="mt-12 mb-20">
      <h1 className="text-3xl font-bold mb-8">All Posts</h1>
      <PostList posts={posts} />
    </div>
  )
}
