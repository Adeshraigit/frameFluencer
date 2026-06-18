"use client";

import { motion, useInView } from "framer-motion";
import {
  Zap,
  TrendingUp,
  RefreshCw,
  Lightbulb,
  Users,
  Award,
} from "lucide-react";
import { useRef } from "react";

interface Value {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
}

const VALUES: Value[] = [
  {
    icon: Zap,
    title: "Fast Turnaround.",
    description: "Most edits ship within 48–72 hours. Speed without sacrificing quality.",
  },
  {
    icon: TrendingUp,
    title: "Performance Focused.",
    description: "Every edit is engineered around retention, hooks, and platform psychology.",
  },
  {
    icon: RefreshCw,
    title: "Unlimited Revisions.",
    description: "We iterate until the cut is right. No surprise upcharges, ever.",
  },
  {
    icon: Lightbulb,
    title: "Creative Strategy.",
    description: "We don't just execute. We bring hooks, structure, and pacing ideas.",
  },
  {
    icon: Users,
    title: "Dedicated Team.",
    description: "A senior editor assigned to your brand — not a rotating freelancer pool.",
  },
  {
    icon: Award,
    title: "Premium Quality.",
    description: "Color, sound, motion and pacing tuned to industry-leading standards.",
  },
];

const easeCard = [0.22, 1, 0.36, 1] as const;

export default function WhyFramefluence() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="why"
      aria-label="Why Framefluence"
      className="bg-black relative w-full overflow-hidden px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:py-32"
    >
      <div className="bg-noise" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-primary text-[10px] tracking-[0.2em] uppercase sm:text-xs">
            Why Framefluence
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, delay: 0.1, ease: easeCard }}
            className="text-[#E1E0CC] mt-4 text-3xl leading-[0.95] font-medium sm:mt-6 sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl"
          >
            Editing Is Easy.
            <br />
            <span className="font-serif italic">Results Are Hard.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, delay: 0.2, ease: easeCard }}
            className="text-gray-400 mx-auto mt-5 max-w-2xl text-sm leading-[1.6] sm:mt-6 sm:text-base"
          >
            We obsess over the details that actually move the needle — pacing,
            hooks, retention, and the small craft choices that turn a viewer
            into a follower.
          </motion.p>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="mt-12 grid grid-cols-1 gap-3 sm:mt-14 sm:gap-3 md:mt-16 md:grid-cols-2 md:gap-4 lg:grid-cols-3"
        >
          {VALUES.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : undefined}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + index * 0.08,
                  ease: easeCard,
                }}
                className="group bg-[#212121] relative overflow-hidden rounded-2xl p-6 transition-colors duration-500 hover:bg-[#262626] sm:p-8"
              >
                <div className="bg-[#E1E0CC]/10 text-[#E1E0CC] group-hover:bg-primary group-hover:text-black mb-6 flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-500 sm:mb-8 sm:h-12 sm:w-12">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
                </div>

                <h3
                  className="text-lg font-medium leading-tight sm:text-xl"
                  style={{ color: "#E1E0CC" }}
                >
                  {value.title}
                </h3>

                <p className="text-gray-400 mt-3 text-sm leading-[1.6] sm:mt-4">
                  {value.description}
                </p>

                {/* Subtle corner glow on hover */}
                <div className="bg-primary pointer-events-none absolute -top-px -right-px h-24 w-24 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-15" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}