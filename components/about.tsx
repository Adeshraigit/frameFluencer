"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import WordsPullUpMultiStyle from "@/components/words-pull-up-multi-style";
import AnimatedLetter from "@/components/animated-letter";

const PARAGRAPH =
  "Framefluence handles your video editing end to end — short-form, long-form, repurposing, motion graphics, and thumbnails — so you can publish more often, sound more polished, and focus on the work that actually grows your brand.";

export default function About() {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = Array.from(PARAGRAPH);

  return (
    <section
      id="solution"
      aria-label="Meet Framefluence"
      className="bg-black w-full px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:py-32"
    >
      <div className="bg-[#101010] mx-auto max-w-6xl rounded-3xl px-6 py-14 text-center sm:px-10 sm:py-16 md:px-16 md:py-20 lg:px-20 lg:py-24">
        <span className="text-primary text-[10px] tracking-[0.2em] uppercase sm:text-xs">
          The solution
        </span>

        <div className="mt-6 sm:mt-8">
          <h2 className="text-[#E1E0CC] mx-auto max-w-3xl text-3xl leading-[0.95] font-medium sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl">
            <WordsPullUpMultiStyle
              segments={[
                { text: "A reliable editing team," },
                {
                  text: "on your side.",
                  className: "italic font-serif",
                },
                {
                  text: "You send the footage. We send back content that's ready to post.",
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
