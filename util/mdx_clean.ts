import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import config from "@/lib/config";

export type BlogMeta = {
  title?: string;
  slug?: string;
  date?: string;
  description?: string;
  image?: string;
  tags?: string[];
};

export type Blog = {
  content: string;
  data: BlogMeta;
};

const CACHE = new Map<string, Blog>();

function normalizeSlug(slug: string) {
  return slug.replace(/\.mdx?$/i, "");
}

export const getSingleBlog = async (slug: string): Promise<Blog> => {
  const key = normalizeSlug(slug);
  if (CACHE.has(key)) return CACHE.get(key)!;

  const filePath = path.join(config.DATA_DIR, `${key}.mdx`);
  const raw = await fs.readFile(filePath, "utf-8");
  const parsed = matter(raw);
  const data = parsed.data as BlogMeta;
  data.slug = data.slug ?? key;
  // Convert date to string if it's a Date object
  if (data.date && typeof data.date === 'object' && 'toISOString' in data.date) {
    data.date = (data.date as any).toISOString().split('T')[0];
  }

  const result: Blog = { content: parsed.content, data };
  CACHE.set(key, result);
  return result;
};

export const getAllBlogs = async (): Promise<BlogMeta[]> => {
  const files = await fs.readdir(config.DATA_DIR);
  const mdxFiles = files.filter((f) => f.toLowerCase().endsWith(".mdx"));

  const blogs: BlogMeta[] = [];
  for (const file of mdxFiles) {
    try {
      const raw = await fs.readFile(path.join(config.DATA_DIR, file), "utf-8");
      const parsed = matter(raw);
      const meta = parsed.data as BlogMeta;
      meta.slug = meta.slug ?? normalizeSlug(file);
      // Convert date to string if it's a Date object
      if (meta.date && typeof meta.date === 'object' && 'toISOString' in meta.date) {
        meta.date = (meta.date as any).toISOString().split('T')[0];
      }
      blogs.push(meta);
    } catch (err) {
      console.warn("Failed to read blog", file, err);
    }
  }

  blogs.sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return blogs;
};

