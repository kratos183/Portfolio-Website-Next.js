import { ArrowUp } from "lucide-react";
import { site } from "../lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground font-mono text-xs font-semibold text-background">
                CA
              </span>
              <span className="text-sm font-semibold tracking-tight text-foreground">
                {site.name}
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              {site.role} · {site.location}
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <nav aria-label="Footer navigation">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                Sections
              </p>
              <ul className="mt-4 space-y-2.5">
                {site.nav.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Footer social links">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                Elsewhere
              </p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={site.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={site.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="/resume"
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    Résumé
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} {site.name}. Built with Next.js and Tailwind
            CSS.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 self-start text-xs font-medium text-muted transition-colors hover:text-foreground sm:self-auto"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
