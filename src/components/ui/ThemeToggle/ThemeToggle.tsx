import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full glass-panel flex items-center justify-center hover:bg-[var(--border-color)] transition-colors cursor-none"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-[var(--text-primary)]" />
      ) : (
        <Sun size={20} className="text-[var(--text-primary)]" />
      )}
    </motion.button>
  );
};
