import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { useNavbar } from './useNavbar';
import { useTheme } from '../../contexts/ThemeContext';

export const Navbar: React.FC = () => {
  const { isOpen, isScrolled, links, toggleMenu, closeMenu } = useNavbar();
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-bg-color/80 backdrop-blur-md border-b border-border-color shadow-sm'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex justify-between items-center">
        {/* Logo / Name */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-text-primary hover:text-accent-color transition-colors duration-300 font-mono"
        >
          PG<span className="text-accent-color">.</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-300 relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-accent-color scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}

          {/* Theme Toggle inside Nav */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-card-bg transition-colors duration-300 text-text-secondary hover:text-text-primary"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Resume CTA */}
          <a
            href="/documents/CV_Patrick_Gonzaga.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold bg-text-primary text-bg-color hover:bg-accent-color hover:text-white transition-all duration-300 border border-transparent shadow-sm hover:shadow-lg"
          >
            <Download size={14} />
            Resume
          </a>
        </nav>

        {/* Mobile Navigation controls */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-card-bg transition-colors duration-300 text-text-secondary hover:text-text-primary"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button
            onClick={toggleMenu}
            className="text-text-primary hover:text-accent-color transition-colors p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-full left-0 w-full bg-bg-color border-b border-border-color shadow-lg overflow-hidden md:hidden"
          >
            <nav className="flex flex-col gap-5 p-6 bg-card-bg/50 backdrop-blur-lg">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors py-2 border-b border-border-color/20"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/documents/CV_Patrick_Gonzaga.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-text-primary text-bg-color hover:bg-accent-color hover:text-white transition-all duration-300 border border-transparent mt-2"
              >
                <Download size={16} />
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
