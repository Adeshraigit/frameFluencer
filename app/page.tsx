import Hero from "@/components/hero";
import Features from "@/components/features";
import TextScrollDemo from "@/components/textscroll";
import Header from "@/components/navabar";
import VideoGrid from "@/components/video-grid";
import CTA from "@/components/cta";
import { FollowerPointer } from "@/components/ui/following-pointer";
import Contact from "@/components/contact";

export default function Home() {
  return (
     <FollowerPointer    >
      <Header/>
        <main>
          <Hero />
          <TextScrollDemo />
          <VideoGrid/>
          <Features />
          <Contact/>
          <CTA/>
        </main>
    </FollowerPointer>
  );
}
