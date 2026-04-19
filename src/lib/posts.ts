import fs from "node:fs";
import path from "node:path";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  href: string;
  isExternal: boolean;
  publishedAt: number;
  readingTime?: string;
  externalUrl?: string;
};

type ExternalPost = {
  title: string;
  date: string;
  excerpt: string;
  url: string;
};

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const monthIndexes = new Map([
  ["jan", 0],
  ["feb", 1],
  ["mar", 2],
  ["apr", 3],
  ["may", 4],
  ["jun", 5],
  ["jul", 6],
  ["aug", 7],
  ["sep", 8],
  ["oct", 9],
  ["nov", 10],
  ["dec", 11],
]);

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
  return `${minutes} min read`;
}

function stripMdxSyntax(value: string): string {
  return value
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[`*_>#]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength - 3).trimEnd()}...`;
}

function normalizeDate(rawDate: string): {
  displayDate: string;
  sortValue: number;
} {
  const trimmed = rawDate.trim();
  const shortMonthMatch = trimmed.match(
    /^(\d{1,2})\s+([A-Za-z]{3,})\s+(\d{4})$/,
  );

  if (shortMonthMatch) {
    const [, day, monthName, year] = shortMonthMatch;
    const monthIndex = monthIndexes.get(monthName.slice(0, 3).toLowerCase());

    if (monthIndex !== undefined) {
      const sortValue = Date.UTC(Number(year), monthIndex, Number(day));
      return {
        displayDate: dateFormatter.format(new Date(sortValue)),
        sortValue,
      };
    }
  }

  const parsed = Date.parse(trimmed);

  if (!Number.isNaN(parsed)) {
    return {
      displayDate: dateFormatter.format(new Date(parsed)),
      sortValue: parsed,
    };
  }

  return {
    displayDate: trimmed,
    sortValue: 0,
  };
}

function extractExcerpt(content: string): string {
  const paragraphs = content
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  const firstBodyParagraph = paragraphs.find(
    (block) =>
      !block.startsWith("# ") &&
      !block.toLowerCase().startsWith("published on "),
  );

  if (!firstBodyParagraph) {
    return "";
  }

  return truncate(stripMdxSyntax(firstBodyParagraph), 170);
}

export function getAllPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), "src/app/posts");
  const postSlugs = fs.readdirSync(postsDirectory).filter((file) => {
    const postPath = path.join(postsDirectory, file);
    return (
      fs.statSync(postPath).isDirectory() &&
      fs.existsSync(path.join(postPath, "page.mdx"))
    );
  });

  const localPosts = postSlugs.map((slug) => {
    const mdxPath = path.join(postsDirectory, slug, "page.mdx");
    const fileContents = fs.readFileSync(mdxPath, "utf8");
    const titleMatch = fileContents.match(/^# (.*)$/m);
    const rawDate = fileContents.match(/Published on (.*)/)?.[1] ?? "";
    const { displayDate, sortValue } = normalizeDate(rawDate);

    return {
      slug,
      title: titleMatch ? titleMatch[1] : slug,
      date: displayDate,
      excerpt: extractExcerpt(fileContents),
      href: `/posts/${slug}`,
      isExternal: false,
      publishedAt: sortValue,
      readingTime: calculateReadingTime(fileContents),
    };
  });

  const externalPostsPath = path.join(postsDirectory, "external-posts.json");
  let externalPosts: Post[] = [];

  if (fs.existsSync(externalPostsPath)) {
    const externalPostsData: ExternalPost[] = JSON.parse(
      fs.readFileSync(externalPostsPath, "utf8"),
    );

    externalPosts = externalPostsData.map((post) => {
      const { displayDate, sortValue } = normalizeDate(post.date);

      return {
        slug: post.url,
        title: post.title,
        date: displayDate,
        excerpt: truncate(stripMdxSyntax(post.excerpt), 170),
        href: post.url,
        externalUrl: post.url,
        isExternal: true,
        publishedAt: sortValue,
      };
    });
  }

  return [...localPosts, ...externalPosts].sort(
    (a, b) => b.publishedAt - a.publishedAt,
  );
}
