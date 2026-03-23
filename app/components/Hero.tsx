"use client";

import { useState, useEffect } from "react";
import { Copy, Terminal, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@chandansari.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="pt-32 pb-16 md:pt-48 md:pb-32 flex items-center min-h-[90vh]">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="order-2 lg:order-1 flex flex-col items-start space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-sm font-medium text-muted">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for new opportunities
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            I build full-stack <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
              applications
            </span>{" "}
            that solve real-world problems.
          </h1>
          
          <p className="text-lg md:text-xl text-muted max-w-lg leading-relaxed">
            I'm Chand Ansari, a Full Stack Developer specializing in the MERN stack and Next.js, building robust, production-ready applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white text-black px-8 font-medium transition-transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="https://github.com/kratos183"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-surface px-8 font-medium text-foreground transition-all hover:bg-border hover:scale-105"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-4">
             <a href="https://linkedin.com/in/chandansari" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
             </a>
             <button onClick={handleCopyEmail} className="text-muted hover:text-white transition-colors flex items-center gap-2">
                <Mail className="w-6 h-6" />
                <span className="text-sm">{copied ? "Copied!" : "contact@chandansari.com"}</span>
             </button>
          </div>
        </div>

        {/* Right Image/Graphic */}
        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
             {/* Glow effect */}
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent to-red-600 rounded-full blur-[100px] opacity-30 animate-pulse" />
             
             {/* Circular Graphic like the template */}
             <div className="absolute inset-0 rounded-full border border-border/50  flex items-center justify-center">
                <div className="absolute inset-4 rounded-full border border-brand-accent/30" />
                <div className="absolute inset-8 rounded-full border border-brand-accent/10" />
             </div>

             {/* Profile image container */}
             <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-border/80 bg-surface shadow-2xl flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=800&auto=format&fit=crop&q=60" 
                  alt="Chand Ansari" 
                  className="w-full h-full object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                />
             </div>
             
             {/* Floating badage */}
             <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-surface border border-border px-6 py-4 rounded-xl shadow-xl z-20 hidden md:block backdrop-blur-md bg-opacity-80">
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-brand-accent/20 rounded-lg text-brand-accent">
                      <Terminal className="w-6 h-6" />
                   </div>
                   <div>
                      <p className="text-sm text-muted">Focus</p>
                      <p className="font-semibold text-foreground">Production-Ready Apps</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
