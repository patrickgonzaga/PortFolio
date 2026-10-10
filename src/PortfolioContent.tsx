import { useEffect } from 'react';
import { TechMarquee } from './features/TechMarquee';
import { About } from './features/About';
import { Projects } from './features/Projects';
import { Skills } from './features/Skills';
import { AIAutomation } from './features/AIAutomation';
import { Experience } from './features/Experience';
import { Certifications } from './features/Certifications';
import { Contact } from './features/Contact';

export default function PortfolioContent() {
  useEffect(() => {
    // Honor direct links and navigation used before this chunk finished loading.
    const frame = requestAnimationFrame(() => {
      const id = window.location.hash.slice(1);
      if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
    });
    return () => cancelAnimationFrame(frame);
  }, []);
  return (
    <>
      <TechMarquee />
      <About />
      <Projects />
      <Skills />
      <AIAutomation />
      <Experience />
      <Certifications />
      <Contact />
    </>
  );
}
