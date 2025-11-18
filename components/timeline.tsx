import React from 'react';
import Image from 'next/image';

type Data = {
  title: string;
  content: {
    title: string;
    description: string;
    src: string;
  }[];
};

export const Timeline = () => {
  const data: Data[] = [
    {
  title: "Google Summer Of Code",
  content: [
    {
      title: "May 2025 - August 2025",
      description: `
        Built scalable solutions for open source organizations
        Received mentorship from top engineers and industry experts
        Contributed real-world features that impacted thousands of users
      `,
      src: "/Inquiro.png",
    },
  ],
},
{
  title: "C4GT",
  content: [
    {
      title: "May 2025 - August 2025",
      description: `
        Developed innovative tools solving real developer problems
        Shipped production features with 10k+ downloads
        Collaborated with open source maintainers and communities
      `,
      src: "/Inquiro.png",
    },
  ],
},
{
  title: "Open Source Contributor",
  content: [
    {
      title: "December 2024 - April 2024",
      description: `
        Mastered React, Node.js, databases, and deployment technologies
        Contributed to multiple popular open source projects
        Built strong foundation in full-stack development practices
      `,
      src: "/Inquiro.png",
    },
  ],
}
  ];

  return (
    <div>
                  <h1 className="text-3xl md:text-3xl font-bold font-custom tracking-tight text-primary pb-5">
            <span className="link--elara">Experience</span>
          </h1>
    <div className="pl-1">
      {data.map((year, idx) => (
        <div key={year.title}>
          <h2 className="text-primary font-custom font-semibold py-1 tracking-wide text-lg">
            {year.title}
          </h2>

          {year.content.map((item, idx) => (
            <div
              key={item.title}
              className="flex justify-between items-center text-secondary font-custom2 text-sm md:text-s mt-3"
            >
              {/* LEFT: TEXT */}
              <div className="">
                <h3 className="font-medium">{item.title}</h3>
                <ul className="py-5 list-disc pl-6">{item.description.toString().split("\n")
                .filter(line=>line.trim()
                !=="").map((point,i)=>(<li key={i}>{point}</li>))}</ul>
              </div>

              {/* RIGHT: IMAGE */}
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
