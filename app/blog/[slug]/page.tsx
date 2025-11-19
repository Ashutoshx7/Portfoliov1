import Container from "@/components/containers";
import type { Metadata } from "next";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { getSingleBlog } from "@/util/mdx_clean";


export const metadata: Metadata = {
  title: "Blog | Karn Singh",
  description: "Reading a blog...",
};

export default async function SingleBlogPage({ params }: { params: any }) {
  // `params` may be a Promise in some Next versions; await to unwrap it safely
  const resolvedParams = (await params) as { slug?: string };
  const slug = resolvedParams?.slug;

  if (!slug) {
    notFound();
  }

  let content: string;
  let frontmatter: Record<string, any> = {};
  try {
    const res = await getSingleBlog(slug);
    content = res.content;
    frontmatter = res.data || {};
  } catch (err) {
    notFound();
  }

  return (
    <Container className="min-h-screen md:p-20 md:pb-10 font-custom2 tracking-tight">
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
      <h1 className="text-neutral-900 dark:text-neutral-50 text-4xl font-custom font-bold  md:text-5xl">
        {frontmatter.title ?? slug}
      </h1>

      {frontmatter.date ? (
        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-right mt-2">{frontmatter.date}</p>
      ) : null}

      {frontmatter.image ? (
        <div className="my-6 mx-auto max-w-3xl" >
          <Image
            src={frontmatter.image.startsWith("/public") ? frontmatter.image.replace("/public", "") : frontmatter.image}
            alt={frontmatter.title ?? ""}
            width={1200}
            height={600}
            className="w-full h-auto rounded-xl object-cover shadow-xl"
          />
        </div>
      ) : null}

      <div className="prose tracking-normal font-custom2 mx-auto">
        <MDXRemote source={content} />
      </div>
    </Container>
  );
}
