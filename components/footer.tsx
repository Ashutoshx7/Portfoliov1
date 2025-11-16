import React from 'react'
import Container from "@/components/containers"

const Footer = () => {
  return (
    <Container className=" flex justify-center border-y border-neutral-200 text-neutral-500 hover:text-primary font-custom2 tracking-normal text-xs p-2 ">
        <p> Built with love By Karn Singh</p>
        <div className="flex items-center justify-center gap-4"> </div>
    </Container>
  )
}

export default Footer;