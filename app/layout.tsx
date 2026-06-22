import type { Metadata, Viewport } from "next";
import { Almarai, Instrument_Serif } from "next/font/google";
import Script from "next/script";
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

// Set NEXT_PUBLIC_SITE_URL in your env to override this default. Used as the
// canonical origin for Open Graph, Twitter, sitemap, and JSON-LD.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://framefluence.com";

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Framefluence — Video Editing Studio for Creators & Brands",
    template: "%s — Framefluence",
  },
  description:
    "Framefluence is a video editing studio for creators, founders, coaches, and brands. Short-form, long-form, repurposing, motion graphics, and thumbnails that ship fast and stay on-brand.",
  applicationName: "Framefluence",
  keywords: [
    "video editing",
    "video editing studio",
    "short-form video editing",
    "long-form video editing",
    "content repurposing",
    "motion graphics",
    "thumbnail design",
    "video editor for creators",
    "video editor for YouTube",
    "video editor for TikTok",
    "video editor for brands",
    "video editing agency",
  ],
  authors: [{ name: "Framefluence", url: SITE_URL }],
  creator: "Framefluence",
  publisher: "Framefluence",
  category: "Video Production",
  classification: "Business",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Framefluence",
    title: "Framefluence — Video Editing Studio for Creators & Brands",
    description:
      "Short-form, long-form, repurposing, motion graphics, and thumbnails. Edited by a studio that cares about quality and consistency.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Framefluence — We edit. You scale.",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Framefluence — Video Editing Studio for Creators & Brands",
    description:
      "Short-form, long-form, repurposing, motion graphics, and thumbnails.",
    images: ["/opengraph-image"],
    creator: "@framefluence",
    site: "@framefluence",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    // Google Search Console verification tag — renders as
    // <meta name="google-site-verification" content="sNM_R77EBR9yyuV_WVPIybYnyhXsxhIVZBF_nhX6gHM" />
    google: "sNM_R77EBR9yyuV_WVPIybYnyhXsxhIVZBF_nhX6gHM",
  },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${almarai.variable} ${instrumentSerif.variable}`}
    >
      <body className="antialiased bg-black text-[#E1E0CC] font-sans">
        {children}
        {/* Microsoft Clarity — session replay + heatmaps. Loads after the
            page is interactive so it never blocks first paint. */}
        <Script
          id="clarity-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xb2tx4m1qc");`,
          }}
        />
      </body>
    </html>
  );
}
