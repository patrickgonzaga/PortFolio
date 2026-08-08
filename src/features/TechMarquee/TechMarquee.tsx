import React from 'react';
import { useTechMarquee } from './useTechMarquee';

export const TechMarquee: React.FC = () => {
  const { techItems } = useTechMarquee();
  const displayItems = [...techItems, ...techItems, ...techItems];

  return (
    <section className="relative py-6 bg-slate-100 dark:bg-[#060913] border-y border-slate-200 dark:border-slate-800/80 overflow-hidden w-full select-none z-10 transition-colors duration-300">
      {/* Edge gradient blurs */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-slate-100 dark:from-[#060913] to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-slate-100 dark:from-[#060913] to-transparent z-20 pointer-events-none" />

      <div className="flex overflow-hidden w-full relative">
        <div className="animate-marquee flex gap-4 md:gap-6 py-1">
          {displayItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.name}-${index}`}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 hover:border-sky-500/50 hover:shadow-md transition-all whitespace-nowrap shadow-xs font-sans group cursor-default"
              >
                <span className="p-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon size={18} style={{ color: item.color }} />
                </span>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
