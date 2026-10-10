import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X, Sun, Moon } from 'lucide-react';
import { useNavbar } from './useNavbar';
import { useTheme } from '../../contexts/ThemeContext';
import { cvData } from '../../data/cvData';
import './navbar.css';

export const Navbar = () => {
  const { isOpen, isScrolled, links, toggleMenu, closeMenu } = useNavbar();
  const { theme, toggleTheme } = useTheme();
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
        menuButton.current?.focus();
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) closeMenu();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [isOpen, closeMenu]);

  return (
    <header ref={header} className={`portfolio-nav ${isScrolled || isOpen ? 'nav-solid' : ''}`}>
      <div className="nav-shell">
        <a href="#home" className="nav-brand" aria-label="Patrick Gonzaga home" onClick={closeMenu}>
          <span className="nav-monogram">p<span>g.</span></span>
          <span className="nav-brand-name">Patrick Gonzaga<span>Software engineer</span></span>
        </a>
        <nav className="nav-desktop" aria-label="Main navigation">
          {links.filter(link => link.href !== '#home').map(link => (
            <a key={link.href} href={link.href}>{link.label === 'Projects' ? 'Work' : link.label}</a>
          ))}
        </nav>
        <div className="nav-controls">
          <button type="button" onClick={toggleTheme} className="nav-icon" aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}>
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a href={cvData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="nav-connect">Let’s connect <ArrowUpRight size={15} /></a>
          <button ref={menuButton} type="button" onClick={toggleMenu} className="nav-icon nav-menu-toggle" aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}>
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav id="mobile-navigation" aria-label="Mobile navigation" className="nav-mobile" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}>
            <div className="nav-mobile-inner">
              {links.map((link, index) => (
                <a key={link.href} href={link.href} onClick={closeMenu}><span>0{index + 1}</span>{link.label}<ArrowUpRight size={17} /></a>
              ))}
              <a href={cvData.personal.resumePdf} download onClick={closeMenu} className="nav-mobile-resume">Download resume <ArrowUpRight size={17} /></a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
