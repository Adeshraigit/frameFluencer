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
  title: "Framefluence — We Edit. You Scale.",
  description:
    "Framefluence is a video editing studio for creators, founders, coaches, and brands. Short-form, long-form, repurposing, motion graphics, and thumbnails.",
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