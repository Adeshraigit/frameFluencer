"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import WordsPullUp from "@/components/words-pull-up";

const CTA_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function FinalCta() {
  return (
    <section
      id="book"
      aria-label="Book a strategy call"
      className="bg-black w-full p-4 sm:p-6 md:p-6"
    >
      <div className="relative min-h-[80vh] w-full overflow-hidden rounded-2xl md:min-h-[90vh] md:rounded-[2rem]">
        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={CTA_VIDEO} type="video/mp4" />
        </video>

        {/* Overlays */}
        <div className="noise-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center sm:px-10 md:px-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="text-primary text-[10px] tracking-[0.25em] uppercase sm:text-xs"
          >
            Let&apos;s talk
          </motion.span>

          <h2 className="text-[#E1E0CC] mx-auto mt-6 max-w-5xl text-[12vw] leading-[0.9] font-medium tracking-[-0.04em] sm:mt-8 sm:text-[10vw] md:text-[7vw] lg:text-[6vw]">
            <span className="block">
              <WordsPullUp text="Ready When" />
            </span>
            <span className="block">
              <WordsPullUp text="You Are." />
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.4, ease: easeOut }}
            className="text-primary/85 mx-auto mt-6 max-w-xl text-sm leading-[1.6] sm:mt-8 sm:text-base md:text-lg"
          >
            Book a free 20-minute strategy call. We&apos;ll review your current
            content, suggest a plan, and see if Framefluence is the right fit —
            no pressure, no pitch deck.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.55, ease: easeOut }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10"
          >
            <a
              href="#book-strategy"
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
              href="mailto:hello@framefluence.com"
              className="text-[#E1E0CC] inline-flex items-center gap-2 rounded-full border border-[#E1E0CC]/30 bg-black/30 px-5 py-3 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:border-[#E1E0CC]/60 hover:bg-black/50 sm:text-base"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
              <span>hello@framefluence.com</span>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.7, ease: easeOut }}
            className="text-[#E1E0CC]/60 mt-8 max-w-md text-xs leading-[1.6] sm:text-sm"
          >
            You focus on the work. We&apos;ll handle the edit.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
