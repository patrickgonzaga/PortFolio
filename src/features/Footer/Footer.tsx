import React from 'react';
import { ArrowUp, Shield } from 'lucide-react';
import { cvData } from '../../data/cvData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white dark:bg-[#060913] border-t border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 font-mono text-xs select-none transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-6">
        
        {/* Left Branding */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Patrick Gonzaga</span>
          <span className="text-slate-400 dark:text-slate-600">•</span>
          <span className="text-sky-600 dark:text-sky-400">Senior Software Engineer</span>
          <span className="text-slate-400 dark:text-slate-600">•</span>
          <span>© {currentYear}</span>
        </div>

        {/* Center: System Tag */}
        <div className="flex items-center gap-2 text-slate-500">
          <Shield size={14} className="text-sky-600 dark:text-sky-500" />
          <span>C# / .NET • Azure • Enterprise Systems</span>
        </div>

        {/* Right Links & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={cvData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          <button
            onClick={handleScrollToTop}
            className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-sky-500/40 transition-all flex items-center gap-1.5 cursor-pointer group"
            aria-label="Scroll to top"
          >
            <span className="text-[11px] font-bold uppercase tracking-wider hidden sm:inline">Top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
