import type { Metadata } from "next";
import { Almarai, Instrument_Serif } from "next/font/google";
import "./globals.css";

const almarai = Almarai({
  weight: ["300", "400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-almarai",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frame Fluence — Cinematic Video Editing Studio",
  description:
    "Frame Fluence is a video editing agency that transforms raw footage into cinematic stories for creators, brands, and filmmakers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${almarai.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased bg-black text-[#E1E0CC] font-sans">
        {children}
      </body>
    </html>
  );
}