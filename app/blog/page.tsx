
import Container from "@/components/containers";
import { getAllBlogs } from "@/util/mdx_clean";
import type { Metadata } from "next";
import  Link  from 'next/link';

export const metadata: Metadata = {
  title: "Blog | Karn Singh",
  description: "Thoughts on software engineering, web development, and technology",
};

export default async function BlogIndex() {
  const posts = await getAllBlogs();

  return (
    
    <Container className="min-h-screen px-8 md:p-20 md:pb-10 relative mx-auto">
      <div
          className="absolute right-0 top-0 h-full w-6 border-x border-x-(--pattern-fg)
          bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]
          bg-size-[10px_10px] bg-fixed opacity-90 dark:opacity-15"
        />

        {/* LEFT BORDER */}
        <div
          className="absolute left-0 top-0 h-full w-6 border-x border-x-(--pattern-fg)
          bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]
          bg-size-[10px_10px] bg-fixed opacity-90 dark:opacity-15"
        />
      <div className="max-w-4xl mx-auto ">

        {/* Header */}
        <div className="mb-3">
          <h1 className="text-3xl text-neutral-900 dark:text-neutral-50 md:text-3xl font-bold font-custom tracking-tight ">
            <span className="link--elara">All blogs</span></h1>

          <p className="text-s text-neutral-600 dark:text-neutral-400 leading-relaxed mt-1 tracking-tight font-custom2 max-w-xl">
            I am a software engineer with a passion for building scalable
            and efficient systems. I spend my days solving problems at Google
            while tinkering with ideas after hours.
          </p>
        </div>
        <div className="absolute right-6 w-212 h-px bg-(--pattern-fg) opacity-90 dark:opacity-15 "></div>

        {/* Blog Posts */}
        <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="block py-6 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">

                {/* Left — Title + Description */}
                <div className="flex-1">
                  <h2
                    className="
                      text-s md:text-xl font-semibold font-custom mb-1
                      text-neutral-900 dark:text-neutral-50
                      group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors
                    "
                  >
                    {p.title ?? p.slug}
                  </h2>

                  {p.description && (
                    <p className="text-s md:text-base text-neutral-600 dark:text-neutral-400 font-custom2 leading-relaxed line-clamp-2">
                      {p.description}
                    </p>
                  )}
                </div>

                {/* Right — Date */}
                {p.date && (
                  <time
                    className="
                      text-sm text-neutral-500 dark:text-neutral-500 whitespace-nowrap
                      md:pt-1 font-custom2
                    "
                  >
                    {new Date(p.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                )}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </Container>
  );
}
