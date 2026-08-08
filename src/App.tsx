import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navbar } from './features/Navbar';
import { Hero } from './features/Hero';
import { TechMarquee } from './features/TechMarquee';
import { About } from './features/About';
import { Experience } from './features/Experience';
import { Projects } from './features/Projects';
import { Skills } from './features/Skills';
import { AIAutomation } from './features/AIAutomation';
import { Contact } from './features/Contact';
import { Footer } from './features/Footer';

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080c14] text-slate-900 dark:text-slate-100 font-sans selection:bg-sky-500 selection:text-white transition-colors duration-300">
      {/* Sticky Navigation Header */}
      <Navbar />

      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Scrolling Tech Stack */}
        <TechMarquee />

        {/* 3. About & Engineering Evolution */}
        <About />

        {/* 4. Software Engineering Case Studies */}
        <Projects />

        {/* 5. Technical Expertise & Stack */}
        <Skills />

        {/* 6. Secondary: AI & Automation */}
        <AIAutomation />

        {/* 7. Professional Experience Timeline */}
        <Experience />

        {/* 8. Contact Banner */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
