import Hero from "@/components/hero";
import Features from "@/components/features";
import Header from "@/components/navabar";
import VideoGrid from "@/components/video-grid";
import CTA from "@/components/cta";
import Contact from "@/components/contact";

export default function Home() {
  return (
     <>
      <Header/>
        <main>
          <Hero />
          <VideoGrid/>
          <Features />
          <Contact/>
          <CTA/>
        </main>
    </>
  );
}
