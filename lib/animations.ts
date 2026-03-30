import type { Variants } from "framer-motion";

export const revealStaggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

export const revealItem: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const revealPanel = {
  initial: { y: -80 },
  animate: { y: 0 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
} as const;
