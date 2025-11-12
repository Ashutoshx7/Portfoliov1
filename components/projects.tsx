import React from 'react'
import Image from "next/image";
import {motion} from "framer-motion"

const Projects = () => {


    const projects =[{
        title:"Nimbus",
        src: "/NimbusIDE.png",
        href: "#",
        description:"Nimbus Ide is an AI integrated web development environment built entirely in the browser using Next.js, App Router ,Web Containers."
    },
    {
        title:"Inquiro",
        src: "/Inquiro.png",
        href: "#",
        description:"Turn your sketches into 3D objects and worlds — No 3D skills required!"
    },
    
    {
        title:"Scribble3D",
        src: "/Scribble3D.png",
        href: "#",
        description:"Inquiro 🔍 is a real-time reasearch assitant built with the latest web stack — Next.js 15, Tailwind CSS v4, Prisma, NextAuth.js, and Socket.IO"


    }]
  return (
    <div className="px-">
        <h2 className=" text-3xl md:text-3xl font-bold font-custom tracking-tight text-primary mt-8">
            <span className="link--elara">Projects</span></h2>
        <p className="text-secondary font-cutom2  max-w-lg pt-4 text-s ">I love production grade Applications</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 py-4">
        {projects.slice(0,3).  map((project,idx)=> (<motion.div
        initial={{opacity:0,filter:"blur(10px)",y:10}}
            whileInView={{opacity:1,filter:"blur(0px)",y:0}}
            transition={{
                duration:0.3,
                delay:idx * 0.1,
                ease: "easeInOut",
            }}
         key={project.title}
            className="group relative h-72 mb-4">
                
            <Image 
            src={project.src} 
            alt={project.title} 
            height={300} width={300}
            className=" w-full h-72 rounded-xl object-cover
            transition duration-200 group-hover:scale-[1.02]"/> 
             <h2 className=" z-20 mt-2 font-custom font-bold tracking-wide   text-neutral-800 dark:text-neutral-400 ">{project.title}</h2>
            <p className="text-sm font-custom2 text-neutral-500 dark:neutral-400">{project.description}</p>
        </motion.div>))}
        </div>
    </div>
  )
}

export default Projects;