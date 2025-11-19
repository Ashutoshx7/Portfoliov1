"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/containers";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ThemeToggleButton } from "@/components/ui/skiper-ui/skiper26";

const Navbar = () => {
  const navItems = [
    { title: "Projects", href: "/projects" },
    { title: "Blog", href: "/blog" },

  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <Container>
      <motion.nav
        animate={{
          boxShadow: scrolled ? "var(--shadow-input)" : "none",
          width: scrolled ? "45%" : "75%",
          y: scrolled ? 10 : 0,
          borderRadius: scrolled ? "2.5rem" : "0rem", 
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="fixed inset-x-0 top-0 z-50 flex max-w-3xl mx-auto items-center justify-between
        px-4 py-3 bg-neutral-50/80 dark:bg-neutral-950/70 backdrop-blur-lg font-custom border-b border-neutral-200/40 dark:border-neutral-800/30 text-neutral-900 dark:text-neutral-50 transition-all duration-300"
      >
        <Link href="/" className="hover:opacity-75 transition-opacity duration-300">
          <Image
            className="w-9 h-9 rounded-full shadow-sm"
            src="/Avatar11.jpg"
            width={100}
            height={100}
            alt="Avatar"
          />
        </Link>

        {/* Navigation links on the right */}
        <div className="flex items-center gap-6">
          {navItems.map((item, idx) => (
            <Link
              className="text-sm relative px-3 py-1.5 text-neutral-600 dark:text-neutral-300 font-medium transition-colors duration-300 hover:text-neutral-900 dark:hover:text-neutral-50"
              href={item.href}
              key={idx}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="h-full w-full absolute inset-0 rounded-md bg-neutral-200/60 dark:bg-neutral-800/50"
                />
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
          
          <div className="pl-2 border-l border-neutral-300/40 dark:border-neutral-700/50">
            <motion.div
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
            >
              <ThemeToggleButton variant="circle" start="top-right" />
            </motion.div>
          </div>
        </div>
      </motion.nav>
      
    </Container>
  );
};

export default Navbar;
