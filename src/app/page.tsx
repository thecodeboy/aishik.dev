import { getAllPosts } from "@/lib/posts"
import Link from "next/link"

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3)
  console.log(latestPosts)
  return (
    <>
      <div className="mt-40">
        <h1>Hello there!</h1>
        <p>
          I&apos;m a senior software engineer working at ServiceNow. I like building platforms and distributed systems.
        </p>
      </div>

      { /* Recent Posts */}

      {latestPosts.length > 0 && (
        <div className="mt-16 mb-20">
          <h2 className="text-2xl font-semibold mb-6">Latest Posts</h2>
          <div className="space-y-6">
            {latestPosts.map((post) => (
              <div key={post.slug}>
                <Link href={`/posts/${post.slug}`} className="group">
                  <h3 className="text-lg font-medium group-hover:text-gray-600 transition-colors">{post.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/posts" className="text-gray-600 font-medium hover:underline">
              View all posts →
            </Link>
          </div>
        </div>
      )}

      { /* Work Showcase */}

      <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>

      <div className="mt-10 border rounded-2xl p-4 text-[#4e9246]" style={{ backgroundColor: '#83d67c' }}>
        <h1 className="text-xl font-bold">ServiceNow</h1>
        <h2 className="text-white font-bold">Dec 2020 - Present</h2>
        <p className="text-white font-semibold">
          Building the AI Development Platform as part of the GenAI Development Platform team.
          I&apos;ve worked on extracting customer data into a custom built data lake. Created a Jupyter notebook
          self service platform to experiment with this data.
        </p>
      </div>

      <div className="mt-10 border rounded-2xl p-4 text-[#f9f3f1]" style={{ backgroundColor: '#ac7a8f' }}>
        <h1 className="text-xl font-bold">DBS Bank</h1>
        <h2 className="text-white font-bold">Jul 2018 - Dec 2020</h2>
        <p className="text-white font-semibold">
          Founding engineer to build the bank&apos;s new internal API marketplace. Also worked on DBS Developers Portal.
          I was a full stack engineer and built the frontend with Angular and backend services with Spring Boot and Java.
        </p>
      </div>

      <div className="mt-10">
        Connect with me on <a className="underline" href="https://www.linkedin.com/in/thecodeboy">LinkedIn</a>.
      </div>
    </>
  )
}
