import { Reveal } from "./ui/Reveal";

export function TechStack() {
  const techs = ["HTML5", "CSS", "Javascript", "Node.js", "React", "Next.js", "MongoDB", "TailwindCSS", "Git", "GitHub"];

  return (
    <div className="w-full bg-surface border-y border-border py-6 overflow-hidden relative">
       {/* Edge masks */}
       <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10" />
       <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10" />
       
       <div className="container mx-auto px-6 text-center">
         <Reveal direction="up">
           <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-16">
             {techs.map((tech, i) => (
               <span key={i} className="text-sm md:text-base font-medium text-muted hover:text-white transition-colors cursor-default">
                 {tech}
               </span>
             ))}
           </div>
         </Reveal>
       </div>
    </div>
  );
}
