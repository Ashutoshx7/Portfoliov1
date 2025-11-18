"use client";

import Container from "@/components/containers";

import Projects from "@/components/projects";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";



export default function Home() {
  return (
    <div className="flex min-h-screen justify-center font-sans">
      <Container className="min-h-[200vh] px-8 md:p-20 md:pb-10 ">

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

        <div className="flex items-center justify-between w-full">
          <h1 className="text-3xl md:text-3xl font-bold font-custom tracking-tight text-primary">
            <span className="link--elara">Karn Singh</span>
          </h1>

          <div className="flex gap-4">
            <Github
              size={20}
              onClick={() => window.open("https://github.com/your-github", "_blank")}
              className="text-black dark:text-white opacity-70 hover:opacity-100 transition cursor-pointer"
            />
            <Linkedin
              size={20}
              onClick={() => window.open("https://linkedin.com/in/your-linkedin", "_blank")}
              className="text-black dark:text-white opacity-70 hover:opacity-100 transition cursor-pointer"
            />
            <Twitter
              size={20}
              onClick={() => window.open("https://x.com/your_username", "_blank")}
              className="text-black dark:text-white opacity-70 hover:opacity-100 transition cursor-pointer"
            />
            <Mail
              size={20}
              onClick={() => (window.location.href = "mailto:your@email.com")}
              className="text-black dark:text-white opacity-70 hover:opacity-100 transition cursor-pointer"
            />
          </div>
        </div>

        {/* ---------------------------------------- */}
        {/* SUBTEXT */}
        {/* ---------------------------------------- */}

        <div className="text-secondary font-custom2 text-s mt-1">
          <p>
            <span className="text-neutral-950 font-semibold font-custom">⚀ </span>
            <span>Engineer / Artist — I love building and breaking stuff.</span>
          </p>

          <p>
            <span className="text-neutral-950 font-semibold">⚁ </span>
            <span>AI is something that excites me nowadays.</span>
          </p>

          <p>
            <span className="text-neutral-950  font-semibold">⚂ </span>
            <span>
              Believe in putting my code where my mouth is.
            </span>
          </p>
        </div>

        <div className="absolute right-6 w-212 h-px bg-[var(--pattern-fg)] my-3"></div>

        

        <Projects />

        <br />

       

        

       

      </Container>
    </div>
  );
}