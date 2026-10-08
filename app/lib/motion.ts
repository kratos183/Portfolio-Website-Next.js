import type { Variants } from "framer-motion";

/**
 * Shared easing curves.
 * Typed as explicit 4-tuples so framer-motion's `Easing` union accepts them
 * whether or not the object literal is contextually typed.
 */
export const EASE_OUT: [number, number, number, number] = [0.22, 0.61, 0.36, 1];
export const EASE_SOFT: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Fade + rise, staggered by index via the `custom` prop. */
export const staggerFade: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.08 * i, ease: EASE_OUT },
  }),
};
