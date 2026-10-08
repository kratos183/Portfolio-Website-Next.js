import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, Mail, MapPin, Phone } from "lucide-react";
import { PrintButton } from "../components/PrintButton";
import { site } from "../lib/site";
import { education, experience, skillGroups } from "../lib/resume";
import { projects } from "../lib/projects";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Résumé of ${site.name} — ${site.role}. Backend and full-stack engineer specialising in Node.js, React, Next.js and distributed systems.`,
  alternates: { canonical: "/resume" },
};

function Rule() {
  return <hr className="mt-6 border-t border-border" />;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
      {children}
    </h2>
  );
}

export default function ResumePage() {
  return (
    <main className="bg-surface py-10 print:bg-white print:py-0">
      <div className="no-print mx-auto mb-8 flex w-full max-w-[850px] flex-wrap items-center justify-between gap-3 px-6">
        <Link
          href="/"
          className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-background px-4 text-sm font-medium text-foreground-soft transition-all hover:border-border-strong hover:bg-surface hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to site
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="/resume.txt"
            download="Chand-Ansari-Resume.txt"
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-background px-4 text-sm font-medium text-foreground-soft transition-all hover:border-border-strong hover:bg-surface hover:text-foreground"
          >
            <Download className="h-4 w-4" />
            Plain text (ATS)
          </a>
          <PrintButton />
        </div>
      </div>

      <article className="mx-auto w-full max-w-[850px] border border-border bg-background px-8 py-10 shadow-card print:max-w-none print:border-0 print:px-0 print:py-0 print:shadow-none md:px-12 md:py-12">
        {/* Header */}
        <header className="border-b-2 border-foreground pb-5">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {site.name}
          </h1>
          <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.18em] text-brand">
            {site.role}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-brand"
            >
              <Mail className="h-3.5 w-3.5" />
              {site.email}
            </a>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" />
              {site.phone}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {site.location} · {site.timezone}
            </span>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brand"
            >
              {site.links.github.replace("https://", "")}
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brand"
            >
              linkedin.com/in/chand-ansari-610348366
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mt-8">
          <SectionTitle>Summary</SectionTitle>
          <p className="mt-3 text-sm leading-relaxed text-foreground-soft">
            Backend-focused engineer with 3+ years building production web
            applications and distributed systems. Shipped four full-stack products
            end to end — a multi-portal loan origination platform, an AI-powered
            learning platform, an e-commerce suite with a real-time AI assistant,
            and a video streaming platform — plus a React Native app for on-demand
            service booking. Experienced in containerised deployments (Docker),
            CI/CD automation (GitHub Actions) and cloud infrastructure on AWS, with
            industry experience at Nitecore Private Limited. Seeking a remote
            backend or full-stack role at a high-growth company.
          </p>
        </section>

        <Rule />

        {/* Skills */}
        <section className="mt-8">
          <SectionTitle>Technical Skills</SectionTitle>
          <dl className="mt-3 space-y-2.5">
            {skillGroups.map((group) => (
              <div key={group.label} className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                <dt className="shrink-0 text-xs font-semibold text-foreground sm:w-48">
                  {group.label}
                </dt>
                <dd className="text-xs leading-relaxed text-muted">
                  {group.items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <Rule />

        {/* Experience */}
        <section className="mt-8">
          <SectionTitle>Experience</SectionTitle>
          <div className="mt-4 space-y-7">
            {experience.map((item) => (
              <div key={`${item.org}-${item.role}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.role}
                    <span className="font-normal text-muted"> — {item.org}</span>
                    {item.location ? (
                      <span className="font-normal text-faint">
                        {" "}
                        · {item.location}
                      </span>
                    ) : null}
                  </h3>
                  {item.period ? (
                    <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                      {item.period}
                    </span>
                  ) : null}
                </div>
                <ul className="mt-2 space-y-1.5">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-xs leading-relaxed text-muted"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <Rule />

        {/* Projects */}
        <section className="mt-8">
          <SectionTitle>Selected Projects</SectionTitle>
          <div className="mt-4 space-y-7">
            {projects.map((project) => (
              <div key={project.slug}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                  <h3 className="text-sm font-semibold text-foreground">
                    {project.name}
                    <span className="font-normal text-muted">
                      {" "}
                      — {project.kicker}
                    </span>
                  </h3>
                  {project.liveIsPublic && project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] text-brand hover:underline"
                    >
                      Live
                    </a>
                  ) : null}
                </div>
                <p className="mt-1 font-mono text-[11px] tracking-tight text-faint">
                  {project.tech.join(" · ")}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {project.highlights.slice(0, 3).map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-xs leading-relaxed text-muted"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <Rule />

        {/* Education */}
        <section className="mt-8">
          <SectionTitle>Education</SectionTitle>
          <div className="mt-4 space-y-4">
            {education.map((item) => (
              <div
                key={item.degree}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5"
              >
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.degree}
                    <span className="font-normal text-muted">
                      {" "}
                      — {item.school}, {item.location}
                    </span>
                  </h3>
                  {item.note ? (
                    <p className="mt-0.5 text-xs text-faint">{item.note}</p>
                  ) : null}
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                  {item.period}
                </span>
              </div>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
