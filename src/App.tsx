import React from 'react';
import { CustomCursor } from './components/ui/CustomCursor/CustomCursor';
import { ThemeToggle } from './components/ui/ThemeToggle/ThemeToggle';
import { Terminal } from './components/ui/Terminal/Terminal';
import { Hero } from './components/sections/Hero/Hero';
import { ExperienceTimeline } from './components/sections/ExperienceTimeline/ExperienceTimeline';
import { Projects } from './components/sections/Projects/Projects';
import { Certifications } from './components/sections/Certifications/Certifications';
import { ExpertiseGrid } from './components/sections/ExpertiseGrid/ExpertiseGrid';
import { Contact } from './components/sections/Contact/Contact';
import { ThemeProvider } from './contexts/ThemeContext';

const AppContent: React.FC = () => {
  return (
    <>
      <div className="noise-overlay" />
      <CustomCursor />
      <ThemeToggle />
      <Terminal />
      
      {/* 
        Removing the old FloatingNav because a minimalist Nordic design 
        usually prefers clean scroll or very subtle headers. 
      */}
      <header className="absolute top-0 left-0 right-0 p-6 lg:px-20 z-40 flex justify-between items-center mix-blend-difference">
        <div className="font-mono text-sm tracking-widest uppercase font-bold text-white">PG</div>
        <nav className="hidden md:flex gap-8 text-sm font-mono tracking-widest text-gray-300">
          <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
          <a href="#experience" className="hover:text-white transition-colors">Experiences</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
      </header>
      
      <main>
        <Hero />
        <ExpertiseGrid />
        <ExperienceTimeline />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <footer className="py-8 text-center text-sm font-mono text-[var(--text-secondary)] border-t border-[var(--border-color)]">
        <p>© {new Date().getFullYear()} Patrick Gonzaga. Crafted with React, Tailwind & Framer Motion.</p>
      </footer>
    </>
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
