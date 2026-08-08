import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2, Bot } from 'lucide-react';
import { cvData } from '../../data/cvData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-20 relative bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sky-600 dark:text-sky-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Briefcase size={14} />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Engineering Experience & Progression<span className="text-sky-600 dark:text-sky-400">.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-2xl text-sm sm:text-base">
            Demonstrating career evolution from enterprise IT & systems engineering into modern C#/.NET and cloud architecture.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-slate-300 dark:border-slate-800/80 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {cvData.experience.map((item, idx) => {
            const isRenesas = item.id === 'renesas';
            const isDiscovery = item.id === 'emapta-discovery';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline node icon */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 ${
                  isDiscovery
                    ? 'border-sky-500 bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400'
                    : isRenesas
                    ? 'border-emerald-500 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400'
                    : 'border-slate-400 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400'
                } flex items-center justify-center text-[10px] font-bold font-mono shadow-md`} />

                {/* Experience Card */}
                <div className={`p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/60 border ${
                  isRenesas 
                    ? 'border-emerald-300 dark:border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/10' 
                    : isDiscovery
                    ? 'border-sky-300 dark:border-sky-500/30 bg-sky-50/50 dark:bg-sky-950/10'
                    : 'border-slate-200 dark:border-slate-800/80'
                } hover:border-slate-400 dark:hover:border-slate-700 transition-all shadow-md dark:shadow-xl`}>
                  
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-200 dark:border-slate-800/60">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-sans tracking-tight">
                          {item.role}
                        </h3>
                        {isRenesas && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-900/60 border border-emerald-300 dark:border-emerald-700/60 text-emerald-800 dark:text-emerald-300">
                            Sole Software Engineer • Enterprise Ownership
                          </span>
                        )}
                        {isDiscovery && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-sky-100 dark:bg-sky-900/60 border border-sky-300 dark:border-sky-700/60 text-sky-800 dark:text-sky-300">
                            C# / .NET / Azure Microservices
                          </span>
                        )}
                      </div>
                      <span className="text-sm font-semibold text-sky-600 dark:text-sky-400 mt-1 block font-mono">
                        {item.company}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400 shrink-0">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                        <Calendar size={13} className="text-sky-600 dark:text-sky-400" />
                        <span>{item.period}</span>
                      </div>
                      {item.location && (
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                          <MapPin size={13} className="text-slate-500 dark:text-slate-400" />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-3 font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {item.description.map((desc, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className="text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Highlight box for Renesas & Discovery */}
                  {isRenesas && (
                    <div className="mt-6 p-4 rounded-xl bg-emerald-100/70 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800/40 flex items-start gap-3">
                      <Award size={18} className="text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <div className="text-xs font-mono text-emerald-900 dark:text-emerald-200">
                        <span className="font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block mb-1">
                          Verified Key Achievements
                        </span>
                        <span>
                          75% floor productivity boost • &gt; MYR 1M time-saving benefits • 99% MES uptime across 100+ servers • e-LCS poka-yoke defect elimination.
                        </span>
                      </div>
                    </div>
                  )}

                  {isDiscovery && (
                    <div className="mt-6 p-4 rounded-xl bg-sky-100/70 dark:bg-sky-950/30 border border-sky-300 dark:border-sky-800/40 flex items-start gap-3">
                      <Bot size={18} className="text-sky-700 dark:text-sky-400 shrink-0 mt-0.5" />
                      <div className="text-xs font-mono text-sky-900 dark:text-sky-200">
                        <span className="font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300 block mb-1">
                          AI-Assisted Development Workflow
                        </span>
                        <span>
                          Leveraged Cursor with repository-level rules and MCP (read-only database context), ensuring all generated code was strictly validated and tested before merging.
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
