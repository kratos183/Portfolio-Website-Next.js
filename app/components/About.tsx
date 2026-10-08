import { Section, SectionHeading } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { Database, ShieldCheck, GitPullRequestArrow, Layers } from "lucide-react";

const principles = [
  {
    icon: Database,
    title: "Schema before screens",
    body: "I design the data model and its authorization rules first, then build the interface on top. It is faster than retrofitting either later.",
  },
  {
    icon: ShieldCheck,
    title: "Security at the boundary",
    body: "Authorization belongs in the database and the edge, not in client-side checks that a user can simply bypass.",
  },
  {
    icon: GitPullRequestArrow,
    title: "Verification over opinion",
    body: "Type checks, tests and CI gates catch what review misses. On one project those gates caught real bugs before merge.",
  },
  {
    icon: Layers,
    title: "Pick the boring tool",
    body: "Postgres and Redis solve most problems well. I add Kafka, sharding or polyglot stores only when the requirement earns them.",
  },
];

export function About() {
  return (
    <Section id="about" tone="surface">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title="I build systems end to end, and I own what I ship."
            />
          </Reveal>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted md:text-lg">
            <Reveal delay={0.05}>
              <p>
                I&apos;m a backend-focused engineer based in Dhanbad, India, working
                across the stack. Most of my work starts the same way: a domain with
                real rules in it — lending, learning, commerce, logistics — and a
                schema that has to express those rules correctly before any screen
                can be drawn.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Over the last three years I&apos;ve delivered four full-stack
                platforms and one React Native app, covering database design,
                backend services, interfaces, CI pipelines and deployment. That
                range is the point: I can take a requirement from an ambiguous brief
                to a running, monitored system without waiting on a handoff.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                I care most about the parts that are unglamorous and expensive to
                get wrong — authorization that actually holds, financial maths that
                balances to the last rupee, migrations that run twice without
                breaking, pipelines that fail loudly instead of silently. Where I
                can, I encode those guarantees in tests and CI gates so they stay
                true after I stop looking at them.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-5">
          <Reveal direction="left" delay={0.1}>
            <div className="rounded-2xl border border-border bg-background p-7 shadow-card">
              <h3 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">
                How I work
              </h3>
              <ul className="mt-6 space-y-6">
                {principles.map(({ icon: Icon, title, body }) => (
                  <li key={title} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand ring-1 ring-brand-ring">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        {title}
                      </h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
