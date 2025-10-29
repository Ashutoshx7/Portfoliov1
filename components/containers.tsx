import React from 'react';
import { cn } from "@/lib/utils"
const Container = ({children,className}: {
    children:React.ReactNode,
    className?:String,
    }) => {
  return (
    <div className={cn("max-w-4xl mx-auto bg-white dard:bg-black  p-4 md:p-10" ,className)}>{children}</div>
  )
}

export default Container;