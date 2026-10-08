import { tickerItems } from "../lib/resume";

function Row({ slow = false }: { slow?: boolean }) {
  return (
    <div
      className={`flex shrink-0 items-center gap-10 pr-10 ${
        slow ? "animate-marquee-slow" : "animate-marquee"
      }`}
      aria-hidden={slow ? "true" : undefined}
    >
      {tickerItems.map((item) => (
        <span
          key={item}
          className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-muted"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function Ticker() {
  return (
    <div className="marquee-host relative overflow-hidden border-y border-border bg-surface py-5">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />

      <div className="flex w-max">
        <Row />
        <Row />
      </div>
    </div>
  );
}
