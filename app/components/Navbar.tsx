"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";
import { site } from "../lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy — highlight the section currently in view
  useEffect(() => {
    const ids = site.nav.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close the mobile sheet when the viewport grows
  useEffect(() => {
    if (!open) return;
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-lg supports-[backdrop-filter]:bg-background/70"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:h-[72px]">
        <a
          href="#home"
          className="group flex items-center gap-2.5"
          aria-label={`${site.name} — home`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground font-mono text-sm font-semibold tracking-tight text-background transition-transform duration-300 group-hover:-rotate-6">
            CA
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:block">
            {site.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {site.nav.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive ? "text-foreground" : "text-muted hover:text-foreground",
                )}
              >
                {link.name}
                {isActive ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/resume"
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border bg-background px-3.5 text-sm font-medium text-foreground-soft transition-all hover:border-border-strong hover:bg-surface hover:text-foreground"
          >
            <FileText className="h-4 w-4" />
            Résumé
          </Link>
          <a
            href="#contact"
            className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-foreground px-3.5 text-sm font-medium text-background transition-all hover:bg-brand hover:shadow-lift"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-foreground md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
            className="overflow-hidden border-b border-border bg-background md:hidden"
          >
            <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
              {site.nav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/70 py-3 text-base font-medium text-foreground-soft last:border-0 hover:text-brand"
                >
                  {link.name}
                </a>
              ))}
              <Link
                href="/resume"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border text-sm font-medium text-foreground"
              >
                <FileText className="h-4 w-4" />
                View résumé
              </Link>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-foreground text-sm font-medium text-background"
              >
                Get in touch
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
