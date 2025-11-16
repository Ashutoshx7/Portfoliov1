import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */


const nextConfig: NextConfig = {
  transpilePackages:["next-mdx-remote", "next-view-transitions"],
  images: {
    unoptimized: true, // ✅ disables Next.js optimization if using static export
  },
};



export default nextConfig;
