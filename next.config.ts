import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["next-mdx-remote"],

  images: {
    unoptimized: true,
        domains: ["ghchart.rshah.org"],

  },
 
 
};

export default nextConfig;
