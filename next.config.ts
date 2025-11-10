import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false, // default true for Next 15 app router
  },
};

export default nextConfig;

