"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Navbar from "@/components/navbar";
import WordsPullUp from "@/components/words-pull-up";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4";

const easeOut = [0.16, 1, 0.3, 1] as const;

const STATS = [
  { value: "250+", label: "Projects Delivered" },
  { value: "50M+", label: "Views Generated" },
  { value: "98%", label: "Client Satisfaction" },
] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Framefluence — Hero"
      className="h-screen w-full p-4 md:p-6"
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        {/* Noise overlay */}
        <div className="noise-overlay" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />

        {/* Top-center hanging navbar */}
        <Navbar />

        {/* Bottom content */}
        <div className="absolute right-0 bottom-0 left-0 z-20 p-4 sm:p-6 md:p-8 lg:p-10">
          {/* Main grid: heading + side content */}
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-6">
            {/* Heading */}
            <h1 className="lg:col-span-8 text-[22vw] sm:text-[20vw] md:text-[18vw] lg:text-[14vw] xl:text-[13vw] 2xl:text-[14vw] font-medium leading-[0.85] tracking-[-0.06em] text-[#E1E0CC]">
              <span className="block">
                <WordsPullUp text="We Edit." />
              </span>
              <span className="block">
                <WordsPullUp text="You Scale." />
              </span>
            </h1>

            {/* Description + CTAs */}
            <div className="flex flex-col gap-5 sm:gap-6 lg:col-span-4 lg:pb-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: easeOut }}
              >
                <p className="font-serif italic text-[#E1E0CC] text-lg sm:text-xl md:text-2xl leading-[1.1]">
                  Content That Actually Performs.
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55, ease: easeOut }}
                className="text-primary/70 max-w-md text-xs sm:text-sm md:text-base leading-[1.5]"
              >
                Framefluence transforms raw footage into high-performing content
                engineered for attention, engagement, and growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7, ease: easeOut }}
                className="flex flex-wrap items-center gap-3"
              >
                <a
                  href="#book"
                  className="group bg-primary text-black inline-flex items-center gap-2 rounded-full px-4 py-2.5 font-medium text-sm sm:px-5 sm:text-base transition-all duration-300 hover:gap-3"
                >
                  <span>Book A Free Strategy Call</span>
                  <span className="bg-black flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 sm:h-9 sm:w-9">
                    <ArrowRight
                      className="h-3.5 w-3.5 text-[#E1E0CC] sm:h-4 sm:w-4"
                      strokeWidth={2.5}
                    />
                  </span>
                </a>

                <a
                  href="#work"
                  className="group text-[#E1E0CC] inline-flex items-center gap-2 rounded-full border border-[#E1E0CC]/25 bg-black/20 px-4 py-2.5 text-xs font-medium backdrop-blur-sm transition-all duration-300 hover:border-[#E1E0CC]/50 hover:bg-black/40 sm:px-5 sm:text-sm"
                >
                  <Play
                    className="h-3 w-3 fill-current sm:h-3.5 sm:w-3.5"
                    strokeWidth={1.5}
                  />
                  <span>View Our Work</span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: easeOut }}
            className="mt-8 grid grid-cols-3 gap-4 border-t border-[#E1E0CC]/15 pt-5 sm:mt-10 sm:gap-6 sm:pt-6 md:mt-12"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 sm:gap-2">
                <span className="text-[#E1E0CC] text-2xl font-medium leading-none sm:text-3xl md:text-4xl lg:text-5xl">
                  {stat.value}
                </span>
                <span className="text-[10px] tracking-[0.18em] text-[#E1E0CC]/70 uppercase sm:text-xs">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}