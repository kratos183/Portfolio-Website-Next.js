import { Section, SectionHeading } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { experience, education } from "../lib/resume";
import { GraduationCap } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience" tone="bordered">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Roles, contracts and internship work."
          description="A condensed history of where I have shipped and what I was responsible for at each stage."
        />
      </Reveal>

      <div className="relative mt-14">
        {/* timeline spine */}
        <div className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-border sm:block" />

        <ol className="space-y-10">
          {experience.map((item, i) => (
            <li key={`${item.org}-${item.role}`} className="relative sm:pl-12">
              {/* node */}
              <span className="absolute left-0 top-1.5 hidden h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-background bg-brand ring-2 ring-brand/20 sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-background" />
              </span>

              <Reveal delay={i * 0.06}>
                <div className="group rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-border-strong hover:shadow-card md:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {item.role}
                    </h3>
                    {item.period ? (
                      <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                        {item.period}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-1 text-sm text-muted">
                    {item.org}
                    {item.location ? (
                      <>
                        {" · "}
                        <span className="text-faint">{item.location}</span>
                      </>
                    ) : null}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                        <span className="text-sm leading-relaxed text-muted">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      {/* Education */}
      <div className="mt-16">
        <Reveal>
          <h3 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">
            Education
          </h3>
        </Reveal>
        {education.map((item) => (
          <Reveal key={item.degree} delay={0.05}>
            <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-border-strong hover:shadow-card sm:flex-row sm:items-center sm:justify-between md:p-7">
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand ring-1 ring-brand-ring">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold tracking-tight text-foreground">
                    {item.degree}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    {item.school} · {item.location}
                  </p>
                  {item.note ? (
                    <p className="mt-1 text-sm text-faint">{item.note}</p>
                  ) : null}
                </div>
              </div>
              <span className="shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-muted">
                {item.period}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
