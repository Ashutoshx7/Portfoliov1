"use client"

import Image from "next/image";

const GithubGraph = () => {
  return (
    <div>
              <div className="absolute right-6 w-212 h-px bg-[var(--pattern-fg)] "></div>


        <h1 className="text-primary font-custom font-bold  text-3xl tracking-tight "><span className="link--elara">Proof Of Work</span></h1>
                      <div className="absolute right-6 w-212 h-px bg-[var(--pattern-fg)] my-1 "></div>
                      <p className=" font-custom2 text-secondary mt-3 px-4 py-[7px]
                                 text-sm inline-block
                                 bg-black/[0.025] dark:bg-white/[0.04] border border-dashed border-neutral-300  my-5"> I live spending time in open source,building real stuff and solving real problems</p>

    
          

          {/* Graph Image */}
          <Image
            src={`https://ghchart.rshah.org/Ashutoshx7`}
            alt="GitHub contribution graph"
            width={900}
            height={200}
            className="w-full object-cover  transition-transform duration-500  "
            
          />
            <div className="absolute right-6 w-212 h-px bg-[var(--pattern-fg)] my-[-1]"></div>

        </div>
        
    
  );
};

export default GithubGraph;
