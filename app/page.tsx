"use client";

import Image from "next/image";
import Container from "@/components/containers";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center font-sans">
      <Container className="min-h-screen p-4 md:p-10">
        {/* Heading */}
        <h1 className="text-3xl md:text-3xl font-bold font-custom tracking-tight text-primary ">
          <span className="link--elara">Karn singh</span>
        
        </h1>

        {/* Paragraphs */}
        <div className="text-secondary font-custom2 ">
          <p >
            <span>Engineer / Artist — I love building and breaking stuff.</span>
          </p>

          <p >
            <span>AI is something that excites me nowadays.</span>
          </p>

          <p >
            <span>
              Believe in putting my code where my mouth is — actions speak louder
              than words, especially in code 💻.
            </span>
          </p>
        </div>
      </Container>
    </div>
  );
}
