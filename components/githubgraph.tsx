import Image from "next/image";

const GithubGraph = () => {
  return (
    <div>

        
    
          
        <div className="absolute right-6 w-212 h-px bg-[var(--pattern-fg)] "></div>

          {/* Graph Image */}
          <Image
            src={`https://ghchart.rshah.org/Ashutoshx7`}
            alt="GitHub contribution graph"
            width={900}
            height={200}
            className="w-full object-cover  transition-transform duration-500"
            
          />
            <div className="absolute right-6 w-212 h-px bg-[var(--pattern-fg)] my-[-1]"></div>

        </div>
        
    
  );
};

export default GithubGraph;
