"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex h-10 items-center gap-2 rounded-lg bg-foreground px-4 text-sm font-medium text-background transition-all hover:bg-brand hover:shadow-lift"
    >
      <Printer className="h-4 w-4" />
      Print / Save as PDF
    </button>
  );
}
