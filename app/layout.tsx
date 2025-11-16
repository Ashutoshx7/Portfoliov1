
import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar"
import { Instrument_Serif } from "next/font/google";
import { ViewTransitions } from 'next-view-transitions'


const instrumentSerif = Instrument_Serif({ weight : ["400"] });



export const metadata: Metadata = {
  title: "Karn",
  description: "A perfect portfolio website template that showcases my skills and learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <ViewTransitions>
    <html lang="en">
      <body
        className={`${instrumentSerif.className}  antialiased  bg-neutral-100 dark:bg-neutral-700 [--pattern-fg:var(--color-neutral-200)]`}
      >
        <Navbar ></Navbar>
        {children}
      </body>
    </html>
    </ViewTransitions>
  );
}
