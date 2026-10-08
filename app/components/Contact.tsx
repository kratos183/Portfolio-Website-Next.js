import { Section, SectionHeading } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { site } from "../lib/site";
import { contactMeta } from "../lib/resume";

const metaIcons = [Mail, Phone, MapPin, MapPin] as const;

const socials = [
  { label: "GitHub", href: site.links.github, icon: Github },
  { label: "LinkedIn", href: site.links.linkedin, icon: Linkedin },
  { label: "Email", href: site.links.email, icon: Mail },
];

export function Contact() {
  return (
    <Section id="contact" tone="surface">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Open to remote backend and full-stack roles."
            />
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              I&apos;m currently looking for a backend or full-stack position at a
              company where the engineering is taken seriously — real code review,
              real ownership, real consequences for what ships. If that sounds like
              your team, I&apos;d like to talk.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href={`mailto:${site.email}`}
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:bg-brand hover:shadow-lift"
            >
              <Mail className="h-4 w-4" />
              {site.email}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-background px-4 text-sm font-medium text-foreground-soft transition-all hover:border-border-strong hover:bg-surface hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal direction="left" delay={0.1}>
            <dl className="overflow-hidden rounded-2xl border border-border bg-background shadow-card">
              {contactMeta.map(({ label, value, href }, i) => {
                const Icon = metaIcons[i] ?? MapPin;
                const shell =
                  `flex items-start gap-4 px-6 py-5 transition-colors ` +
                  (i > 0 ? "border-t border-border " : "") +
                  (href ? "hover:bg-surface" : "");
                const inner = (
                  <>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand ring-1 ring-brand-ring">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                        {label}
                      </dt>
                      <dd className="mt-1 break-words text-sm text-foreground-soft">
                        {value}
                      </dd>
                    </div>
                  </>
                );

                return href ? (
                  <a
                    key={label}
                    href={href}
                    {...(href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={shell}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={label} className={shell}>
                    {inner}
                  </div>
                );
              })}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
