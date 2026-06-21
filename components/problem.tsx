"use client";

import { motion, useInView } from "framer-motion";
import { Clock, Calendar, TrendingDown, Layers } from "lucide-react";
import { useRef } from "react";

interface PainPoint {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
}

const PAIN_POINTS: PainPoint[] = [
  {
    icon: Clock,
    title: "No time to edit.",
    description:
      "You should be creating, coaching, or running your business — not color-grading at 11pm.",
  },
  {
    icon: Calendar,
    title: "Inconsistent posting.",
    description:
      "Long gaps between uploads kill momentum. Algorithms reward consistency, and so does your audience.",
  },
  {
    icon: TrendingDown,
    title: "Low engagement.",
    description:
      "A weak hook in the first three seconds means nobody watches the rest. Most DIY edits leave performance on the table.",
  },
  {
    icon: Layers,
    title: "Content bottlenecks.",
    description:
      "One great long-form video should become ten short clips. Doing that manually takes longer than the original edit.",
  },
];

const easeCard = [0.22, 1, 0.36, 1] as const;

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="problem"
      aria-label="The problem"
      className="bg-black relative w-full overflow-hidden px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:py-32"
    >
      <div className="bg-noise" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-primary text-[10px] tracking-[0.2em] uppercase sm:text-xs">
            The problem
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, delay: 0.1, ease: easeCard }}
            className="text-[#E1E0CC] mt-4 text-3xl leading-[0.95] font-medium sm:mt-6 sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl"
          >
            Editing shouldn&apos;t be the reason
            <br />
            <span className="font-serif italic">you don&apos;t post.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, delay: 0.2, ease: easeCard }}
            className="text-gray-400 mx-auto mt-5 max-w-2xl text-sm leading-[1.6] sm:mt-6 sm:text-base"
          >
            Most creators and teams know they should be posting more. The
            bottleneck is rarely ideas — it&apos;s the editing. Hours disappear
            into timelines, captions, and revisions, and the content still
            doesn&apos;t quite land.
          </motion.p>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="mt-12 grid grid-cols-1 gap-3 sm:mt-14 sm:gap-3 md:mt-16 md:grid-cols-2 md:gap-4 lg:grid-cols-4"
        >
          {PAIN_POINTS.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
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
                  {point.title}
                </h3>

                <p className="text-gray-400 mt-3 text-sm leading-[1.6] sm:mt-4">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
