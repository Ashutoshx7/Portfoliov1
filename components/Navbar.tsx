"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/containers";

const Navbar = () => {
  const navItems = [
    { title: "Projects", href: "/projects" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <Container>
      <nav className="flex items-center justify-between">
        {/* Avatar on the left */}
        <Image className="w-10 h-10 rounded-full" src="/avatar.jpeg" width={100} height={100} alt="Avatar" />

        {/* Navigation links on the right */}
        <div className="flex items-center space-x-6">
          {navItems.map((item, idx) => (
            <Link href={item.href} key={idx}>
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
