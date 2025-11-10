"use "

import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar"
import { Instrument_Serif } from "next/font/google";


const instrumentSerif = Instrument_Serif({ weight : ["400"] });



export const metadata: Metadata = {
  title: "Potfolio website v1",
  description: "A perfect portfolio website template that showcases my skills and learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.className}  antialiased  bg-neutral-100 dard:bg-neutral-700`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
