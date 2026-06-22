"use client";

import MuxPlayer, { type MuxCSSProperties } from "@mux/mux-player-react";
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

  // MuxCSSProperties (from @mux/mux-player-react) extends CSSProperties with
  // an index signature for CSS custom properties like `--media-object-fit`,
  // which is why this type is required instead of React.CSSProperties.
  const playerStyle: MuxCSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    // Explicit z-index keeps the player (and the media controls inside its
    // shadow DOM) above any sibling overlays that might be added later.
    zIndex: 10,
    // Mux Player's CSS variable — the inner <video> fills the card without
    // letterboxing, regardless of the card's aspect ratio.
    "--media-object-fit": "cover",
  };

  return (
    <motion.div
      ref={cardRef}
      // Entry animation is driven by the parent grid's observer so all cards
      // share a single IntersectionObserver. Only `opacity` + `y` (translate)
      // — fully composited, no layout work.
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
          // iOS-safe autoplay combo: autoPlay="muted" + muted + playsInline.
          // `playsInline` is required on iOS Safari to keep playback in the
          // page (otherwise it forces fullscreen on autoplay).
          autoPlay="muted"
          loop
          muted
          playsInline
          // Metadata-only preload — Mux won't pull segments until playback
          // actually starts. Major bandwidth win on off-screen players.
          preload="metadata"
          // `controls` is intentionally NOT set to false — MuxPlayer's
          // default is `controls={true}`, which is what shows the play,
          // pause, seek, volume, and fullscreen buttons.
          //
          // The previous version set `controls={false}`, which is why no
          // controls were visible. Removing that prop restores them.
          //
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
          style={playerStyle}
          // GPU-friendly hover zoom: `transform` is composited, so the parent
          // doesn't reflow. Kept subtle (1.04) to avoid jank on mobile.
          //
          // No `pointer-events-none` here — removing it ensures the player
          // (and its built-in controls) receive hover and click events.
          className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      )}
    </motion.div>
  );
}

// `memo` so prop-stable cards skip re-render when the parent grid updates
// (e.g., scroll-triggered observers firing on siblings).
export default memo(PortfolioCardImpl);
