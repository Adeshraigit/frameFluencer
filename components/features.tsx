"use client";

import { motion, useInView } from "framer-motion";
import {
  Film,
  Clapperboard,
  Repeat,
  Sparkles,
  Image as ImageIcon,
  ArrowRight,
} from "lucide-react";
import { useRef } from "react";
import WordsPullUpMultiStyle from "@/components/words-pull-up-multi-style";

interface ServiceCardData {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

const SERVICE_CARDS: ServiceCardData[] = [
  {
    number: "01",
    title: "Short-Form Video Editing",
    description:
      "Vertical video for TikTok, Reels, and YouTube Shorts. Hooks, captions, pacing, and cuts tuned for watch time.",
    deliverables: ["Reels", "TikToks", "Shorts", "Captions"],
    icon: Film,
  },
  {
    number: "02",
    title: "Long-Form Video Editing",
    description:
      "YouTube videos, podcasts, interviews, and educational content. Clean structure, tight pacing, and a finish that matches your brand.",
    deliverables: ["YouTube", "Podcasts", "Interviews", "Course content"],
    icon: Clapperboard,
  },
  {
    number: "03",
    title: "Content Repurposing",
    description:
      "Turn one long video into a full week of short-form content. Same message, multiple platforms, zero extra filming.",
    deliverables: ["Long-to-short clips", "Multi-platform cuts", "Caption variants"],
    icon: Repeat,
  },
  {
    number: "04",
    title: "Motion Graphics",
    description:
      "Titles, lower thirds, transitions, and visual effects that make your content look professional and intentional.",
    deliverables: ["Animated titles", "Brand graphics", "Transitions", "VFX"],
    icon: Sparkles,
  },
  {
    number: "05",
    title: "Thumbnail Design",
    description:
      "Scroll-stopping thumbnails designed for clicks. Clear hierarchy, on-brand visuals, and tested layouts.",
    deliverables: ["YouTube thumbnails", "Cover images", "Variant options"],
    icon: ImageIcon,
  },
];

const easeCard = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      aria-label="Services"
      className="bg-black relative w-full overflow-hidden px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:py-32"
    >
      <div className="bg-noise" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-primary text-[10px] tracking-[0.2em] uppercase sm:text-xs">
            What we do
          </span>
          <WordsPullUpMultiStyle
            segments={[
              {
                text: "Everything you need to publish,",
                className: "text-[#E1E0CC]",
              },
              {
                text: "in one place.",
                className: "italic font-serif text-[#E1E0CC]",
              },
            ]}
            className="mt-4 text-xl font-normal sm:mt-6 sm:text-2xl md:text-3xl lg:text-4xl leading-[1.15]"
          />
          <p className="text-gray-400 mx-auto mt-5 max-w-2xl text-sm leading-[1.6] sm:mt-6 sm:text-base">
            Built for creators, founders, and brands who care about both
            quality and consistency.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="mt-12 grid grid-cols-1 gap-3 sm:mt-14 sm:gap-3 md:mt-16 md:grid-cols-2 md:gap-4 lg:grid-cols-3"
        >
          {SERVICE_CARDS.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.number}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : undefined}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + index * 0.08,
                  ease: easeCard,
                }}
                className="group bg-[#212121] relative flex flex-col overflow-hidden rounded-2xl p-6 transition-colors duration-500 hover:bg-[#262626] sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="bg-[#E1E0CC]/10 text-[#E1E0CC] group-hover:bg-primary group-hover:text-black flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-500 sm:h-12 sm:w-12">
                    <Icon
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      strokeWidth={1.75}
                    />
                  </div>
                  <span className="text-gray-500 text-[10px] tracking-[0.2em] uppercase sm:text-xs">
                    {card.number}
                  </span>
                </div>

                <h3
                  className="mt-6 text-lg font-medium leading-tight sm:mt-8 sm:text-xl"
                  style={{ color: "#E1E0CC" }}
                >
                  {card.title}
                </h3>

                <p className="text-gray-400 mt-3 text-sm leading-[1.6] sm:mt-4">
                  {card.description}
                </p>

                <ul className="mt-5 flex-1 space-y-2 sm:mt-6 sm:space-y-2.5">
                  {card.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-gray-400 text-xs sm:text-sm"
                    >
                      <span
                        className="mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-current sm:mt-2"
                        aria-hidden
                      />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#book"
                  className="text-primary mt-6 inline-flex items-center gap-2 text-xs font-medium transition-opacity hover:opacity-80 sm:mt-8 sm:text-sm"
                >
                  Get started
                  <ArrowRight
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                    style={{ transform: "rotate(-45deg)" }}
                    strokeWidth={2.25}
                  />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
