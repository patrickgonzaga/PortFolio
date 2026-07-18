import React from 'react';
import { CustomCursor } from './components/ui/CustomCursor/CustomCursor';
import { Terminal } from './components/ui/Terminal/Terminal';
import { Navbar } from './features/Navbar';
import { Hero } from './features/Hero';
import { TechMarquee } from './features/TechMarquee';
import { About } from './features/About';
import { Projects } from './features/Projects';
import { Skills } from './features/Skills';
import { Contact } from './features/Contact';
import { Footer } from './features/Footer';
import { ThemeProvider } from './contexts/ThemeContext';

const AppContent: React.FC = () => {
  return (
    <>
      {/* Noise background texture overlay */}
      <div className="noise-overlay" />
      
      {/* Custom desktop cursor */}
      <CustomCursor />
      
      {/* Sticky navigation header */}
      <Navbar />
      
      {/* Interactive terminal tool */}
      <Terminal />
      
      <main className="relative z-10">
        {/* 1. Hero with 3D canvas and dynamic typography */}
        <Hero />
        
        {/* 2. Auto-scrolling tech stack logos */}
        <TechMarquee />
        
        {/* 3. Splitted biography and stat counter */}
        <About />
        
        {/* 4. Upgrade projects with tilt spotlight hover cards */}
        <Projects />
        
        {/* 5. Grouped Skills section with spring tabs */}
        <Skills/>
        
        {/* 6. Form/Mail contact banner and social links */}
        <Contact />
      </main>

      {/* 7. Footer branding elements */}
      <Footer />
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
