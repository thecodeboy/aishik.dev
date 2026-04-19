import { getAllPosts, type Post } from "@/lib/posts";
import {
  ArrowRight,
  ArrowUpRight,
  AtSign,
  BookOpenText,
  Camera,
  Layers3,
  SquareCode,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

const focusAreas: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Platform engineering",
    description:
      "Building the paved roads, developer tooling, and infrastructure that help teams move quickly without losing reliability.",
    icon: Workflow,
  },
  {
    title: "Applied AI systems",
    description:
      "Shipping AI capabilities with a strong bias toward useful workflows, observability, and the realities of production.",
    icon: Sparkles,
  },
  {
    title: "Thoughtful side quests",
    description:
      "Writing, photography, and collecting the small details that make software feel more human and memorable.",
    icon: Layers3,
  },
];

const experience = [
  {
    company: "ServiceNow",
    period: "Dec 2020 - Present",
    summary:
      "At ServiceNow, I’m currently based in the Netherlands and working on AI Data Explorer, focused on improving the product’s accuracy and shipping new features that make it more useful and dependable.",
    accent:
      "from-emerald-400/30 via-emerald-200/20 to-transparent dark:from-emerald-300/15 dark:via-transparent",
  },
  {
    company: "DBS Bank",
    period: "Jul 2018 - Dec 2020",
    summary:
      "Founding engineer on the bank’s internal API marketplace, with hands-on work across frontend experience, backend services, and the broader developer platform.",
    accent:
      "from-orange-400/30 via-amber-200/20 to-transparent dark:from-orange-300/15 dark:via-transparent",
  },
];

const snapshots = [
  {
    title: "What I optimize for",
    body: "Dependable systems, calm developer experience, and tools that earn trust after the launch day excitement wears off.",
  },
  {
    title: "What this site is for",
    body: "A home for notes, lessons learned, and a small collection of photos from trips, walks, and the occasional lucky frame.",
  },
];

