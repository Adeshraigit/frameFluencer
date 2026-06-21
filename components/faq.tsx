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
    q: "Who do you typically work with?",
    a: "Creators, coaches, founders, agencies, SaaS companies, and personal brands — anyone who needs consistent, polished video content without doing the editing themselves.",
  },
  {
    q: "What does the turnaround time look like?",
    a: "Short-form edits usually ship within 48–72 hours. Long-form edits take 3–5 business days depending on length and complexity. We'll confirm timelines before each project starts.",
  },
  {
    q: "How many revisions are included?",
    a: "Unlimited. We keep iterating on the cut until the pacing, tone, and feel match your brand.",
  },
  {
    q: "Can you turn one long video into multiple short clips?",
    a: "Yes. That's one of our most common requests. Send us a long-form video and we'll pull out the best moments, reformat them for each platform, and add captions and hooks.",
  },
  {
    q: "Do you design thumbnails?",
    a: "Yes. Thumbnails are included as an add-on with long-form projects, designed for clicks and on-brand for your channel.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Just your raw footage and a short brief. If you have examples of videos you like, send those too — they help us match style quickly.",
  },
  {
    q: "Do I own the content you create?",
    a: "Yes. Everything we edit and deliver to you is 100% yours. Use it wherever you want, however you want.",
  },
  {
    q: "How do I get started?",
    a: "Book a free strategy call below. We'll learn about your goals, talk through your content, and recommend a plan that fits.",
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
            Questions, answered.
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
