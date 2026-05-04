import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 lg:px-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[var(--text-primary)]"></span>
            <span className="text-sm tracking-widest uppercase text-[var(--text-secondary)] font-mono">
              .NET · Azure · APIs
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.1]">
            Patrick <br />
            <span className="text-[var(--text-secondary)]">Gonzaga.</span>
          </h1>

          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-lg leading-relaxed font-light mt-4">
            Software engineer with 15+ years of experience building systems that support real business operations — spanning backend development, system integrations, and enterprise platforms. Currently focused on .NET and Azure, delivering APIs and distributed systems that are stable and maintainable at scale. Known for stepping into unfamiliar technology and delivering — from learning ABAP to bridge SAP-to-MES integrations to picking up Retool to build production admin tooling.          </p>

          <div className="mt-8 flex gap-6 items-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-[var(--text-primary)] text-[var(--bg-color)] rounded-full font-medium hover:scale-105 transition-transform"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="px-8 py-4 border border-[var(--border-color)] text-[var(--text-primary)] rounded-full font-medium hover:bg-[var(--card-bg)] transition-colors"
            >
              View Work
            </a>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-[300px] h-[450px] md:w-[400px] md:h-[600px] rounded-2xl overflow-hidden glass-panel group">
            <img
              src="/pat.jpg"
              alt="Patrick Gonzaga"
              className="w-full h-full object-cover object-top filter opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] via-transparent to-transparent opacity-60"></div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-secondary)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
        <motion.div
          className="w-[1px] h-12 bg-[var(--text-secondary)] origin-top"
          animate={{ scaleY: [0, 1, 0], translateY: [0, 0, 20] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
};
