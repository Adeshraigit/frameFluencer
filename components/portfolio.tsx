"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import PortfolioCard, {
  type PortfolioSample,
} from "@/components/portfolio-card";

// Module-scoped so the array reference is stable across renders. Each card
// also gets a stable `playbackId` key for React reconciliation.
const SAMPLES: PortfolioSample[] = [
  {
    title: "Vertical cut with captions and hooks.",
    playbackId: "3Nmf5S9azg301oGtrdRJ9iPuQqIic27ahSS31mGnlomE",
    span: "wide",
  },
  {
    title: "Paced, structured, and ready to publish.",
    playbackId: "1Q8RnFu5WIgo8htJJOg7Zl01v02NIZDrezlGzcbOXZ7Tg",
    span: "half",
  },
  {
    title: "Long-form clip remixed for short-form.",
    playbackId: "EsxSO5blroSv8urnmAQ302MxEm1QMcH902rWWmgr8UN02g",
    span: "half",
  },
];

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);

  // Single observer for the entire grid. Children read `gridInView` and
  // skip their own observers, which is a meaningful saving when the grid
  // expands (3 cards now, more later).
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="work"
      aria-label="Sample work portfolio"
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
          {SAMPLES.map((sample, index) => (
            <PortfolioCard
              key={sample.playbackId}
              sample={sample}
              index={index}
              gridInView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
