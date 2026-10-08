import { Section, SectionHeading } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { Stagger, StaggerItem } from "./ui/Stagger";
import { skillGroups } from "../lib/resume";

export function Skills() {
  return (
    <Section id="skills" tone="bordered">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit I reach for."
          description="Organised by what the tool actually does, not by how trendy it is."
        />
      </Reveal>

      <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <StaggerItem key={group.label}>
            <div className="group h-full rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-border-strong hover:shadow-card">
              <h3 className="flex items-center gap-2.5 text-sm font-semibold text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[11px] tracking-tight text-muted transition-colors hover:border-brand-ring hover:bg-brand-soft hover:text-brand"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
