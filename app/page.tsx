import type { Metadata } from "next";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import About from "@/components/about";
import Services from "@/components/features";
import Portfolio from "@/components/portfolio";
import WhyFramefluence from "@/components/why-framefluence";
import Process from "@/components/process";
import Faq from "@/components/faq";
import FinalCta from "@/components/final-cta";
import Footer from "@/components/footer";

// Per-page metadata inherits from the title template defined in layout.tsx
// (e.g. "Home — Framefluence"). Keeping it here means each route owns its
// own title/description and OG fallback when we add new pages later.
export const metadata: Metadata = {
  title: "We Edit. You Scale.",
  description:
    "Video editing studio for creators, founders, and brands — short-form, long-form, repurposing, motion graphics, and thumbnails.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Framefluence — We Edit. You Scale.",
    description:
      "Video editing studio for creators, founders, and brands — short-form, long-form, repurposing, motion graphics, and thumbnails.",
    url: "/",
  },
};

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://framefluence.com";

// --- Structured data ----------------------------------------------------
// All schema.org objects are bundled into a single <script> via @graph.
// Google supports this pattern; one script is cheaper to parse than many.

const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Framefluence",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Video editing studio for creators, founders, coaches, and brands.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: `${SITE_URL}/#book`,
    availableLanguage: ["English"],
  },
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Framefluence",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-US",
};

const webPage = {
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: "Framefluence — We Edit. You Scale.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-US",
};

const services = [
  {
    "@type": "Service",
    name: "Short-Form Video Editing",
    serviceType: "Video editing",
    description:
      "Vertical video for TikTok, Reels, and YouTube Shorts. Hooks, captions, pacing, and cuts tuned for watch time.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Worldwide",
  },
  {
    "@type": "Service",
    name: "Content Repurposing",
    serviceType: "Video editing",
    description:
      "Turn one long video into a full week of short-form content for multiple platforms without re-shooting.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Worldwide",
  },
  {
    "@type": "Service",
    name: "Motion Graphics",
    serviceType: "Motion design",
    description:
      "Animated titles, lower thirds, transitions, and visual effects that make content look professional and intentional.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Worldwide",
  },
  {
    "@type": "Service",
    name: "Thumbnail Design",
    serviceType: "Graphic design",
    description:
      "Scroll-stopping thumbnails designed for clicks. Clear hierarchy, on-brand visuals, and tested layouts.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Worldwide",
  },
];

const portfolioVideos = [
  {
    "@type": "VideoObject",
    name: "Vertical cut with captions and hooks",
    description:
      "Short-form video edit example from Framefluence — hooks, captions, pacing, and cuts tuned for watch time.",
    thumbnailUrl: `https://image.mux.com/3Nmf5S9azg301oGtrdRJ9iPuQqIic27ahSS31mGnlomE/thumbnail.webp?time=1&width=1920`,
    contentUrl:
      "https://stream.mux.com/3Nmf5S9azg301oGtrdRJ9iPuQqIic27ahSS31mGnlomE/master.m3u8",
    embedUrl:
      "https://player.mux.com/3Nmf5S9azg301oGtrdRJ9iPuQqIic27ahSS31mGnlomE",
    uploadDate: new Date().toISOString(),
    isPartOf: { "@id": `${SITE_URL}/#webpage` },
  },
  {
    "@type": "VideoObject",
    name: "Paced, structured, and ready to publish",
    description:
      "Long-form video edit example from Framefluence — paced, structured, and ready to publish.",
    thumbnailUrl: `https://image.mux.com/1Q8RnFu5WIgo8htJJOg7Zl01v02NIZDrezlGzcbOXZ7Tg/thumbnail.webp?time=1&width=1920`,
    contentUrl:
      "https://stream.mux.com/1Q8RnFu5WIgo8htJJOg7Zl01v02NIZDrezlGzcbOXZ7Tg/master.m3u8",
    embedUrl:
      "https://player.mux.com/1Q8RnFu5WIgo8htJJOg7Zl01v02NIZDrezlGzcbOXZ7Tg",
    uploadDate: new Date().toISOString(),
    isPartOf: { "@id": `${SITE_URL}/#webpage` },
  },
  {
    "@type": "VideoObject",
    name: "Long-form clip remixed for short-form",
    description:
      "Repurposed cut example from Framefluence — long-form clip remixed for short-form platforms.",
    thumbnailUrl: `https://image.mux.com/EsxSO5blroSv8urnmAQ302MxEm1QMcH902rWWmgr8UN02g/thumbnail.webp?time=1&width=1920`,
    contentUrl:
      "https://stream.mux.com/EsxSO5blroSv8urnmAQ302MxEm1QMcH902rWWmgr8UN02g/master.m3u8",
    embedUrl:
      "https://player.mux.com/EsxSO5blroSv8urnmAQ302MxEm1QMcH902rWWmgr8UN02g",
    uploadDate: new Date().toISOString(),
    isPartOf: { "@id": `${SITE_URL}/#webpage` },
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    organization,
    website,
    webPage,
    ...services,
    ...portfolioVideos,
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-black min-h-screen w-full">
        <Hero />
        <Problem />
        <About />
        <Services />
        <Portfolio />
        <WhyFramefluence />
        <Process />
        <Faq />
        <FinalCta />
        <Footer />
      </main>
    </>
  );
}
