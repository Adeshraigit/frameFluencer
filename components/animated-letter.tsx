"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface AnimatedLetterProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

export default function AnimatedLetter({
  char,
  index,
  total,
  progress,
}: AnimatedLetterProps) {
  const safeTotal = Math.max(1, total);
  const charProgress = index / safeTotal;
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, charProgress + 0.05);

  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className="inline-block whitespace-pre"
    >
      {char === " " ? " " : char}
    </motion.span>
  );
}