"use client";

import MuxPlayer from "@mux/mux-player-react";
import { motion, useInView } from "framer-motion";
import { memo, useRef } from "react";

export interface PortfolioSample {
  title: string;
  playbackId: string;
  span?: "wide" | "half";
}

interface PortfolioCardProps {
  sample: PortfolioSample;
  index: number;
  /** Whether the parent grid has entered the viewport (drives entry stagger). */
  gridInView: boolean;
}

const easeCard = [0.22, 1, 0.36, 1] as const;

function PortfolioCardImpl({ sample, index, gridInView }: PortfolioCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Defer mounting the MuxPlayer until the card is within ~200px of the
  // viewport. Off-screen cards don't pay the network/CPU cost of a player
  // they may never show. `once: true` so we never re-mount on scroll back.
  const shouldMountPlayer = useInView(cardRef, {
    once: true,
    margin: "200px",
  });

  const colSpan =
    sample.span === "wide"
      ? "md:col-span-6 lg:col-span-6"
      : "md:col-span-3 lg:col-span-3";

  return (
    <motion.div
      ref={cardRef}
      // Entry animation is driven by the parent grid's observer so all cards
      // share a single IntersectionObserver instead of one per card.
      // Only `opacity` + `y` (translate) — fully composited, no layout work.
      initial={{ opacity: 0, y: 24 }}
      animate={gridInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, delay: index * 0.12, ease: easeCard }}
      className={`group bg-[#212121] relative overflow-hidden rounded-2xl ${colSpan} aspect-video`}
    >
      {/* Skeleton shown until the player mounts. Prevents layout shift and
          gives an immediate visual response on scroll-in. */}
      {!shouldMountPlayer && (
        <div
          aria-hidden
          className="absolute inset-0 animate-pulse bg-[#1a1a1a]"
        />
      )}

      {shouldMountPlayer && (
        <MuxPlayer
          playbackId={sample.playbackId}
          // iOS-safe autoplay: muted + autoPlay="muted" + playsInline.
          autoPlay="muted"
          loop
          muted
          playsInline
          // Metadata-only preload — Mux won't pull segments until playback
          // actually starts. Major bandwidth win on off-screen players.
          preload="metadata"
          // Built-in controls intentionally hidden — the card is a passive
          // preview, not a player UI.
          controls={false}
          // Skip Mux's analytics cookies — fewer third-party requests on
          // first paint and fewer client-side computations.
          disableCookies
          // Mux's thumbnail service serves optimized WebP. Posting it gives
          // the browser a fast first paint before the stream connects (LCP).
          poster={`https://image.mux.com/${sample.playbackId}/thumbnail.webp?time=1&width=1920`}
          metadata={{
            video_id: sample.playbackId,
            video_title: sample.title,
          }}
          // `--media-object-fit` is Mux Player's CSS var for the inner
          // <video> element; `cover` ensures the stream fills cards without
          // letterboxing. The cast is required because TS doesn't know about
          // custom CSS properties by default.
          style={
            {
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              "--media-object-fit": "cover",
            } as React.CSSProperties
          }
          // GPU-friendly hover zoom: `transform` is composited, so the parent
          // doesn't reflow. Kept subtle (1.04) to avoid jank on mobile.
          className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      )}

      {/* Bottom gradient retained for visual depth; no overlay text rides on
          it now. pointer-events-none so any future tap-to-play still reaches
          the player. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"
      />
    </motion.div>
  );
}

// `memo` so prop-stable cards skip re-render when the parent grid updates
// (e.g., scroll-triggered observers firing on siblings).
export default memo(PortfolioCardImpl);
