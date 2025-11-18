import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["next-mdx-remote"],

  images: {
    unoptimized: true,
  },
 
 
};

export default nextConfig;
