import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border-color bg-card-bg/10 relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-col sm:flex-row justify-between items-center gap-6">
        
        {/* Left Branding */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-text-secondary">
          <span>PATRICK GONZAGA</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-color"></span>
          <span>© {currentYear}</span>
        </div>

        {/* Center: Heart credits */}
        <div className="text-xs text-text-secondary font-light flex items-center gap-1.5 font-mono">
          Crafted with React, Tailwind & Framer Motion
          <Heart size={12} className="text-accent-color fill-accent-color animate-pulse" />
        </div>

        {/* Right Scroll to Top */}
        <button
          onClick={handleScrollToTop}
          className="p-3.5 rounded-full border border-border-color bg-card-bg text-text-secondary hover:text-text-primary hover:border-accent-color hover:shadow-lg hover:shadow-glow-color transition-all duration-300 flex items-center justify-center cursor-pointer group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
};
export default Footer;
