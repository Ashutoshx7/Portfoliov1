import React from 'react';
import { cn } from "@/lib/utils"
const Container = ({children,className}: {
    children:React.ReactNode,
    className?:String,
    }) => {
  return (
    <div className={cn("max-w-4xl mx-auto w- bg-white    dar:bg-black" ,className)}>{children}</div>
  )
}

export default Container;