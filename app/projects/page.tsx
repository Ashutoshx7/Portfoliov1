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
        <h1 className=" text-primary font-custom font-semibold text-4xl tracking-tight  mx-auto">
          <span className="link--elara">Projects</span>
          </h1>
          <p className="tracking-tight font-custom2 text-secondary max-w-lg text-sm md:text-sm mt-1">Hi there i love to build stuff for the people and passionate about building and vontributing to open olsurce and also hhere my projects and open source contribution over here feel free to take look </p>

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

        {/* ---------------------------------------- */}
        {/* HEADING + SOCIALS (FIXED SAME LINE) */}
        {/* ---------------------------------------- */}

        
        {/* ---------------------------------------- */}
        {/* SUBTEXT */}
        {/* ---------------------------------------- */}

        
       <Projects></Projects>

      </Container>
      )
}
    
  