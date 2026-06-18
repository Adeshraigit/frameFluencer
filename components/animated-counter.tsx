"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

interface AnimatedCounterProps {
  to: number;
  duration?: number;
  className?: string;
  format?: (value: number) => string;
}

export default function AnimatedCounter({
  to,
  duration = 2,
  className,
  format,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (value) => setDisplay(value),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  const formatted = format
    ? format(display)
    : Math.round(display).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {formatted}
    </span>
  );
}