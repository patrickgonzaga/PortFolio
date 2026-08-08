import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ShieldCheck, Terminal as TerminalIcon } from 'lucide-react';
import { useHero } from './useHero';

export const Hero: React.FC = () => {
  const { personal } = useHero();

  return (
    <section
      id="home"
      className="relative min-h-[92vh] w-full flex flex-col justify-center items-center overflow-hidden px-6 md:px-12 lg:px-20 pt-28 pb-16 bg-slate-50 dark:bg-[#080c14] text-slate-900 dark:text-slate-100 transition-colors duration-300"
    >
      {/* Subtle Engineering Grid Background Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0284c7 1px, transparent 1px), linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)`,
          backgroundSize: '40px 40px, 80px 80px, 80px 80px',
          backgroundPosition: '0 0, 0 0, 0 0'
        }}
      />

      {/* Deep Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-sky-200/40 dark:bg-sky-900/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-blue-200/30 dark:bg-blue-950/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl w-full text-center z-10 flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-300/80 dark:border-sky-500/30 bg-sky-50/80 dark:bg-sky-950/30 backdrop-blur-md mb-6 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono font-medium tracking-wider text-sky-800 dark:text-sky-300 uppercase">
            Available for New Opportunities
          </span>
        </motion.div>

        {/* Executive Name & Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white font-sans"
        >
          {personal.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-xl sm:text-2xl font-semibold text-sky-600 dark:text-sky-400 mt-2 font-mono tracking-tight"
        >
          {personal.title}
        </motion.p>

        {/* Tech Stack Pills Line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          className="flex flex-wrap justify-center items-center gap-2 mt-4 text-xs sm:text-sm font-mono text-slate-700 dark:text-slate-300"
        >
          {personal.techBadges.map((tech, index) => (
            <React.Fragment key={tech}>
              <span className="px-3 py-1 rounded-md bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 shadow-sm">
                {tech}
              </span>
              {index < personal.techBadges.length - 1 && (
                <span className="text-slate-400 dark:text-slate-600 font-bold">•</span>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Primary Brand Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
          className="mt-8 p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md shadow-xl dark:shadow-2xl max-w-3xl w-full text-left relative group hover:border-sky-500/40 transition-all"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 shrink-0 hidden sm:flex">
              <TerminalIcon size={24} />
            </div>
            <div>
              <blockquote className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white leading-snug font-sans">
                "{personal.primaryStatement}"
              </blockquote>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                {personal.overview}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
          className="mt-9 flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-mono text-sm font-semibold uppercase tracking-wider bg-sky-600 hover:bg-sky-500 text-white transition-all shadow-md hover:shadow-sky-500/25 flex items-center justify-center gap-2.5 group"
          >
            View My Work
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={personal.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-mono text-sm font-semibold uppercase tracking-wider bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 transition-all flex items-center justify-center gap-2.5 shadow-sm"
          >
            <Download size={16} />
            Download Resume
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-all shrink-0 shadow-sm"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <svg className="w-[18px] h-[18px] fill-currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </motion.div>

        {/* Credibility Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400"
        >
          <ShieldCheck size={14} className="text-sky-600 dark:text-sky-400" />
          <span>Production-Proven Systems Engineer • 20+ Yrs Enterprise IT • 5+ Yrs C#/.NET</span>
        </motion.div>
      </div>
    </section>
  );
};
