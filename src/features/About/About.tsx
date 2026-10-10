import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck } from 'lucide-react';
import { useAbout } from './useAbout';
import { TiltCard } from '../../components/ui/TiltCard/TiltCard';
import { SectionHeader } from '../../components/ui/SectionHeader/SectionHeader';
import { ResponsiveImage } from '../../components/ui/ResponsiveImage';

const ease = [0.22, 1, 0.36, 1] as const;

export const About: React.FC = () => {
  const { bioParagraphs, principles, stats, avatarUrl } = useAbout();

  return (
    <section id="about" className="section py-24 sm:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader icon={Cpu} eyebrow="Professional Background" title="Engineering Identity &" highlight="Evolution." />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Bio */}
          <div className="lg:col-span-7 flex flex-col gap-6 order-2 lg:order-1">
            {bioParagraphs.map((paragraph, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease }}
                className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20, rotateY: -25 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease }}
                  style={{ transformPerspective: 800 }}
                >
                  <TiltCard max={12} lift={16} className="glass rounded-2xl p-4 h-full">
                    <div className="relative z-[3] depth-1">
                      <span className="text-2xl sm:text-3xl font-extrabold font-mono text-gradient block">{stat.value}</span>
                      <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wide mt-1 block">
                        {stat.label}
                      </span>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Photo – layered 3D card */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotateY: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease }}
              style={{ transformPerspective: 1000 }}
              className="relative w-full max-w-sm"
            >
              {/* glow behind */}
              <div
                className="absolute -inset-6 rounded-[2rem] opacity-30 pointer-events-none"
                style={{ background: 'radial-gradient(closest-side, rgba(2, 132, 199, 0.2), transparent)' }}
              />
              <TiltCard max={8} lift={12} className="glass rounded-[2rem] p-3">
                <div className="relative z-[3] w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-slate-900 [transform-style:preserve-3d]">
                  <ResponsiveImage
                    src={avatarUrl}
                    alt="Patrick Gonzaga"
                    sizes="(max-width: 425px) calc(100vw - 64px), 360px"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => ((e.target as HTMLImageElement).src = '/pat.png')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                </div>
                {/* floating badge (pops out in 3D) */}
                <div className="absolute bottom-7 left-7 right-7 z-[4] depth-3 p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 shadow-xl">
                  <div className="flex items-center gap-2">
                    <span className="relative flex w-2.5 h-2.5 shrink-0">
                      <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                      <span className="relative w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </span>
                    <ShieldCheck size={16} className="text-sky-500" />
                    <span className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase">Patrick Gonzaga</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 block mt-0.5 pl-[18px]">
                    Senior Software Engineer
                  </span>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>

        {/* Execution framework */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-xl mx-auto mb-10"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Engineering Execution Framework
            </h3>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-gradient mt-2">“From enterprise backends to cloud & AI — I deliver production-ready systems that last.”</p>
          </motion.div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* connector line on desktop */}
            <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-sky-500/0 via-sky-500/30 to-sky-500/0" />
            {principles.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease }}
              >
                <TiltCard max={6} className="glass rounded-2xl p-6 h-full group">
                  <div className="relative z-[3]">
                    <span className="depth-2 inline-flex w-10 h-10 rounded-xl bg-sky-600 text-white font-mono font-bold text-sm items-center justify-center shadow-md mb-4">
                      {item.step}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">{item.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">{item.description}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
