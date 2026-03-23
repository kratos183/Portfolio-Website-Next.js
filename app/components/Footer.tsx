import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-surface border-t border-border">
      <div className="container mx-auto px-6 flex flex-col items-center">
         <h4 className="text-xl font-bold tracking-tight text-foreground mb-4">
            CHAND<span className="text-brand-accent">.</span>
         </h4>
         <p className="text-sm text-muted mb-8 text-center max-w-sm">
            Designed and built with care. All rights reserved for Chand Ansari.
         </p>
         <div className="flex items-center gap-6">
            <a href="mailto:contact@chandansari.com" className="text-muted hover:text-white transition-colors bg-background p-3 rounded-full hover:bg-brand-accent">
               <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com/kratos183" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors bg-background p-3 rounded-full hover:bg-brand-accent">
               <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/chandansari" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors bg-background p-3 rounded-full hover:bg-brand-accent">
               <Linkedin className="w-5 h-5" />
            </a>
         </div>
      </div>
    </footer>
  );
}
