"use client";

import Image from "next/image";
import Container from "@/components/containers";
import { WorkExperience } from "@/components/work-experience";
import type { ExperienceItemType } from "@/components/work-experience";
import Projects from "@/components/projects";


// Social Icons



export default function Home() {
  return (
    
      <Container className="min-h-[200vh] px-8 md:p-20 md:pb-10 mx-auto">
        <h1 className=" text-primary font-custom font-semibold text-3xl tracking-tight ">
          <span className="link--elara">Projects</span>
          </h1>
          <p className="tracking-tight font-custom2 text-secondary max-w-lg text-s md:text-s ">Hi there i love to build stuff for the people and passionate about building and vontributing to open olsurce and also hhere my projects and open source contribution over here feel free to take look </p>

        {/* RIGHT BORDER */}
        <div
          className="absolute right-0 top-0 h-full w-6 border-x border-x-(--pattern-fg)
          bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)]
          bg-[size:10px_10px] bg-fixed"
        ></div>

        {/* LEFT BORDER */}
        <div
          className="absolute left-0 top-0 h-full w-6 border-x border-x-(--pattern-fg)
          bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)]
          bg-[size:10px_10px] bg-fixed"
        ></div>
                <div className="absolute right-6 w-212 h-px bg-[var(--pattern-fg)] my-3"></div>


       
        
       <Projects></Projects>

      </Container>
      )
}
    
  