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
} from "react-icons/si";

/* ------------------------- 🔥 1) STRICT ICON TYPES ------------------------- */

type TechKey = "next" | "ts" | "react" | "three" | "prisma" | "cloud";

const iconMap: Record<TechKey, any> = {
  next: SiNextdotjs,
  ts: SiTypescript,
  react: SiReact,
  three: SiThreedotjs,
  prisma: SiPrisma,
  cloud: SiCloudflare,
};

/* --------------------------------------------------------------------------- */

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Close modal on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  /* -------------------------------- Projects -------------------------------- */
  const projects: {
    title: string;
    src: string;
    video: string;
    description: string;
    tech: TechKey[];
    github: string;
    live: string;
  }[] = [
    {
      title: "Inquiro",
      src: "/Inquiro.png",
      video: "/inquiro.mp4",
      description:
        "Turn your sketches into 3D objects and worlds no 3D skills required.",
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
      tech: ["next", "ts", "cloud"],
      github: "https://github.com/",
      live: "https://yourlive.com",
    },
    {
      title: "Scribble3D",
      src: "/Scribble3D.png",
      video: "/scribble.mp4",
      description:
        "A real-time research assistant built with modern web technologies.",
      tech: ["ts", "next", "prisma"],
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

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.12 }}
            className="relative group rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm transition-all duration-300"
          >
            {/* GLOBAL CARD HOVER PLAY ICON (NOT JUST IMAGE) */}
            <div
              onClick={() => setActiveVideo(project.video)}
              className="
                absolute inset-0 z-20 flex items-center justify-center
                opacity-0 group-hover:opacity-100
                transition duration-300 cursor-pointer
              "
            >
              <div
                className="
                  h-14 w-14 bg-white/90 dark:bg-black/80 rounded-full 
                  flex items-center justify-center shadow-xl backdrop-blur-lg
                "
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

            {/* IMAGE */}
            <div className="relative w-full h-44 overflow-hidden">
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover transition-all duration-500 group-hover:brightness-[0.55]"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 relative z-30">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold">{project.title}</h2>

                <div className="flex gap-3">
                  <Globe
                    size={18}
                    className="text-black dark:text-white opacity-70 hover:opacity-100 transition"
                  />
                  <Github
                    size={18}
                    className="text-black dark:text-white opacity-70 hover:opacity-100 transition"
                  />
                </div>
              </div>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div>
                <p className="text-xs text-neutral-500 font-medium mb-2">
                  Technologies
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((key) => {
                    const Icon = iconMap[key];
                    return (
                      <div
                        key={key}
                        className="
                          h-8 w-8 flex items-center justify-center rounded-md
                          bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700
                          hover:border-black dark:hover:border-white
                          transition
                        "
                      >
                        <Icon
                          size={16}
                          className="text-black dark:text-white opacity-70 group-hover:opacity-100 transition"
                        />
                      </div>
                    );
                  })}
                </div>
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
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-black rounded-xl overflow-hidden w-[90%] max-w-3xl shadow-xl"
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-3 right-3 p-2 bg-white/10 rounded-full"
              >
                <X size={20} className="text-white" />
              </button>

              {/* YOUTUBE OR MP4 */}
              {activeVideo.includes("youtube") ? (
                <iframe
                  src={activeVideo}
                  className="w-full aspect-video rounded-xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
