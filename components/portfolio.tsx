"use client";

import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const PORTFOLIO_VIDEO_1 =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4";

const PORTFOLIO_VIDEO_2 =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4";

const PORTFOLIO_VIDEO_3 =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4";

interface Project {
  category: string;
  title: string;
  result: string;
  resultLabel: string;
  video: string;
  span?: "wide" | "tall";
}

const PROJECTS: Project[] = [
  {
    category: "Creator Growth",
    title: "Creator Growth Campaign.",
    result: "3.4M+",
    resultLabel: "Views",
    video: PORTFOLIO_VIDEO_1,
    span: "wide",
  },
  {
    category: "SaaS Launch",
    title: "SaaS Launch Campaign.",
    result: "240%",
    resultLabel: "Increase In Engagement",
    video: PORTFOLIO_VIDEO_2,
  },
  {
    category: "Podcast System",
    title: "Podcast Content System.",
    result: "50+",
    resultLabel: "Clips Monthly",
    video: PORTFOLIO_VIDEO_3,
  },
];

const easeCard = [0.22, 1, 0.36, 1] as const;

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="work"
      aria-label="Selected work"
      className="bg-black relative w-full overflow-hidden px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 sm:mb-14 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-primary text-[10px] tracking-[0.2em] uppercase sm:text-xs">
              Selected work
            </span>
            <h2 className="text-[#E1E0CC] mt-3 text-3xl leading-[0.95] font-medium sm:mt-4 sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl">
              Featured Projects.
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm leading-[1.6] md:text-base">
            A glimpse at the work we&apos;ve shipped for creators, brands and
            SaaS teams. Every frame is engineered to perform.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 gap-3 md:grid-cols-6 md:gap-3 lg:gap-4"
        >
          {PROJECTS.map((project, index) => {
            const colSpan =
              project.span === "wide"
                ? "md:col-span-6 lg:col-span-6"
                : "md:col-span-3 lg:col-span-3";

            return (
              <motion.a
                key={project.title}
                href="#case-study"
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : undefined}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: easeCard,
                }}
                className={`group bg-[#212121] relative block overflow-hidden rounded-2xl ${colSpan} ${
                  project.span === "wide" ? "aspect-[16/8]" : "aspect-[4/5]"
                }`}
              >
                {/* Video */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-hidden
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                >
                  <source src={project.video} type="video/mp4" />
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80 transition-opacity duration-500 group-hover:via-black/40" />

                {/* Top row — category + arrow */}
                <div className="absolute top-0 right-0 left-0 z-10 flex items-start justify-between p-5 sm:p-6 md:p-8">
                  <span className="text-[10px] tracking-[0.2em] text-[#E1E0CC]/80 uppercase sm:text-xs">
                    {project.category}
                  </span>
                  <span className="bg-[#E1E0CC]/10 text-[#E1E0CC] flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#E1E0CC] group-hover:text-black sm:h-10 sm:w-10">
                    <ArrowUpRight
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      strokeWidth={2}
                    />
                  </span>
                </div>

                {/* Bottom — title + result */}
                <div className="absolute right-0 bottom-0 left-0 z-10 flex flex-col gap-3 p-5 sm:p-6 md:flex-row md:items-end md:justify-between md:gap-6 md:p-8">
                  <h3
                    className="text-xl font-medium leading-tight sm:text-2xl md:text-3xl lg:text-4xl"
                    style={{ color: "#E1E0CC" }}
                  >
                    {project.title}
                  </h3>

                  <div className="flex flex-col gap-0.5 md:items-end">
                    <span className="text-primary text-2xl font-medium leading-none sm:text-3xl md:text-4xl lg:text-5xl">
                      {project.result}
                    </span>
                    <span className="text-[10px] tracking-[0.18em] text-[#E1E0CC]/70 uppercase sm:text-xs">
                      {project.resultLabel}
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}