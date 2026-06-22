"use client";

import MuxPlayer from "@mux/mux-player-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Sample {
  category: string;
  title: string;
  playbackId: string;
  span?: "wide" | "half";
}

const SAMPLES: Sample[] = [
  {
    category: "Short-form edit",
    title: "Vertical cut with captions and hooks.",
    playbackId: "3Nmf5S9azg301oGtrdRJ9iPuQqIic27ahSS31mGnlomE",
    span: "wide",
  },
  {
    category: "Long-form edit",
    title: "Paced, structured, and ready to publish.",
    playbackId: "1Q8RnFu5WIgo8htJJOg7Zl01v02NIZDrezlGzcbOXZ7Tg",
    span: "half",
  },
  {
    category: "Repurposed cut",
    title: "Long-form clip remixed for short-form.",
    playbackId: "EsxSO5blroSv8urnmAQ302MxEm1QMcH902rWWmgr8UN02g",
    span: "half",
  },
];

const easeCard = [0.22, 1, 0.36, 1] as const;

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="work"
      aria-label="Sample work"
      className="bg-black relative w-full overflow-hidden px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 sm:mb-14 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-primary text-[10px] tracking-[0.2em] uppercase sm:text-xs">
              Sample work
            </span>
            <h2 className="text-[#E1E0CC] mt-3 text-3xl leading-[0.95] font-medium sm:mt-4 sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl">
              The kind of edits
              <br />
              <span className="font-serif italic">we ship.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm leading-[1.6] md:text-base">
            A few examples of the editing style we bring to short-form,
            long-form, and repurposed content.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 gap-3 md:grid-cols-6 md:gap-3 lg:gap-4"
        >
          {SAMPLES.map((sample, index) => {
            const colSpan =
              sample.span === "wide"
                ? "md:col-span-6 lg:col-span-6"
                : "md:col-span-3 lg:col-span-3";

            return (
              <motion.div
                key={sample.title}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : undefined}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: easeCard,
                }}
                className={`group bg-[#212121] relative overflow-hidden rounded-2xl ${colSpan} aspect-video`}
              >
                {/* Mux video */}
                <MuxPlayer
                  playbackId={sample.playbackId}
                  autoPlay="muted"
                  loop
                  muted
                  preload="auto"
                  metadata={{
                    video_id: sample.playbackId,
                    video_title: sample.title,
                  }}
                  className="pointer-events-none absolute inset-0 h-full w-full transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80 transition-opacity duration-500 group-hover:via-black/40" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
