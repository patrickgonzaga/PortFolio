import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Cpu, ShieldCheck } from 'lucide-react';
import { useAbout } from './useAbout';

export const About: React.FC = () => {
  const { bioParagraphs, principles, stats, avatarUrl } = useAbout();

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-20 relative bg-white dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sky-600 dark:text-sky-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Cpu size={14} />
            <span>Professional Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Engineering Identity & Evolution<span className="text-sky-600 dark:text-sky-400">.</span>
          </h2>
        </motion.div>

        {/* Top Grid: Bio Narrative & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Bio Story Text */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {bioParagraphs.map((paragraph, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex flex-col justify-center shadow-sm"
                >
                  <span className="text-2xl sm:text-3xl font-bold font-mono text-sky-600 dark:text-sky-400">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wide mt-1">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Animated Image / Profile Photo Container */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                },
                opacity: { duration: 0.6 },
                scale: { duration: 0.6 }
              }}
              viewport={{ once: true }}
              className="relative w-full max-w-sm rounded-3xl p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden group"
            >
              {/* Pulsing Gradient Ambient Ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-sky-500/20 via-blue-500/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden relative bg-slate-900">
                <img
                  src={avatarUrl}
                  alt="Patrick Gonzaga"
                  className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/pat.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-75" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
                    <ShieldCheck size={16} className="text-sky-600 dark:text-sky-400" />
                    <span className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase">Patrick Gonzaga</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 block mt-0.5 pl-4">Senior Software Engineer</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Engineering Philosophy Cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold font-sans text-slate-900 dark:text-white">
              Engineering Execution Framework
            </h3>
            <p className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400 mt-1">
              "I don't just write code — I close gaps."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-sky-100 dark:bg-sky-950 border border-sky-300 dark:border-sky-800/60 text-sky-700 dark:text-sky-400">
                      {item.step}
                    </span>
                    <CheckCircle2 size={18} className="text-slate-400 dark:text-slate-600 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white font-sans group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
