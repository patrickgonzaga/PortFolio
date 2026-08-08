import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, MessageSquare } from 'lucide-react';
import { cvData } from '../../data/cvData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-20 relative bg-slate-50 dark:bg-[#080c14] text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sky-600 dark:text-sky-400 font-mono text-xs uppercase tracking-widest mb-4">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
            Let's build something that works<span className="text-sky-600 dark:text-sky-400">.</span>
          </h2>
          
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-xl mx-auto text-base leading-relaxed font-normal">
            Currently open for Senior .NET Engineer, Backend Architect, and Azure engineering opportunities. Feel free to connect directly via email or LinkedIn.
          </p>
        </motion.div>

        {/* Contact Action Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {/* Email */}
          <a
            href={`mailto:${cvData.personal.email}`}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 transition-all flex flex-col items-center group shadow-sm hover:shadow-md dark:shadow-xl font-sans"
          >
            <div className="p-3.5 rounded-xl bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-sky-600 dark:text-sky-400 mb-3 group-hover:scale-110 transition-transform">
              <Mail size={22} />
            </div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
              Direct Email
            </span>
            <span className="text-sm font-semibold text-slate-900 dark:text-white font-mono group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
              {cvData.personal.email}
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href={cvData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 transition-all flex flex-col items-center group shadow-sm hover:shadow-md dark:shadow-xl font-sans"
          >
            <div className="p-3.5 rounded-xl bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-sky-600 dark:text-sky-400 mb-3 group-hover:scale-110 transition-transform">
              <svg className="w-[22px] h-[22px] fill-currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
              LinkedIn Profile
            </span>
            <span className="text-sm font-semibold text-slate-900 dark:text-white font-mono group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
              in/patgonzaga
            </span>
          </a>

          {/* Download Resume */}
          <a
            href={cvData.personal.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 transition-all flex flex-col items-center group shadow-sm hover:shadow-md dark:shadow-xl font-sans"
          >
            <div className="p-3.5 rounded-xl bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 text-sky-600 dark:text-sky-400 mb-3 group-hover:scale-110 transition-transform">
              <Download size={22} />
            </div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
              Curriculum Vitae
            </span>
            <span className="text-sm font-semibold text-slate-900 dark:text-white font-mono group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
              Download PDF Resume
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
