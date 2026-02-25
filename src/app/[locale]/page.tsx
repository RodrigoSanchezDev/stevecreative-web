import { Navbar, Footer } from "@/components/layout";
import {
  Hero,
  Services,
  About,
  Portfolio,
  Testimonials,
  Process,
  CTA,
  Contact,
} from "@/components/sections";

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Process />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
