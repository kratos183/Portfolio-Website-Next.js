import { Github, ExternalLink } from "lucide-react";
import { Reveal } from "./ui/Reveal";

export function Projects() {
  const projects = [
    {
      title: "VOLTEX",
      description: "Problem: E-commerce platforms struggle with complex state management and secure admin control. \n\nSolution: Built a full-stack platform featuring airtight JWT authentication, a dedicated role-based admin dashboard, and advanced, optimized product filtering. Designed to handle real-world transactions and large-scale inventory management seamlessly.",
      techStack: ["Next.js", "Express", "MongoDB", "Node.js", "Tailwind CSS"],
      liveUrl: "https://ecommerce-smoky-two-80.vercel.app/",
      githubUrl: "https://github.com/kratos183",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      altLayout: false,
    },
    {
      title: "AI Pipeline Editor",
      description: "Problem: Data scientists lack intuitive ways to piece together complex, multi-step AI workflows asynchronously. \n\nSolution: Engineered an interactive node-based visual editor for constructing Directed Acyclic Graphs (DAGs). Leverages React Flow for a complex drag-and-drop frontend and FastAPI for real-time edge validation and cycle detection.",
      techStack: ["React Flow", "FastAPI", "Python", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/kratos183",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
      altLayout: true,
    },
    {
      title: "Task Management App",
      description: "Problem: Teams face productivity loss due to disjointed workflows and unreliable data synchronization. \n\nSolution: Developed a robust RESTful architecture with a scalable MongoDB schema. Features highly optimized APIs with indexing, secure JWT-based auth, and an ultra-responsive frontend ensuring constant data reliability and zero downtime.",
      techStack: ["React", "Express", "JWT", "REST API", "MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/kratos183",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
      altLayout: false,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <Reveal direction="up">
          <div className="flex flex-col items-center justify-center mb-20 text-center">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Projects</h2>
             <div className="w-12 h-1 bg-brand-accent rounded-full" />
             <p className="mt-6 text-muted max-w-2xl text-lg">
               A showcase of complex applications I've built to solve real business problems, focusing on performance, scalability, and exceptional user experience.
             </p>
          </div>
        </Reveal>

        <div className="space-y-32">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                project.altLayout ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Project Info */}
              <div className="w-full lg:w-1/2 space-y-6">
                <Reveal direction={project.altLayout ? "left" : "right"}>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-surface border border-border text-xs font-medium rounded-full text-muted tracking-wide uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="mt-6 text-muted leading-relaxed text-lg whitespace-pre-wrap">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 mt-8">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-brand-accent text-white font-medium hover:bg-brand-accentHover transition-colors gap-2 shadow-lg shadow-brand-accent/20"
                    >
                      <Github className="w-5 h-5" />
                      View Github
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-surface border border-border text-foreground hover:bg-border transition-colors gap-2"
                    >
                      Live Demo
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </Reveal>
              </div>

              {/* Project Image */}
              <div className="w-full lg:w-1/2">
                 <Reveal direction={project.altLayout ? "right" : "left"} delay={0.2}>
                   <div className="relative group overflow-hidden rounded-2xl border border-border/50 bg-surface shadow-2xl transition-all hover:border-brand-accent/50 hover:shadow-brand-accent/10">
                      {/* Image Glow */}
                      <div className="absolute inset-0 bg-brand-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10 pointer-events-none" />
                      
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 max-h-[400px]"
                      />
                   </div>
                 </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
