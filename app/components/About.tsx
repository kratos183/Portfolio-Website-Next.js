import { Shield, Server, Box } from "lucide-react";
import { Reveal } from "./ui/Reveal";

export function About() {
  const strengths = [
    {
      title: "Authentication & Security",
      description: "Implementing robust JWT and Role-Based Access Control (RBAC)",
      icon: <Shield className="w-6 h-6 text-brand-accent" />,
    },
    {
      title: "API Design & Backend",
      description: "Building scalable RESTful APIs and connecting complex databases",
      icon: <Server className="w-6 h-6 text-brand-accent" />,
    },
    {
      title: "Modern Frontend",
      description: "Leveraging Next.js App Router and SSR for ultimate performance",
      icon: <Box className="w-6 h-6 text-brand-accent" />,
    },
  ];

  const stats = [
    { value: "3+", label: "Major Production Apps" },
    { value: "100%", label: "Code Quality" },
    { value: "5+", label: "Core Technologies" },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden text-foreground">
      {/* Subtle Background Gradient */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl">
        <Reveal direction="down">
           <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-20">
             About me
           </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          {/* Left: Strengths List */}
          <div className="space-y-10 pl-4 border-l-2 border-border relative">
            {/* Timeline line gradient */}
            <div className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-accent via-red-600 to-transparent opacity-50" />
            
            {strengths.map((strength, idx) => (
              <Reveal key={idx} delay={idx * 0.2} direction="right">
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[25px] top-1 w-3 h-3 bg-background border-2 border-brand-accent rounded-full z-10 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                  
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface/50 border border-transparent hover:border-border transition-colors group">
                    <div className="p-3 bg-surface rounded-lg group-hover:scale-110 transition-transform shadow-inner">
                      {strength.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{strength.title}</h3>
                      <p className="text-muted leading-relaxed">{strength.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right: Text and Stats */}
          <div className="space-y-10">
            <Reveal direction="left">
               <p className="text-lg text-muted leading-relaxed pb-6 border-b border-border">
                 I started my software journey with an obsession for how things work under the hood. Through that, I learned to love the process of building full-stack applications from scratch. Since then, it has led me to develop deep expertise in the MERN stack and Next.js, allowing me to build scalable, production-ready systems that solve real-world problems powerfully.
               </p>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
               <div className="grid grid-cols-3 gap-6">
                 {stats.map((stat, idx) => (
                   <div key={idx} className="flex flex-col">
                     <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-400 mb-2">
                       {stat.value}
                     </span>
                     <span className="text-sm text-neutral-500 uppercase tracking-wider font-medium">
                       {stat.label}
                     </span>
                   </div>
                 ))}
               </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
