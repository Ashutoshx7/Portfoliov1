import React from 'react'
import Container from "@/components/containers"

const Footer = () => {
  return (
    <Container className="flex justify-center border-y border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 font-custom2 tracking-normal text-xs p-2 cursor-pointer transition-colors duration-300">
        <p> Built with love By Karn Singh</p>
        <div className="flex items-center justify-center gap-4"> </div>
    </Container>
  )
}

export default Footer;