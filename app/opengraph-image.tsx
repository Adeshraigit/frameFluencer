import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Framefluence — Video editing that ships.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "#000000",
          color: "#E1E0CC",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#DEDBC8",
            letterSpacing: 6,
            marginBottom: 32,
            textTransform: "uppercase",
          }}
        >
          Framefluence
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1.05,
            maxWidth: 1000,
            letterSpacing: -2,
          }}
        >
          We edit. You scale.
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#9ca3af",
            marginTop: 40,
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Short-form, long-form, repurposing, motion graphics, thumbnails.
        </div>
      </div>
    ),
    { ...size },
  );
}
