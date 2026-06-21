"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WordsPullUp from "@/components/words-pull-up";

const CTA_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function FinalCta() {
  return (
    <section
      id="book"
      aria-label="Book a strategy call"
      className="bg-black relative w-full overflow-hidden px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:py-32"
    >
      {/* Background texture */}
      <div className="bg-noise" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(225,224,204,0.05)_0%,_transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Content — left */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="flex items-center gap-3"
            >
              <span className="bg-primary inline-block h-px w-10" />
              <span className="text-primary text-[10px] tracking-[0.25em] uppercase sm:text-xs">
                Let&apos;s talk
              </span>
            </motion.div>

            {/* Big serif accent — echoes the agency tagline */}
            <h2 className="text-[#E1E0CC] mt-5 text-[15vw] sm:text-[12vw] md:text-[8.5vw] lg:text-[6.5vw] xl:text-[5.5vw] font-medium leading-[0.9] tracking-[-0.04em]">
              <span className="block font-serif italic">
                <WordsPullUp text="Post more." />
              </span>
              <span className="block">
                <WordsPullUp text="Edit less." />
              </span>
            </h2>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.55, ease: easeOut }}
              className="text-[#E1E0CC]/80 mt-5 max-w-xl text-sm sm:text-base md:text-lg leading-[1.55]"
            >
              Book a free 20-minute strategy call. We&apos;ll review your
              content, suggest a plan, and see if Framefluence is the right
              fit — no pressure, no pitch deck.
            </motion.p>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.7, ease: easeOut }}
              className="mt-7 sm:mt-9"
            >
              <a
                href="#book-strategy"
                className="group bg-primary text-black inline-flex items-center gap-3 rounded-full px-6 py-4 font-medium text-base sm:px-8 sm:text-lg transition-all duration-300 hover:gap-4"
              >
                <span>Book a Free Strategy Call</span>
                <span className="bg-black flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight
                    className="h-4 w-4 text-[#E1E0CC] sm:h-5 sm:w-5"
                    strokeWidth={2.5}
                  />
                </span>
              </a>
            </motion.div>

            {/* Secondary — subtle text link */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.85, ease: easeOut }}
              className="mt-4 sm:mt-5"
            >
              <a
                href="mailto:hello@framefluence.com"
                className="text-[#E1E0CC]/65 hover:text-primary text-sm sm:text-base transition-colors duration-300"
              >
                Prefer email?{" "}
                <span className="underline underline-offset-[6px] decoration-[#E1E0CC]/30 hover:decoration-primary">
                  hello@framefluence.com
                </span>
              </a>
            </motion.div>

            {/* Closing — italic serif, brand promise */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 1, ease: easeOut }}
              className="font-serif italic text-[#E1E0CC]/55 mt-10 text-sm sm:text-base sm:mt-14"
            >
              You focus on the work. We&apos;ll handle the edit.
            </motion.p>
          </div>

          {/* Video card — right */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: easeOut }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#E1E0CC]/10 bg-[#101010] sm:rounded-3xl"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              >
                <source src={CTA_VIDEO} type="video/mp4" />
              </video>

              {/* Subtle gradient overlay for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
