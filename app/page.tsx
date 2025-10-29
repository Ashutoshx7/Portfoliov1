"use client"

import Image from "next/image";


import  Container  from "@/components/containers"
import {Inter} from "next/font/google";

const inter=Inter({weight:["400","500","800","900"]})

export default function Home() {
  return (
        <div className="flex min-h-screen  justify-center  font-sans ">

    <Container className=" min-h-screen">
      <h1 className="text-2xl md:3xl font-bold tracking-tight  text-neutral-600"> Hi there </h1>
      
      <div></div>
    
      <p  className="text-neutral-600">&.Like to code and can tell me and build software  yara yara  and also passionate abou open source and
     <p className="text-neutral-600"> &.yokoso and alos good at one thing com,muncatiing 

     </p>
    </p>
    
    </Container>
    </div>
  );
}
