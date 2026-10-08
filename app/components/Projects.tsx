import { Section, SectionHeading } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { ArrowUpRight, Check, Lock } from "lucide-react";
import { featuredProject, supportingProjects, type Project } from "../lib/projects";
import { projectIcons } from "../lib/icons";
import { cn } from "../lib/utils";

function TechPills({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((tech) => (
        <li
          key={tech}
          className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[11px] font-medium tracking-tight text-muted transition-colors group-hover:border-border-strong group-hover:text-foreground-soft"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

function Highlights({ items, limit }: { items: string[]; limit?: number }) {
  const shown = typeof limit === "number" ? items.slice(0, limit) : items;
  const hidden = items.length - shown.length;

  return (
    <ul className="space-y-2.5">
      {shown.map((point) => (
        <li key={point} className="flex gap-3">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
          <span className="text-sm leading-relaxed text-muted">{point}</span>
        </li>
      ))}
      {hidden > 0 ? (
        <li className="pl-7 font-mono text-xs uppercase tracking-[0.12em] text-faint">
          +{hidden} more in the case study
        </li>
      ) : null}
    </ul>
  );
}

function Actions({ project }: { project: Project }) {
  const Icon = projectIcons[project.slug];

  if (project.liveIsPublic && project.liveUrl) {
    return (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group/link inline-flex h-10 items-center gap-2 rounded-lg bg-foreground px-4 text-sm font-medium text-background transition-all hover:bg-brand hover:shadow-lift"
      >
        <span
          className={cn(
            "transition-transform duration-300 group-hover/link:scale-110",
            Icon ? "hidden sm:block" : "hidden",
          )}
        >
          {Icon ? <Icon className="h-4 w-4" /> : null}
        </span>
        Live demo
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
      </a>
    );
  }

  return (
    <span className="inline-flex h-10 cursor-default items-center gap-2 rounded-lg border border-border bg-surface px-4 text-sm font-medium text-muted">
      <Lock className="h-4 w-4" />
      Private build — APK on request
    </span>
  );
}

function MetricPanel({ project }: { project: Project }) {
  if (!project.metrics) return null;

  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-2xl bg-gradient-to-br p-6 text-white",
        project.tone.bar,
      )}
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/70">
        By the numbers
      </p>
      <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5">
        {project.metrics.map((m) => (
          <div key={m.label}>
            <dt className="text-2xl font-semibold tracking-tight md:text-3xl">
              {m.value}
            </dt>
            <dd className="mt-1 text-xs leading-snug text-white/75">{m.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <Reveal className="h-full">
      <article className="group grid h-full gap-8 rounded-2xl border border-border bg-background p-7 shadow-card transition-all duration-400 hover:border-border-strong hover:shadow-lift md:p-9 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-lg ring-1",
                project.tone.chip,
              )}
            >
              {(() => {
                const Icon = projectIcons[project.slug];
                return Icon ? <Icon className="h-5 w-5" /> : null;
              })()}
            </span>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              {project.kicker}
            </p>
          </div>

          <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {project.name}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            {project.summary}
          </p>

          <div className="mt-7">
            <Highlights items={project.highlights} limit={4} />
          </div>

          <div className="mt-7">
            <TechPills items={project.tech} />
          </div>

          <div className="mt-8">
            <Actions project={project} />
          </div>
        </div>

        <div className="lg:col-span-5">
          <MetricPanel project={project} />
        </div>
      </article>
    </Reveal>
  );
}

function CompactCard({ project }: { project: Project }) {
  return (
    <Reveal className="h-full" delay={0.06}>
      <article className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 shadow-card transition-all duration-400 hover:-translate-y-1 hover:border-border-strong hover:shadow-lift md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ring-1 transition-transform duration-400 group-hover:scale-110",
                project.tone.chip,
              )}
            >
              {(() => {
                const Icon = projectIcons[project.slug];
                return Icon ? <Icon className="h-5 w-5" /> : null;
              })()}
            </span>
            <p className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-muted">
              {project.kicker}
            </p>
          </div>
        </div>

        <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
          {project.name}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted line-clamp-3">
          {project.summary}
        </p>

        <div className="mt-5 flex-1">
          <Highlights items={project.highlights} limit={2} />
        </div>

        {project.metrics ? (
          <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-y border-border py-4">
            {project.metrics.map((m) => (
              <div key={m.label} className="min-w-0">
                <dt className="text-lg font-semibold tracking-tight text-foreground">
                  {m.value}
                </dt>
                <dd className="mt-0.5 truncate text-[11px] text-faint">{m.label}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        <div className="mt-6">
          <TechPills items={project.tech.slice(0, 6)} />
        </div>

        <div className="mt-6 pt-1">
          <Actions project={project} />
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <Section id="work" tone="surface">
      <Reveal>
        <SectionHeading
          eyebrow="Selected work"
          title="Five products, built and shipped."
          description="Each of these is a working application with a real backend behind it — schemas, authorization, CI and deployment, not a front-end mock. Four are live and linked below."
        />
      </Reveal>

      <div className="mt-14">
        <FeaturedCard project={featuredProject} />
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {supportingProjects.map((project) => (
          <CompactCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
