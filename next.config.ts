import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()


const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true, // ✅ disables Next.js optimization if using static export
  },
};



export default withMDX(nextConfig);
