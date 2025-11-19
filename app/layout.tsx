import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";


const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"], // 🛠 Fix missing subsets
});

export const metadata: Metadata = {
  title: "Karn",
  description:
    "A perfect portfolio website template that showcases my skills and learning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning> {/* 🛠 Important for dark mode */}
      <body
        className={`${instrumentSerif.className} antialiased bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300 [--pattern-fg:var(--color-neutral-200)]`}
      >       
       <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
                </ThemeProvider>

      </body>
    </html>
  );
}
