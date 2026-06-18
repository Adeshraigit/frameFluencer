"use client";

import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { useRef } from "react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Framefluence transformed our content quality overnight.",
    name: "Alex Rivera",
    role: "YouTube Creator · 1.2M Subscribers",
  },
  {
    quote:
      "The first batch of edits outperformed everything we had previously published.",
    name: "Sarah Mitchell",
    role: "Marketing Director · SaaS",
  },
  {
    quote:
      "Working with them feels like having an in-house creative team.",
    name: "Marcus Reed",
    role: "Host · Top 50 Business Podcast",
  },
];

const easeCard = [0.22, 1, 0.36, 1] as const;

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="bg-black relative w-full overflow-hidden px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:py-32"
    >
      <div className="bg-noise" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-primary text-[10px] tracking-[0.2em] uppercase sm:text-xs">
            Testimonials
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, delay: 0.1, ease: easeCard }}
            className="text-[#E1E0CC] mt-4 text-3xl leading-[0.95] font-medium sm:mt-6 sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl"
          >
            Trusted By Creators
            <br />
            <span className="font-serif italic">&amp; Brands.</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div
          ref={ref}
          className="mt-12 grid grid-cols-1 gap-3 sm:mt-14 sm:gap-4 md:mt-16 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t, index) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : undefined}
              transition={{
                duration: 0.8,
                delay: 0.15 + index * 0.12,
                ease: easeCard,
              }}
              className="bg-[#101010] group relative flex flex-col rounded-2xl p-6 transition-colors duration-500 sm:p-8"
            >
              <Quote
                className="text-primary/40 mb-5 h-7 w-7 sm:mb-6 sm:h-8 sm:w-8"
                strokeWidth={1.5}
              />

              <blockquote
                className="text-[#E1E0CC] flex-1 text-base font-medium leading-[1.5] sm:text-lg md:text-xl"
                style={{ color: "#E1E0CC" }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-[#E1E0CC]/10 pt-5 sm:mt-8 sm:pt-6">
                <div className="bg-primary/20 text-primary flex h-9 w-9 items-center justify-center rounded-full text-xs font-medium sm:h-10 sm:w-10">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#E1E0CC" }}
                  >
                    {t.name}
                  </span>
                  <span className="text-[10px] tracking-[0.1em] text-gray-400 uppercase sm:text-xs">
                    {t.role}
                  </span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}