"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_OUT } from "../../lib/motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  className?: string;
}

function offsetFor(direction: Direction) {
  switch (direction) {
    case "up":
      return { y: 28 };
    case "down":
      return { y: -28 };
    case "left":
      return { x: -28 };
    case "right":
      return { x: 28 };
    default:
      return {};
  }
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.65,
  direction = "up",
  className = "",
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsetFor(direction) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: EASE_OUT,
      }}
    >
      {children}
    </motion.div>
  );
}
