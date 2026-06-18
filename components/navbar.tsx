"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav
      aria-label="Primary"
      className="pointer-events-none absolute top-0 left-1/2 z-30 -translate-x-1/2"
    >
      <ul
        className="pointer-events-auto flex items-center gap-3 rounded-b-2xl bg-black px-4 py-2 sm:gap-6 md:gap-12 md:rounded-b-3xl md:px-8"
      >
        {NAV_LINKS.map((link) => {
          const isHovered = hovered === link.label;
          return (
            <li key={link.label}>
              <a
                href={link.href}
                onMouseEnter={() => setHovered(link.label)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(link.label)}
                onBlur={() => setHovered(null)}
                className="text-[10px] tracking-wide uppercase transition-colors duration-300 ease-out sm:text-xs md:text-sm"
                style={{
                  color: isHovered ? "#E1E0CC" : "rgba(225, 224, 204, 0.8)",
                }}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}