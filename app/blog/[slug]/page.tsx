import Container from "@/components/containers";
import type { Metadata } from "next";
import {MDXRemote} from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "ALL blogs -- Karn Singh",
  description: "All my Thoughs and knowledge/Learning",
};


export default function SingleBlogPage(){
  
  return (
    
    <Container className="min-h-screen  md:p-20 md:pb-10 font-custom2 tracking-tight">
      <h1 className="text-primary text-2xl font-custom font-bold tracking-tight= md:text-4xl">SingleBlog</h1>
      <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">  I wrote when  i want  just because that's me  </p>
    </Container>
    
  );
}