import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

export function Section({
  id,
  children,
  className,
  tone = "plain",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "plain" | "surface" | "bordered";
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-20 md:py-28",
        tone === "surface" && "bg-surface border-y border-border",
        tone === "bordered" && "border-t border-border",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        <span className="h-px w-6 bg-brand/40" />
        <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
