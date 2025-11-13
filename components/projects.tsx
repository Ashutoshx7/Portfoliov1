import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Github } from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiThreedotjs,
  SiPrisma,
  SiCloudflare,
} from "react-icons/si";

const iconMap = {
  next: SiNextdotjs,
  ts: SiTypescript,
  react: SiReact,
  three: SiThreedotjs,
  prisma: SiPrisma,
  cloud: SiCloudflare,
};

const Projects = () => {
  const projects = [
    {
      title: "Inquiro",
      src: "/Inquiro.png",
      description:
        "Turn your sketches into 3D objects and worlds no 3D skills required.",
      tech: ["next", "ts", "react", "three"],
      github: "https://github.com/",
      live: "https://yourlive.com",
    },
    {
      title: "Nimbus",
      src: "/NimbusIDE.png",
      description:
        "An AI-powered web IDE built fully in the browser using Next.js and WebContainers.",
      tech: ["next", "ts", "cloud"],
      github: "https://github.com/",
      live: "https://yourlive.com",
    },
    {
      title: "Scribble3D",
      src: "/Scribble3D.png",
      description:
        "A real-time research assistant built with modern web technologies.",
      tech: ["ts", "next", "prisma"],
      github: "https://github.com/",
      live: "https://yourlive.com",
    },
  ];

  // 🔥 When clicking play icon (replace later with a modal)
  const handleVideoOpen = (project) => {
    console.log("Open video for:", project.title);
  };

  return (
    <div>
      {/* Title */}
      <h1 className="text-3xl md:text-3xl font-bold font-custom tracking-tight text-primary mt-8">
        <span className="link--elara">Project</span>
      </h1>
      <p className="font-custom2">I love building production grade application</p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.4,
              delay: idx * 0.12,
              ease: "easeOut",
            }}
            className="
              rounded-xl overflow-hidden
              border border-neutral-200 dark:border-neutral-800
              bg-white dark:bg-neutral-900
              shadow-sm
              transition-all duration-300
            "
          >
            {/* IMAGE + Hover Play Icon */}
            <div className="relative w-full h-44 overflow-hidden group cursor-pointer">
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover transition-all duration-500 group-hover:brightness-[0.6]"
              />

              {/* 🔥 Play Icon Overlay */}
              <div
                onClick={() => handleVideoOpen(project)}
                className="
                  absolute inset-0 flex items-center justify-center 
                  opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300
                "
              >
                <div
                  className="
                    h-12 w-12 bg-white/90 dark:bg-black/80 
                    rounded-full flex items-center justify-center 
                    shadow-xl backdrop-blur-md
                  "
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='black'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='black'
                    className='w-6 h-6 dark:fill-white dark:stroke-white'
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
            <div className="p-5">
              {/* TITLE + ICONS */}
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold">{project.title}</h2>

                <div className="flex gap-3 text-neutral-500">
                  <a href={project.live} target="_blank">
                    <Globe
                      size={18}
                      className="hover:text-black dark:hover:text-white transition"
                    />
                  </a>

                  <a href={project.github} target="_blank">
                    <Github
                      size={18}
                      className="hover:text-black dark:hover:text-white transition"
                    />
                  </a>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div>
                <p className="text-xs text-neutral-500 font-medium mb-2">
                  Technologies
                </p>

                <div className="flex gap-3 items-center flex-wrap">
                  {project.tech.map((key) => {
                    const Icon = iconMap[key];
                    return (
                      <div
                        key={key}
                        className="
                          h-8 w-8 flex items-center justify-center
                          rounded-md 
                          bg-neutral-100 dark:bg-neutral-800
                          border border-neutral-200 dark:border-neutral-700
                          transition
                        "
                      >
                        <Icon
                          className="text-neutral-700 dark:text-neutral-300"
                          size={16}
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
    </div>
  );
};

export default Projects;
