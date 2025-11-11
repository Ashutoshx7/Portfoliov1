import React from 'react';
import { cn } from "@/lib/utils"
const Container = ({children,className}: {
    children:React.ReactNode,
    className?:String,
    }) => {
  return (
    
    <div className={cn(" relative max-w-4xl mx-auto w--full h-full bg-white  dark:bg-black" ,className)}>{children}</div>
  )
}

export default Container;