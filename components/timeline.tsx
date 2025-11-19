import React from 'react';
import Image from 'next/image';
import Link from "next/link";
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

type Data = {
  title: string;
  href?: string;
  content: {
    title: string;
    description: string;
    src: string;
    href: string;
    tech?: TechKey[]; // 🔹 Just added this
  }[];
};

export const Timeline = () => {
  const data: Data[] = [
    {
      title: "Google Summer Of Code",
      href: "https://summerofcode.withgoogle.com/",
      content: [
        {
          title: "May 2025 - August 2025",
          description: `
            Built scalable solutions for open source organizations
            Received mentorship from top engineers and industry experts
            Contributed real-world features that impacted thousands of users
          `,
          src: "/Inquiro.png",
          href: "https://summerofcode.withgoogle.com/",
          tech: ["next", "ts", "react", "node"],
        },
      ],
    },
    {
      title: "C4GT",
      href: "https://c4gt.in/",
      content: [
        {
          title: "May 2025 - August 2025",
          description: `
            Developed innovative tools solving real developer problems
            Shipped production features with 10k+ downloads
            Collaborated with open source maintainers and communities
          `,
          src: "/Inquiro.png",
          href: "https://c4gt.in/",
          tech: ["prisma", "cloud", "langchain", "ts"],
        },
      ],
    },
    {
      title: "Open Source Contributor",
      href: "https://github.com/",
      content: [
        {
          title: "December 2024 - April 2024",
          description: `
            Mastered React, Node.js, databases, and deployment technologies
            Contributed to multiple popular open source projects
            Built strong foundation in full-stack development practices
          `,
          src: "/Inquiro.png",
          href: "https://github.com/",
          tech: ["react", "node", "ts"],
        },
      ],
    }
  ];

  return (
    <div>
      <h1 className="text-3xl md:text-3xl font-bold font-custom tracking-tight text-neutral-900 dark:text-neutral-50 pb-1">
        <span className="link--elara">Experience</span>
      </h1>
      

      <div className="pl-6">
        {data.map((year, idx) => (
          <div key={year.title}>
            
            {year.href ? (
              <Link
                href={year.href}
                target="_blank"
                className="text-neutral-900 dark:text-neutral-50 font-custom font-semibold py-1 tracking-wide text-lg hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
              >
                                <div className="absolute right-6 w-212 h-px bg-[var(--pattern-fg)] border border-dashed opacity-10 mt- "></div>

                {year.title}
              </Link>
            ) : (
              <p className="text-neutral-900 dark:text-neutral-50 font-custom font-semibold py-1 tracking-wide text-lg">
                {year.title}
              </p>
            )}

            {year.content.map((item, idx) => (
              <div
                key={item.title}
                className="flex justify-between items-center text-neutral-700 dark:text-neutral-300 font-custom2 text-sm md:text-s mt-3"
              >
                <div>
                  <h3 className="font-medium text-neutral-900 dark:text-neutral-50">{item.title}</h3>
                  <ul className="py-5 list-disc pl-6">
                    {item.description
                      .toString()
                      .split("\n")
                      .filter((line) => line.trim() !== "")
                      .map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                  </ul>

                  {/* 🔹 Icons Added Here — Nothing Removed */}
                  {item.tech && (
                    <div className="flex flex-wrap gap-2  py-3">
                      {item.tech.map((key) => {
                        const Icon = iconMap[key];
                        return (
                          <div
                            key={key}
                            className="h-7 w-7 flex items-center justify-center rounded-md
                              bg-white/70 dark:bg-white/10
                              border border-neutral-300/60 dark:border-neutral-700/60
                              shadow-[inset_0_0_4px_rgba(0,0,0,0.08)]
                              backdrop-blur-md"
                          >
                            <Icon size={14} style={{ color: techColors[key] }} />
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 🔹 Original IMAGE untouched */}
                <Image
                  src={item.src}
                  alt={item.title}
                  width={200}
                  height={120}
                  className="rounded-full size-10"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
