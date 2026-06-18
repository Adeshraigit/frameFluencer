"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import WordsPullUpMultiStyle from "@/components/words-pull-up-multi-style";
import AnimatedLetter from "@/components/animated-letter";

const PARAGRAPH =
  "Most agencies focus on making content look good. We focus on making content perform. Framefluence combines storytelling, pacing, motion design, and platform psychology to create videos people actually watch.";

export default function About() {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = Array.from(PARAGRAPH);

  return (
    <section
      id="about"
      aria-label="About Framefluence"
      className="bg-black w-full px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:py-32"
    >
      <div className="bg-[#101010] mx-auto max-w-6xl rounded-3xl px-6 py-14 text-center sm:px-10 sm:py-16 md:px-16 md:py-20 lg:px-20 lg:py-24">
        <span className="text-primary text-[10px] tracking-[0.2em] uppercase sm:text-xs">
          The studio
        </span>

        <div className="mt-6 sm:mt-8">
          <h2 className="text-[#E1E0CC] mx-auto max-w-3xl text-3xl leading-[0.95] font-medium sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl">
            <WordsPullUpMultiStyle
              segments={[
                { text: "We don't just edit videos," },
                {
                  text: "we build attention.",
                  className: "italic font-serif",
                },
                {
                  text: "Every frame is crafted to maximize retention, engagement, and brand perception.",
                },
              ]}
            />
          </h2>
        </div>

        <p
          ref={paragraphRef}
          className="mt-10 mx-auto max-w-3xl text-[#DEDBC8] text-xs leading-[1.7] sm:mt-12 sm:text-sm sm:leading-[1.7] md:mt-14 md:text-base md:leading-[1.75]"
        >
          {chars.map((char, i) => (
            <AnimatedLetter
              key={i}
              char={char}
              index={i}
              total={chars.length}
              progress={scrollYProgress}
            />
          ))}
        </p>
      </div>
    </section>
  );
}