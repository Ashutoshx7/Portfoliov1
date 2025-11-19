import React from 'react';
import { cn } from "@/lib/utils"
const Container = ({children,className}: {
    children:React.ReactNode,
    className?:String,
    }) => {
  return (
    
    <div className={cn(" relative max-w-4xl mx-auto w--full h-full bg-neutral-50 dark:bg-neutral-950" ,className)}>{children}</div>
  )
}

export default Container;