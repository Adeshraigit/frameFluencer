"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Send footage.",
    description:
      "Drop your files in our shared folder. Add a short brief if you'd like, or just the footage — either works.",
  },
  {
    number: "02",
    title: "We edit.",
    description:
      "Our team edits your video according to the brief and platform. Pacing, captions, sound, and motion all handled.",
  },
  {
    number: "03",
    title: "Review.",
    description:
      "You get a clean first draft. Request as many revisions as you need until it feels right.",
  },
  {
    number: "04",
    title: "Publish.",
    description:
      "Final files delivered in the formats and resolutions you need. Upload, post, and you're done.",
  },
];

const easeCard = [0.22, 1, 0.36, 1] as const;

export default function Process() {
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  // Desktop: scroll progress drives line fill + each step's reveal + dot pop
  const { scrollYProgress: desktopProgress } = useScroll({
    target: desktopRef,
    offset: ["start 0.9", "end 0.2"],
  });
  const desktopLineWidth = useTransform(desktopProgress, [0, 1], ["0%", "100%"]);

  const step1Opacity = useTransform(desktopProgress, [0, 0.1, 0.2], [0, 0.5, 1]);
  const step2Opacity = useTransform(desktopProgress, [0.2, 0.3, 0.4], [0, 0.5, 1]);
  const step3Opacity = useTransform(desktopProgress, [0.4, 0.5, 0.6], [0, 0.5, 1]);
  const step4Opacity = useTransform(desktopProgress, [0.6, 0.7, 0.85], [0, 0.5, 1]);

  const step1Y = useTransform(desktopProgress, [0, 0.2], [40, 0]);
  const step2Y = useTransform(desktopProgress, [0.2, 0.4], [40, 0]);
  const step3Y = useTransform(desktopProgress, [0.4, 0.6], [40, 0]);
  const step4Y = useTransform(desktopProgress, [0.6, 0.85], [40, 0]);

  const dot1Scale = useTransform(desktopProgress, [0, 0.15], [0, 1]);
  const dot2Scale = useTransform(desktopProgress, [0.2, 0.35], [0, 1]);
  const dot3Scale = useTransform(desktopProgress, [0.4, 0.55], [0, 1]);
  const dot4Scale = useTransform(desktopProgress, [0.6, 0.75], [0, 1]);

  const desktopOpacities = [step1Opacity, step2Opacity, step3Opacity, step4Opacity];
  const desktopYs = [step1Y, step2Y, step3Y, step4Y];
  const desktopDotScales = [dot1Scale, dot2Scale, dot3Scale, dot4Scale];

  // Mobile: scroll-driven vertical line fill + per-step whileInView
  const { scrollYProgress: mobileProgress } = useScroll({
    target: mobileRef,
    offset: ["start 0.9", "end 0.2"],
  });
  const mobileLineHeight = useTransform(mobileProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      aria-label="How it works"
      className="bg-black relative w-full overflow-hidden px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: easeCard }}
            className="text-primary text-[10px] tracking-[0.2em] uppercase sm:text-xs"
          >
            How it works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeCard }}
            className="text-[#E1E0CC] mt-4 text-3xl leading-[0.95] font-medium sm:mt-6 sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl"
          >
            From raw footage to ready-to-post,
            <br />
            <span className="font-serif italic">in four steps.</span>
          </motion.h2>
        </div>

        {/* Timeline — Desktop */}
        <div
          ref={desktopRef}
          className="mt-14 hidden md:block md:mt-20 lg:mt-24"
        >
          {/* Line */}
          <div className="relative mx-auto h-px max-w-5xl bg-[#E1E0CC]/15">
            <motion.div
              style={{ width: desktopLineWidth }}
              className="bg-primary absolute top-0 left-0 h-px"
            />
          </div>

          <div className="mt-10 grid grid-cols-4 gap-4 lg:gap-8">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                style={{
                  opacity: desktopOpacities[index],
                  y: desktopYs[index],
                }}
                className="relative flex flex-col items-start"
              >
                {/* Dot — scales in as line reaches it */}
                <motion.div
                  style={{ scale: desktopDotScales[index] }}
                  className="bg-black absolute -top-[26px] left-0 flex h-3 w-3 items-center justify-center rounded-full lg:-top-[28px]"
                >
                  <span className="bg-primary h-1.5 w-1.5 rounded-full lg:h-2 lg:w-2" />
                </motion.div>

                <span className="text-primary text-[10px] tracking-[0.2em] uppercase sm:text-xs">
                  Step {step.number}
                </span>

                <h3
                  className="mt-3 text-xl font-medium leading-tight lg:text-2xl"
                  style={{ color: "#E1E0CC" }}
                >
                  {step.title}
                </h3>

                <p className="text-gray-400 mt-2 text-sm leading-[1.6] lg:mt-3">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline — Mobile (vertical) */}
        <div ref={mobileRef} className="mt-12 md:hidden">
          <div className="relative pl-6">
            {/* Track */}
            <div className="bg-[#E1E0CC]/15 absolute top-2 bottom-2 left-1.5 w-px">
              {/* Fill */}
              <motion.div
                style={{ height: mobileLineHeight }}
                className="bg-primary absolute top-0 left-0 w-px"
              />
            </div>
            {STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: easeCard,
                }}
                className="relative pb-8 last:pb-0"
              >
                <div className="bg-primary absolute top-1.5 -left-[18px] flex h-3 w-3 items-center justify-center rounded-full">
                  <span className="bg-primary h-1.5 w-1.5 rounded-full" />
                </div>

                <span className="text-primary text-[10px] tracking-[0.2em] uppercase">
                  Step {step.number}
                </span>

                <h3
                  className="mt-2 text-lg font-medium leading-tight"
                  style={{ color: "#E1E0CC" }}
                >
                  {step.title}
                </h3>

                <p className="text-gray-400 mt-1.5 text-sm leading-[1.6]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
