import React from 'react';
import { cn } from "@/lib/utils"
const Container = ({children,className}: {
  children:React.ReactNode,
  className?:string,
    }) => {
  return (
    
    <div className={cn("relative max-w-4xl mx-auto w-full h-full bg-neutral-50 dark:bg-neutral-950 px-8 sm:px-10 md:px-14" ,className)}>{children}</div>
  )
}

export default Container;