import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/features";
import Portfolio from "@/components/portfolio";
import WhyFramefluence from "@/components/why-framefluence";
import Process from "@/components/process";
import Testimonials from "@/components/testimonials";
import Results from "@/components/results";
import Faq from "@/components/faq";
import FinalCta from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen w-full">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyFramefluence />
      <Process />
      <Testimonials />
      <Results />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}