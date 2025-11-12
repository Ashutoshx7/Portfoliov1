"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/containers";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Navbar = () => {
  const navItems = [
    { title: "Projects", href: "/projects" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
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
          width: scrolled ? "50%" : "100%",
          y: scrolled ? 10 : 0,
          borderRadius: scrolled ? "1.5rem" : "0rem", 
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
        className="fixed inset-x-0 top-0 z-50 flex max-w-3xl mx-auto items-center justify-between
        p-2 py-2 px-2 bg-white dark:bg-neutral-900 shadow-md"
      >
        {/* Avatar on the left */}
        <Image
          className="w-10 h-10 rounded-full"
          src="/Avatar2.jpeg"
          width={100}
          height={100}
          alt="Avatar"
        />

        {/* Navigation links on the right */}
        <div className="flex items-center space-x-6">
          {navItems.map((item, idx) => (
            <Link
              className="text-s relative px-2 py-1"
              href={item.href}
              key={idx}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="h-full w-full absolute inset-0 rounded-md bg-neutral-100 dark:bg-neutral-800"
                />
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  );
};

export default Navbar;
