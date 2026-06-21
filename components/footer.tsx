"use client";

import { Instagram, Linkedin, Mail } from "lucide-react";

const FOOTER_NAV = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why", href: "#why" },
  { label: "Contact", href: "#book" },
] as const;

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/framefluencecom/",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/framefluence",
    icon: Linkedin,
  },
  {
    label: "X",
    href: "https://x.com/framefluence",
    icon: XIcon,
  },
] as const;

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M18.244 2H21.5l-7.49 8.563L23 22h-6.86l-5.36-7.01L4.6 22H1.34l8.02-9.166L1 2h7.02l4.84 6.39L18.244 2zm-2.41 18.172h1.93L8.27 3.7H6.21l9.624 16.472z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      aria-label="Footer"
      className="bg-black w-full border-t border-[#E1E0CC]/10 px-4 pt-16 pb-8 sm:px-6 sm:pt-20 md:pt-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Top — Brand + tagline + columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <span className="text-[#E1E0CC] text-2xl font-medium tracking-tight sm:text-3xl">
              Framefluence
            </span>
            <p className="mt-3 font-serif italic text-[#E1E0CC]/70 text-base sm:text-lg">
              We Edit. You Scale.
            </p>
            <a
              href="mailto:hello@framefluence.com"
              className="text-gray-400 hover:text-primary mt-6 inline-flex items-center gap-2 text-sm transition-colors duration-300 sm:text-base"
            >
              <Mail className="h-4 w-4" strokeWidth={1.75} />
              <span>hello@framefluence.com</span>
            </a>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4">
            <span className="text-[10px] tracking-[0.2em] text-[#E1E0CC]/60 uppercase sm:text-xs">
              Navigation
            </span>
            <ul className="mt-4 grid grid-cols-2 gap-y-3 sm:mt-6">
              {FOOTER_NAV.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#E1E0CC] hover:text-primary text-sm transition-colors duration-300 sm:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-3">
            <span className="text-[10px] tracking-[0.2em] text-[#E1E0CC]/60 uppercase sm:text-xs">
              Socials
            </span>
            <ul className="mt-4 flex flex-col gap-3 sm:mt-6">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#E1E0CC] hover:text-primary inline-flex items-center gap-2.5 text-sm transition-colors duration-300 sm:text-base"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{s.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-[#E1E0CC]/10 pt-6 sm:mt-20 sm:flex-row sm:items-center sm:pt-8">
          <span className="text-[10px] tracking-[0.18em] text-gray-500 uppercase sm:text-xs">
            © {year} Framefluence. All rights reserved.
          </span>
          <span className="text-[10px] tracking-[0.18em] text-gray-500 uppercase sm:text-xs">
            Crafted with care.
          </span>
        </div>
      </div>
    </footer>
  );
}