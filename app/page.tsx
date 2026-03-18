import Hero from '@/components/sections/Hero';
import CredibilityBar from '@/components/sections/CredibilityBar';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Results from '@/components/sections/Results';
import Work from '@/components/sections/Work';
import Pricing from '@/components/sections/Pricing';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <CredibilityBar />
      <About />
      <Services />
      <Process />
      <Results />
      <Work />
      <Pricing />
      <CTA />
    </main>
  );
}
