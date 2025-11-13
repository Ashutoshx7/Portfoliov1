"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Github, X } from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiThreedotjs,
  SiPrisma,
  SiCloudflare,
  SiLangchain,
  SiNodedotjs,
} from "react-icons/si";

type TechKey =
  | "next"
  | "ts"
  | "react"
  | "three"
  | "prisma"
  | "cloud"
  | "langchain"
  | "node";

interface Project {
  title: string;
  src: string;
  video: string;
  description: string;
  tech: TechKey[];
  github: string;
  live: string;
}

const iconMap: Record<TechKey, any> = {
  next: SiNextdotjs,
  ts: SiTypescript,
  react: SiReact,
  three: SiThreedotjs,
  prisma: SiPrisma,
  cloud: SiCloudflare,
  langchain: SiLangchain,
  node: SiNodedotjs,
};

const techColors: Record<TechKey, string> = {
  next: "#000000",
  ts: "#3178C6",
  react: "#61DAFB",
  three: "#FF9900",
  prisma: "#0C344B",
  cloud: "#F38020",
  langchain: "#00A67E",
  node: "#3C873A",
};

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const projects: Project[] = [
    {
      title: "Inquiro",
      src: "/Inquiro.png",
      video: "/inquiro.mp4",
      description: "Turn your sketches into 3D objects and worlds no 3D skills required.",
      tech: ["next", "ts", "react", "three"],
      github: "https://github.com/",
      live: "https://yourlive.com",
    },
    {
      title: "Nimbus",
      src: "/NimbusIDE.png",
      video: "https://www.youtube.com/embed/98QD-V3ox8g?si=wPWipbLIfGpQ9ttK",
      description:
        "An AI-powered web IDE built fully in the browser using Next.js and WebContainers.",
      tech: ["next", "ts", "cloud", "node"],
      github: "https://github.com/",
      live: "https://yourlive.com",
    },
    {
      title: "Scribble3D",
      src: "/Scribble3D.png",
      video: "/scribble.mp4",
      description:
        "A real-time research assistant built with modern web technologies.",
      tech: ["ts", "next", "prisma", "langchain"],
      github: "https://github.com/",
      live: "https://yourlive.com",
    },
  ];

  return (
    <div>
      {/* Title */}
      <h1 className="text-3xl md:text-3xl font-bold font-custom tracking-tight text-primary mt-8">
        <span className="link--elara">Projects</span>
      </h1>

      <p className="font-custom2 text-secondary mt-2">
        I love building production grade application
      </p>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.12 }}
            className="relative group rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm transition-all duration-300"
          >
            {/* IMAGE */}
            <div className="relative w-full h-44 overflow-hidden">
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover transition-all duration-500 group-hover:brightness-[0.55]"
              />

              {/* PLAY BUTTON */}
              <div
                onClick={() => setActiveVideo(project.video)}
                className="
                  absolute inset-0 z-20 flex items-center justify-center
                  opacity-0 group-hover:opacity-100
                  transition duration-300 cursor-pointer
                  pointer-events-none group-hover:pointer-events-auto
                "
              >
                <div
                  className="h-14 w-14 bg-white/90 dark:bg-black/80 rounded-full 
                             flex items-center justify-center shadow-xl backdrop-blur-lg"
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    className='w-7 h-7 text-black dark:text-white'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5.25 5.653v12.694c0 .856.926 1.39 1.668.958l11.1-6.347a1.125 1.125 0 000-1.916L6.918 4.695c-.742-.432-1.668.102-1.668.958z'
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-5 relative z-30">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold">{project.title}</h2>

                <div className="flex gap-3">
                  <Globe
                    size={18}
                    onClick={() => window.open(project.live, "_blank")}
                    className="text-black dark:text-white opacity-70 hover:opacity-100 transition cursor-pointer"
                  />
                  <Github
                    size={18}
                    onClick={() => window.open(project.github, "_blank")}
                    className="text-black dark:text-white opacity-70 hover:opacity-100 transition cursor-pointer"
                  />
                </div>
              </div>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                {project.description}
              </p>

              {/* TECH STACK */}
              <p className="text-xs text-neutral-500 font-medium mb-2">Tech Stack</p>

              <div className="flex gap-2 flex-wrap">
                {project.tech.map((key) => {
                  const Icon = iconMap[key];

                  return (
                    <div
                      key={key}
                      className="
                        h-8 w-8 flex items-center justify-center rounded-lg
                        bg-white/60 dark:bg-white/10
                        border border-neutral-300/60 dark:border-neutral-700/60
                        shadow-[inset_0_0_4px_rgba(0,0,0,0.1)]
                        backdrop-blur-md
                        transition-all duration-200
                        hover:scale-105 hover:shadow-md
                        hover:border-neutral-400 dark:hover:border-neutral-500
                        group
                      "
                    >
                      <Icon
                        size={17}
                        style={{ color: techColors[key] }}
                        className="transition-all duration-200 grayscale group-hover:grayscale-0"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-black rounded-xl overflow-hidden w-[90%] max-w-3xl shadow-xl"
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-3 right-3 p-2 bg-neutral-500 rounded-full cursor-pointer"
              >
                <X size={20} className="text-neutral-800" />
              </button>

              {activeVideo.includes("youtube") ? (
                <iframe
                  src={activeVideo}
                  className="w-full aspect-video rounded-xl"
                  allowFullScreen
                ></iframe>
              ) : (
                <video
                  src={activeVideo}
                  className="w-full h-auto rounded-xl"
                  controls
                  autoPlay
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
