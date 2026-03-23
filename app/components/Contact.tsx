"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Reveal } from "./ui/Reveal";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-background relative border-t border-border">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10">

          {/* Left: Text */}
          <div className="space-y-6">
            <Reveal direction="up">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                Have a project?<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                  Let's talk!
                </span>
              </h2>
              <p className="mt-4 text-muted max-w-md text-lg leading-relaxed">
                Whether you're looking to build a new startup from scratch or improve an existing application, I'm here to help turn your ideas into a robust digital reality.
              </p>
            </Reveal>
          </div>

          {/* Right: Form */}
          <div>
            <Reveal direction="up" delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-6 bg-surface p-8 shadow-2xl rounded-2xl border border-border">

                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted pl-1">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted pl-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all"
                    placeholder="[EMAIL_ADDRESS]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-muted pl-1">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center py-4 rounded-lg bg-brand-accent text-white font-medium hover:bg-brand-accentHover transition-colors gap-2 disabled:opacity-70 shadow-lg shadow-brand-accent/20"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : success ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Submit <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
