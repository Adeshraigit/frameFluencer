"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  delayBase?: number;
  stagger?: number;
  className?: string;
}

export default function WordsPullUpMultiStyle({
  segments,
  delayBase = 0,
  stagger = 0.08,
  className,
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const items = segments.flatMap((segment) =>
    segment.text.split(" ").map((word) => ({
      word,
      className: segment.className ?? "",
    }))
  );

  return (
    <div
      ref={ref}
      className={`inline-flex w-full flex-wrap justify-center gap-x-[0.25em] gap-y-1 ${
        className ?? ""
      }`}
    >
      {items.map((item, i) => (
        <motion.span
          key={`${item.word}-${i}`}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{
            duration: 0.6,
            delay: delayBase + i * stagger,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`inline-block ${item.className}`}
        >
          {item.word}
        </motion.span>
      ))}
    </div>
  );
}