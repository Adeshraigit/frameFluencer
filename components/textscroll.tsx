"use client"

import { TextScroll } from "@/components/ui/text-scroll"

export default function TextScrollDemo() {
  return (
    <TextScroll
      className="top-4 font-display text-center text-4xl font-semibold tracking-tighter  text-black dark:text-white md:text-7xl md:leading-[5rem]"
      text="Frame Fluence"
      default_velocity={5}
    />
  )
}
