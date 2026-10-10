import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useTechMarquee } from './useTechMarquee';
import { useLightweightMode } from '../../hooks/useLightweightMode';

export const TechMarquee = () => {
  const { techItems } = useTechMarquee();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);
  const lightweight = useLightweightMode();

  return (
    <section ref={ref} aria-label="Technology stack" className="relative py-5 bg-slate-100 dark:bg-[#060913] border-y border-slate-200 dark:border-slate-800/80 overflow-hidden w-full select-none z-10">
      <div className="absolute inset-y-0 left-0 w-5 md:w-20 bg-gradient-to-r from-slate-100 dark:from-[#060913] to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-5 md:w-20 bg-gradient-to-l from-slate-100 dark:from-[#060913] to-transparent z-20 pointer-events-none" />
      <div className={lightweight ? 'overflow-x-auto scrollbar-none' : 'overflow-hidden'}>
        <div className="animate-marquee" style={{ animationPlayState: inView && !lightweight ? 'running' : 'paused', ...(lightweight ? { animation: 'none' } : {}) }}>
          {(lightweight ? [0] : [0, 1]).map(copy => (
            <div key={copy} className="flex gap-4 pr-4 py-1" aria-hidden={copy === 1 ? true : undefined}>
              {techItems.map(item => (
                <div key={item.name} className="flex items-center gap-2.5 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 whitespace-nowrap">
                  <item.icon size={18} style={{ color: item.color }} aria-hidden="true" />
                  <span className="text-xs font-mono font-semibold">{item.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
