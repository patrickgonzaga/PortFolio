import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { useHero } from './useHero';
import { Hero3D } from './Hero3D';

export const Hero: React.FC = () => {
  const { personal, firstName, lastName, roleKeyword } = useHero();

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden px-6 md:px-12 lg:px-20 py-24"
    >
      {/* 3D background canvas */}
      <Hero3D />

      {/* Decorative Orbs to enrich the 3D visual depth */}
      <div className="bg-glow-orb w-[300px] h-[300px] md:w-[600px] md:h-[600px] -top-20 -left-20 opacity-30 dark:opacity-20" />
      <div className="bg-glow-orb w-[250px] h-[250px] md:w-[500px] md:h-[500px] bottom-10 right-10 opacity-20" style={{ animation: 'pulse 12s infinite alternate' }} />

      <div className="max-w-5xl w-full text-center z-10 flex flex-col items-center">
        {/* Modern micro-badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-color bg-card-bg backdrop-blur-md mb-8 shadow-sm"
        >
          <Sparkles size={14} className="text-accent-color animate-pulse" />
          <span className="text-xs font-mono font-semibold tracking-wider text-text-secondary uppercase">
            Available for new opportunities
          </span>
        </motion.div>

        {/* Dynamic Name and Role Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-text-primary leading-[1.05] select-none"
        >
          Hi, I'm <span className="text-text-primary">{firstName}</span>
          <br />
          <span className="bg-gradient-to-r from-accent-color to-sky-400 bg-clip-text text-transparent">
            {lastName}
          </span>
        </motion.h1>

        {/* Animated Subtitle / Role Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-lg sm:text-2xl font-semibold tracking-tight text-text-secondary mt-6 max-w-2xl font-mono uppercase"
        >
          Senior Engineer | <span className="text-accent-color">{roleKeyword}</span>
        </motion.h2>

        {/* Tags / Personal Overview paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-sm sm:text-lg text-text-secondary max-w-2xl mt-4 leading-relaxed font-light px-4"
        >
          {personal.overview}
        </motion.p>

        {/* Action Call-to-Actions (CTAs) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md px-6"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold bg-text-primary text-bg-color hover:bg-accent-color hover:text-white transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold border border-border-color text-text-primary bg-card-bg hover:bg-border-color transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <MessageSquare size={16} />
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Cinematic scroll down hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary opacity-60 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-widest font-mono font-bold">Scroll Down</span>
        <div className="w-[1px] h-10 bg-border-color relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-accent-color"
            animate={{
              y: ['-100%', '200%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};
