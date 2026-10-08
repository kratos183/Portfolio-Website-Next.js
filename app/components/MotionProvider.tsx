"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * `reducedMotion="user"` makes framer-motion skip transform and layout
 * animations for visitors whose OS requests reduced motion. Opacity fades are
 * kept so content still resolves, but nothing slides or scales.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
