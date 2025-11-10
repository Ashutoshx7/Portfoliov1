"use client";

import Image from "next/image";
import Container from "@/components/containers";
import { WorkExperience } from "@/components/work-experience";
import type { ExperienceItemType } from "@/components/work-experience";
const WORK_EXPERIENCE: ExperienceItemType[] = [
  {
    id: "1",
    companyName: "Linux Foundation Mentorship",
    companyLogo: "",
    isCurrentEmployer: true,
    positions: [
      {
        id: "1-1",
        title: "Senior Software Engineer",
        employmentPeriod: "Jan 2022 - Present",
        employmentType: "Full-time",
        description:
          "Leading a team of developers to build scalable web applications.",
        icon: "code",
        skills: ["JavaScript", "React", "Node.js"],
        isExpanded: true,
      },
      
    ],
  },
];


export default function Home() {
  return (
    <div className="flex min-h-screen justify-center font-sans">
      <Container className="min-h-screen p-4 md:p-10">
        {/* Heading */}
        <h1 className="text-3xl md:text-3xl font-bold font-custom tracking-tight text-primary ">
          <span className="link--elara">Karn Singh</span>
        
        </h1>

        {/* Paragraphs */}
        <div className="text-secondary font-custom2 text-s">
          <p >
            <span>⚀ Engineer / Artist — I love building and breaking stuff.</span>
          </p>

          <p >
            <span>⚁ AI is something that excites me nowadays.</span>
          </p>

          <p >
            <span>
              ⚂ Believe in putting my code where my mouth is — actions speak louder
              than words, especially in code 💻.
            </span>
          </p>
        </div>

        <br></br>
        
        <h2 className="font-custom tracking-wide text-3xl font-bold text-primary">
          <span className="link--elara width: 93%;
  height: 5px;">Experience</span></h2>
        <WorkExperience experiences={WORK_EXPERIENCE} />
        <WorkExperience experiences={WORK_EXPERIENCE} />
     
        
      </Container>
    </div>
  );
}
