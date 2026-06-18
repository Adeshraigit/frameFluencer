"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { Plus } from "lucide-react";
import { useRef, useState } from "react";

interface QA {
  q: string;
  a: string;
}

const FAQS: QA[] = [
  {
    q: "How fast is delivery?",
    a: "Most short-form edits ship within 48–72 hours. Long-form edits typically take 3–5 business days depending on length and complexity.",
  },
  {
    q: "How many revisions are included?",
    a: "Unlimited. We iterate on every cut until the pacing, hooks, and overall feel match your brand. No surprise charges.",
  },
  {
    q: "Do you edit podcasts?",
    a: "Yes — full multi-cam podcast editing, audio cleanup, chapter markers, and short-form clip generation for distribution.",
  },
  {
    q: "Can you create shorts from long videos?",
    a: "Absolutely. We identify the most engaging moments and reformat them for TikTok, Reels, and Shorts with captions and hooks optimized for each platform.",
  },
  {
    q: "Do you provide thumbnails?",
    a: "Yes. We design scroll-stopping thumbnails as an add-on with every long-form package, designed for clicks and retention.",
  },
  {
    q: "What industries do you work with?",
    a: "YouTubers, personal brands, SaaS, agencies, ecommerce, coaches, and podcasters. If your business creates video content, we can edit it.",
  },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="bg-black relative w-full overflow-hidden px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:py-32"
    >
      <div className="bg-noise" />

      <div
        ref={sectionRef}
        className="relative z-10 mx-auto max-w-4xl"
      >
        {/* Header */}
        <div className="mb-10 text-center sm:mb-12 md:mb-16">
          <span className="text-primary text-[10px] tracking-[0.2em] uppercase sm:text-xs">
            FAQ
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
            className="text-[#E1E0CC] mt-4 text-3xl leading-[0.95] font-medium sm:mt-6 sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl"
          >
            Questions, Answered.
          </motion.h2>
        </div>

        {/* List */}
        <div className="divide-y divide-[#E1E0CC]/10 border-t border-[#E1E0CC]/10">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : undefined}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.06,
                  ease: easeOut,
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-4 py-5 text-left transition-colors duration-300 sm:py-6 md:py-7"
                >
                  <span
                    className={`text-base font-medium leading-snug transition-colors duration-300 sm:text-lg md:text-xl ${
                      isOpen ? "text-[#E1E0CC]" : "text-[#E1E0CC]/85 group-hover:text-[#E1E0CC]"
                    }`}
                  >
                    {item.q}
                  </span>
                  <Plus
                    className={`text-primary h-5 w-5 flex-shrink-0 transition-transform duration-500 sm:h-6 sm:w-6 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                    strokeWidth={1.75}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.45, ease: easeOut },
                        opacity: { duration: 0.3, ease: easeOut },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 pb-5 pr-8 text-sm leading-[1.7] sm:pb-6 sm:text-base md:pb-7">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}