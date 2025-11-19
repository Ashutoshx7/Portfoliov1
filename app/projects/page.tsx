"use client";

import Container from "@/components/containers";
import Projects from "@/components/projects";


// Social Icons



export default function Home() {
  return (
      <Container className="min-h-[200vh] px-8 md:p-20 md:pb-10 mx-auto">

        {/* RIGHT BORDER */}
        <div
          className="absolute right-0 top-0 h-full w-6 border-x border-x-(--pattern-fg) opacity-50
          bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]
          bg-size-[10px_10px] bg-fixed dark:opacity-15"
        ></div>

        {/* LEFT BORDER */}
        <div
          className="absolute left-0 top-0 h-full w-6 border-x border-x-(--pattern-fg) opacity-50
          bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]
          bg-size-[10px_10px] bg-fixed dark:opacity-15"
        ></div>
        <h1 className="text-neutral-900 dark:text-neutral-50 font-custom font-semibold text-3xl tracking-tight ">
          <span className="link--elara">Projects</span>
          </h1>
          <p className="tracking-tight font-custom2 text-neutral-600 dark:text-neutral-400 max-w-lg text-s md:text-s ">Hi there i love to build stuff for the people and passionate about building and vontributing to open olsurce and also hhere my projects and open source contribution over here feel free to take look </p>

                <div className="absolute right-6 w-212 h-px bg-(--pattern-fg) my-3 opacity-90 dark:opacity-15"></div>

      <Projects showAll={true}></Projects>

      </Container>
      )
}
    
  