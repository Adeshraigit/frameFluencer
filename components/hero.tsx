"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Navbar from "@/components/navbar";
import WordsPullUp from "@/components/words-pull-up";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Framefluence — Hero"
      className="min-h-screen w-full p-4 md:p-6"
    >
      <div className="relative min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-3rem)] w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
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

        {/* Overlays */}
        <div className="noise-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />

        {/* Top-center hanging navbar */}
        <Navbar />

        {/* Bottom-left content */}
        <div className="absolute right-0 bottom-0 left-0 z-20 p-5 sm:p-8 md:p-10 lg:p-12">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
              className="flex items-center gap-3"
            >
              <span className="bg-primary inline-block h-px w-8 sm:w-10" />
              <span className="text-primary text-[10px] tracking-[0.25em] uppercase sm:text-xs">
                For creators, founders &amp; brands
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-[#E1E0CC] mt-4 text-[18vw] sm:text-[15vw] md:text-[12vw] lg:text-[9vw] xl:text-[8vw] 2xl:text-[7.5vw] font-medium leading-[0.85] tracking-[-0.05em]">
              <span className="block">
                <WordsPullUp text="We Edit." />
              </span>
              <span className="block">
                <WordsPullUp text="You Scale." />
              </span>
            </h1>

            {/* Italic accent */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: easeOut }}
              className="font-serif italic text-[#E1E0CC] mt-5 text-lg sm:text-xl md:text-2xl lg:text-[1.75rem] leading-[1.2]"
            >
              Content that actually performs.
            </motion.p>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: easeOut }}
              className="text-[#E1E0CC]/75 mt-3 max-w-xl text-sm sm:text-base md:text-lg leading-[1.55]"
            >
              We handle your editing end to end so you can post more and edit
              less.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85, ease: easeOut }}
              className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9"
            >
              <a
                href="#book"
                className="group bg-primary text-black inline-flex items-center gap-2 rounded-full px-5 py-3 font-medium text-sm sm:px-6 sm:text-base transition-all duration-300 hover:gap-3"
              >
                <span>Book a Free Strategy Call</span>
                <span className="bg-black flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 sm:h-9 sm:w-9">
                  <ArrowRight
                    className="h-3.5 w-3.5 text-[#E1E0CC] sm:h-4 sm:w-4"
                    strokeWidth={2.5}
                  />
                </span>
              </a>

              <a
                href="#work"
                className="group text-[#E1E0CC] inline-flex items-center gap-2 rounded-full border border-[#E1E0CC]/30 bg-black/40 px-5 py-3 text-xs font-medium backdrop-blur-sm transition-all duration-300 hover:border-[#E1E0CC]/60 hover:bg-black/60 sm:text-sm"
              >
                <Play
                  className="h-3 w-3 fill-current sm:h-3.5 sm:w-3.5"
                  strokeWidth={1.5}
                />
                <span>See Our Work</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
