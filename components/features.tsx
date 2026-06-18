"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import WordsPullUpMultiStyle from "@/components/words-pull-up-multi-style";

const FEATURE_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4";

const SERVICE_ICON_EDIT =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85";

const SERVICE_ICON_MOTION =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85";

const SERVICE_ICON_REPURPOSE =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85";

interface ServiceCardData {
  number: string;
  title: string;
  icon: string;
  items: string[];
}

const SERVICE_CARDS: ServiceCardData[] = [
  {
    number: "02",
    title: "Long Form Editing",
    icon: SERVICE_ICON_EDIT,
    items: [
      "YouTube Videos",
      "Podcasts",
      "Interviews",
      "Educational Content",
    ],
  },
  {
    number: "03",
    title: "Motion Graphics",
    icon: SERVICE_ICON_MOTION,
    items: ["Titles", "Animations", "Visual Effects", "Brand Graphics"],
  },
  {
    number: "04",
    title: "Content Repurposing",
    icon: SERVICE_ICON_REPURPOSE,
    items: [
      "One video",
      "Multiple platforms",
      "Dozens of assets",
      "Maximum reach",
    ],
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
      className="bg-black relative min-h-screen w-full overflow-hidden px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:py-32"
    >
      <div className="bg-noise" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-primary text-[10px] tracking-[0.2em] uppercase sm:text-xs">
            Services
          </span>
          <WordsPullUpMultiStyle
            segments={[
              {
                text: "Services engineered for",
                className: "text-[#E1E0CC]",
              },
              {
                text: "attention, retention, and growth.",
                className: "text-gray-500",
              },
            ]}
            className="mt-4 text-xl font-normal sm:mt-6 sm:text-2xl md:text-3xl lg:text-4xl leading-[1.15]"
          />
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="mt-12 grid grid-cols-1 gap-3 sm:mt-14 sm:gap-2 md:mt-16 md:grid-cols-2 md:gap-1 lg:h-[480px] lg:grid-cols-4"
        >
          {/* Card 1 — Video (Short Form) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : undefined}
            transition={{ duration: 0.7, delay: 0, ease: easeCard }}
            className="group relative overflow-hidden rounded-2xl bg-[#212121] md:col-span-2 lg:col-span-1"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              <source src={FEATURE_VIDEO} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
            <div className="relative z-10 flex h-full min-h-[320px] flex-col justify-between p-5 sm:p-6 md:min-h-[360px] lg:min-h-0">
              <span className="text-gray-300 text-[10px] tracking-[0.2em] uppercase sm:text-xs">
                01 — Short Form
              </span>
              <div className="flex flex-col gap-2 sm:gap-3">
                <h3
                  className="text-xl font-medium leading-tight sm:text-2xl md:text-3xl"
                  style={{ color: "#E1E0CC" }}
                >
                  Short Form Content.
                </h3>
                <p className="text-primary/80 text-xs leading-snug sm:text-sm">
                  TikTok · Reels · YouTube Shorts
                </p>
                <p
                  className="text-[#E1E0CC]/90 mt-1 text-xs font-medium sm:text-sm"
                >
                  Built for reach and growth.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Cards 2-4 — Service cards */}
          {SERVICE_CARDS.map((card, index) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : undefined}
              transition={{
                duration: 0.7,
                delay: (index + 1) * 0.15,
                ease: easeCard,
              }}
              className="group bg-[#212121] flex flex-col rounded-2xl p-5 sm:p-6"
            >
              <div className="flex items-start justify-between">
                <img
                  src={card.icon}
                  alt=""
                  aria-hidden
                  className="h-10 w-10 rounded-md object-cover sm:h-12 sm:w-12"
                  loading="lazy"
                />
                <span className="text-gray-500 text-[10px] tracking-[0.2em] uppercase sm:text-xs">
                  {card.number}
                </span>
              </div>

              <h3
                className="mt-5 text-lg font-medium leading-tight sm:mt-6 sm:text-xl"
                style={{ color: "#E1E0CC" }}
              >
                {card.title}
              </h3>

              <ul className="mt-4 flex-1 space-y-2.5 sm:mt-5 sm:space-y-3">
                {card.items.map((item) => (
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
                href="#learn-more"
                className="text-primary mt-5 inline-flex items-center gap-2 text-xs font-medium transition-opacity hover:opacity-80 sm:mt-6 sm:text-sm"
              >
                Learn more
                <ArrowRight
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                  style={{ transform: "rotate(-45deg)" }}
                  strokeWidth={2.25}
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}