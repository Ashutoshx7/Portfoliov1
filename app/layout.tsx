import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter=Inter({weight:["400","500","600","700","800"]});


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
        className={`${inter.className}  antialiased  bg-neutral-100 dard:bg-neutral-700`}
      >
        {children}
      </body>
    </html>
  );
}
