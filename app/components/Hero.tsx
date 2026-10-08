"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  FileText,
  Github,
  Linkedin,
  MapPin,
} from "lucide-react";
import { site } from "../lib/site";
import { stats } from "../lib/resume";
import { EASE_OUT } from "../lib/motion";

/**
 * Explicit entrance props for the nth hero element.
 * Deliberately avoids function-variants: those resolve through framer-motion's
 * variant resolver, which is easy to get subtly wrong and hard to debug.
 */
function rise(index: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.08 * index, ease: EASE_OUT },
  };
}

const facts = [
  { icon: MapPin, label: "Based in", value: site.location },
  { icon: Check, label: "Availability", value: site.availability },
  { icon: ArrowUpRight, label: "Focus", value: "Backend & distributed systems" },
];

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24"
    >
      {/* Restrained corporate backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-[0.55]" />
        <div className="absolute inset-x-0 top-0 h-px bg-rule" />
        <div className="absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full bg-brand/10 blur-[110px]" />
        <div className="absolute -left-40 top-40 h-[380px] w-[380px] rounded-full bg-brand-soft blur-[110px]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12 lg:gap-10">
        {/* Primary column */}
        <div className="lg:col-span-7">
          <motion.h1
            {...rise(0)}
            className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]"
          >
            {site.name}
          </motion.h1>

          <motion.p
            {...rise(1)}
            className="mt-3 font-mono text-sm uppercase tracking-[0.16em] text-brand md:text-base"
          >
            {site.role}
          </motion.p>

          <motion.p
            {...rise(2)}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {site.summary}
          </motion.p>

          <motion.div
            {...rise(3)}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#work"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-foreground px-6 text-sm font-medium text-background transition-all hover:bg-brand hover:shadow-lift"
            >
              View selected work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/resume"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 text-sm font-medium text-foreground transition-all hover:border-border-strong hover:bg-surface"
            >
              <FileText className="h-4 w-4" />
              Résumé
            </Link>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg px-2 text-sm font-medium text-muted transition-colors hover:text-foreground sm:px-4"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </motion.div>

          <motion.div
            {...rise(4)}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-6"
          >
            <button
              type="button"
              onClick={copyEmail}
              className="group inline-flex items-center gap-2 font-mono text-sm text-foreground-soft transition-colors hover:text-brand"
              aria-label={`Copy email address ${site.email}`}
            >
              <span className="text-muted transition-colors group-hover:text-brand">
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </span>
              {copied ? "Copied to clipboard" : site.email}
            </button>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Side column — identity card */}
        <motion.div
          {...rise(3)}
          className="lg:col-span-5"
        >
          <div className="rounded-2xl border border-border bg-background p-7 shadow-card transition-shadow duration-500 hover:shadow-lift">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-foreground font-mono text-xl font-semibold tracking-tight text-background">
                  CA
                </div>
                <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-emerald-500" />
              </div>
              <div>
                <p className="font-semibold tracking-tight text-foreground">
                  {site.name}
                </p>
                <p className="mt-0.5 text-sm text-muted">{site.role}</p>
              </div>
            </div>

            <dl className="mt-7 space-y-3.5 border-t border-border pt-6">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <div className="min-w-0">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                      {label}
                    </dt>
                    <dd className="mt-0.5 text-sm text-foreground-soft">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
              {stats.map((s) => (
                <div key={s.label} className="bg-background p-4">
                  <p className="text-xl font-semibold tracking-tight text-foreground">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
