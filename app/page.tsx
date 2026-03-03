import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { ResearchInnovation } from '@/components/sections/ResearchInnovation';
import { Stats } from '@/components/sections/Stats';
import { Careers } from '@/components/sections/Careers';
import { Contact } from '@/components/sections/Contact';
import { Testimonials } from '@/components/sections/Testimonials';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ResearchInnovation />
      <Stats />
      <Careers />
      <Contact />
      <Testimonials />
      <Footer />
    </main>
  );
}
