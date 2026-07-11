import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { CustomCursor } from './components/ui/CustomCursor/CustomCursor';
import { ThemeToggle } from './components/ui/ThemeToggle/ThemeToggle';
import { Terminal } from './components/ui/Terminal/Terminal';
import { Hero } from './components/sections/Hero/Hero';
//import { ExperienceTimeline } from './components/sections/ExperienceTimeline/ExperienceTimeline';
import { Projects } from './components/sections/Projects/Projects';
import { Certifications } from './components/sections/Certifications/Certifications';
import { ExpertiseGrid } from './components/sections/ExpertiseGrid/ExpertiseGrid';
import { Contact } from './components/sections/Contact/Contact';
import { ThemeProvider } from './contexts/ThemeContext';

const AppContent: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-mono tracking-widest text-gray-300 items-center">
          <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
          {/*<a href="#experience" className="hover:text-white transition-colors">Experiences</a>*/}
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a
            href="/documents/CV_Patrick_Gonzaga.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="hover:text-white transition-colors flex items-center gap-1.5 border border-white/20 hover:border-white px-3 py-1 rounded-full text-xs transition-all duration-300"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white hover:text-gray-300 transition-colors z-50 p-2 focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-bg-color/98 backdrop-blur-lg z-30 flex flex-col justify-center items-center p-8 md:hidden"
          >
            <nav className="flex flex-col gap-8 text-center text-xl font-mono tracking-wider text-text-secondary">
              <a 
                href="#expertise" 
                onClick={closeMobileMenu} 
                className="text-text-primary hover:text-accent-color transition-colors"
              >
                Expertise
              </a>
              <a 
                href="#projects" 
                onClick={closeMobileMenu} 
                className="text-text-primary hover:text-accent-color transition-colors"
              >
                Projects
              </a>
              <a 
                href="#certifications" 
                onClick={closeMobileMenu} 
                className="text-text-primary hover:text-accent-color transition-colors"
              >
                Certifications
              </a>
              <a 
                href="#experience" 
                onClick={closeMobileMenu} 
                className="text-text-primary hover:text-accent-color transition-colors"
              >
                Experiences
              </a>
              <a 
                href="#contact" 
                onClick={closeMobileMenu} 
                className="text-text-primary hover:text-accent-color transition-colors"
              >
                Contact
              </a>
              <a
                href="/docs/CV_Patrick_Gonzaga.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                onClick={closeMobileMenu}
                className="mt-4 px-8 py-3 border border-border-color text-text-primary rounded-full font-medium hover:bg-card-bg transition-colors flex items-center justify-center gap-2 text-base"
              >
                <Download size={18} />
                Download CV
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      
      <main>
        <Hero />
        <ExpertiseGrid />
        <Projects />
        <Certifications />
        {/*<ExperienceTimeline />*/}
        <Contact />
      </main>

      <footer className="py-8 text-center text-sm font-mono text-text-secondary border-t border-border-color">
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