function LatestPostCard({ post }: { post: Post }) {
  const content = (
    <article className="group rounded-[30px] border border-black/5 bg-white/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-black/10 hover:bg-white dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_20px_60px_rgba(2,6,23,0.36)] dark:hover:border-white/20 dark:hover:bg-slate-900/[0.85]">
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

      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 transition-colors group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-300">
        {post.title}
      </h3>

      <p className="mt-4 text-pretty leading-7 text-slate-600 dark:text-slate-300">
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
      <a href={post.href} rel="noopener noreferrer" target="_blank">
        {content}
      </a>
    );
  }

  return <Link href={post.href}>{content}</Link>;
}

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <div className="pb-16 pt-2 sm:pt-4">
      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="animate-enter rounded-[32px] border border-black/5 bg-white/[0.72] px-6 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/[0.72] dark:shadow-[0_24px_80px_rgba(2,6,23,0.38)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-orange-500/80 dark:bg-orange-300/80" />
            Senior machine learning engineer
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-[4.5rem] lg:leading-[0.95] dark:text-white text-balance">
            I build{" "}
            <span className="font-serif text-[1.06em] italic text-emerald-700 dark:text-emerald-300">
              AI platforms
            </span>{" "}
            and the systems that make them dependable.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 text-pretty">
            I&apos;m Aishik Saha, a senior machine learning engineer at
            ServiceNow, based in the Netherlands since March 2026. I&apos;m
            currently working on AI Data Explorer, improving the product&apos;s
            accuracy and building new features that make it more useful in
            practice.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/posts"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:shadow-black/30 dark:hover:bg-slate-100"
            >
              Read the writing
              <ArrowRight size={16} />
            </Link>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-800 backdrop-blur-md hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-slate-900/[0.65] dark:text-slate-100 dark:hover:bg-slate-900"
              href="https://www.linkedin.com/in/thecodeboy"
              rel="noopener noreferrer"
              target="_blank"
            >
              Connect on LinkedIn
              <ArrowUpRight size={16} />
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-800 backdrop-blur-md hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-slate-900/[0.65] dark:text-slate-100 dark:hover:bg-slate-900"
              href="https://github.com/thecodeboy"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          <div
            className="animate-enter rounded-[28px] border border-black/5 bg-white/[0.68] px-6 py-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/[0.68] dark:shadow-[0_20px_60px_rgba(2,6,23,0.35)]"
            style={{ animationDelay: "120ms" }}
          >
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500/80 dark:bg-emerald-300/80" />
              Currently
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Working on AI Data Explorer at ServiceNow Netherlands
            </h2>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300 text-pretty">
              Since March 2026, my focus has been improving the product&apos;s
              accuracy and building new features that make AI Data Explorer more
              capable, reliable, and useful for the teams depending on it.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {snapshots.map((item, index) => (
              <div
                key={item.title}
                className="animate-enter rounded-[26px] border border-black/5 bg-white/60 px-5 py-5 shadow-[0_20px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 dark:shadow-[0_20px_50px_rgba(2,6,23,0.3)]"
                style={{ animationDelay: `${200 + index * 80}ms` }}
              >
                <h3 className="text-base font-semibold tracking-tight text-slate-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 text-pretty">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-orange-500/80 dark:bg-orange-300/80" />
              Latest posts
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Writing about systems, tools, and the craft in between.
            </h2>
          </div>
          <Link
            href="/posts"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-emerald-700 dark:text-slate-200 dark:hover:text-emerald-300"
          >
            Browse all posts
            <ArrowRight size={16} />
          </Link>
        </div>

        {latestPosts.length > 0 ? (
          <div className="grid gap-4 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <LatestPostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="rounded-[28px] border border-dashed border-black/10 bg-white/50 px-6 py-8 text-slate-600 backdrop-blur-md dark:border-white/15 dark:bg-slate-900/[0.45] dark:text-slate-300">
            New writing will show up here as it goes live.
          </div>
        )}
      </section>

      <section className="mt-16">
        <div className="mb-6">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-orange-500/80 dark:bg-orange-300/80" />
            What I like building
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 dark:text-white text-balance">
            Product-minded engineering with a strong platform backbone.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {focusAreas.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="animate-enter rounded-[30px] border border-black/5 bg-white/[0.65] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/[0.65] dark:shadow-[0_20px_60px_rgba(2,6,23,0.34)]"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300 text-pretty">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-orange-500/80 dark:bg-orange-300/80" />
            Experience
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-slate-950 dark:text-white text-balance">
            A short path through the teams and problems I&apos;ve enjoyed most.
          </h2>

          <div className="mt-6 space-y-4">
            {experience.map((item) => (
              <div
                key={item.company}
                className="relative overflow-hidden rounded-[30px] border border-black/5 bg-white/[0.68] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/[0.68] dark:shadow-[0_20px_60px_rgba(2,6,23,0.34)]"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent}`}
                />
                <div className="relative">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <h3 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                      {item.company}
                    </h3>
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      {item.period}
                    </p>
                  </div>
                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300 text-pretty">
                    {item.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-black/5 bg-white/70 px-6 py-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_24px_80px_rgba(2,6,23,0.38)] sm:px-8 sm:py-8">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-orange-500/80 dark:bg-orange-300/80" />
            Elsewhere
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
            Writing, photography, and the occasional side trail.
          </h2>
          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300 text-pretty">
            This site is a place to collect lessons learned, external posts, and
            a growing photo journal. If any of that resonates, there are a few
            easy places to continue the thread.
          </p>

          <div className="mt-6 grid gap-3">
            <Link
              href="/photos"
              className="flex items-center gap-4 rounded-[24px] border border-black/5 bg-white/70 px-5 py-4 hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-slate-950/[0.35] dark:hover:bg-slate-950/50"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                <Camera size={20} />
              </div>
              <div>
                <p className="font-semibold text-slate-950 dark:text-white">
                  Photos
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  A small visual journal.
                </p>
              </div>
            </Link>

            <Link
              href="/feed.xml"
              className="flex items-center gap-4 rounded-[24px] border border-black/5 bg-white/70 px-5 py-4 hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-slate-950/[0.35] dark:hover:bg-slate-950/50"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-700 dark:bg-orange-400/10 dark:text-orange-300">
                <BookOpenText size={20} />
              </div>
              <div>
                <p className="font-semibold text-slate-950 dark:text-white">
                  RSS feed
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Follow new posts without the algorithm.
                </p>
              </div>
            </Link>

            <a
              href="https://www.linkedin.com/in/thecodeboy"
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center gap-4 rounded-[24px] border border-black/5 bg-white/70 px-5 py-4 hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-slate-950/[0.35] dark:hover:bg-slate-950/50"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-700 dark:bg-sky-400/10 dark:text-sky-300">
                <AtSign size={20} />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-950 dark:text-white">
                  LinkedIn
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Say hello or keep in touch.
                </p>
              </div>
              <ArrowUpRight
                size={18}
                className="text-slate-400 dark:text-slate-500"
              />
            </a>

            <a
              href="https://github.com/thecodeboy"
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center gap-4 rounded-[24px] border border-black/5 bg-white/70 px-5 py-4 hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-slate-950/[0.35] dark:hover:bg-slate-950/50"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950/[0.08] text-slate-700 dark:bg-white/10 dark:text-slate-200">
                <SquareCode size={20} />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-950 dark:text-white">
                  GitHub
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Code, side projects, and experiments.
                </p>
              </div>
              <ArrowUpRight
                size={18}
                className="text-slate-400 dark:text-slate-500"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
