import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // ✅ disables Next.js optimization if using static export
  },
};

export default nextConfig;
