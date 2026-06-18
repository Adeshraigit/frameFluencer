"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  delayBase?: number;
  stagger?: number;
}

export default function WordsPullUp({
  text,
  className,
  showAsterisk = false,
  delayBase = 0,
  stagger = 0.08,
}: WordsPullUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const words = text.split(" ");
  const lastWord = words[words.length - 1] ?? "";
  const endsWithA = lastWord.toLowerCase().endsWith("a");

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={`${word}-${i}`}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{
              duration: 0.6,
              delay: delayBase + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`inline-block ${
              isLast && showAsterisk ? "relative" : ""
            }`}
          >
            {word}
            {isLast && showAsterisk && endsWithA && (
              <span
                aria-hidden
                className="pointer-events-none absolute select-none"
                style={{
                  top: "0.65em",
                  right: "-0.3em",
                  fontSize: "0.31em",
                  lineHeight: 1,
                }}
              >
                *
              </span>
            )}
            {!isLast && " "}
          </motion.span>
        );
      })}
    </span>
  );
}