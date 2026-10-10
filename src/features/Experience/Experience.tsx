import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2, Bot, Sparkles, type LucideIcon } from 'lucide-react';
import { cvData } from '../../data/cvData';
import { TiltCard } from '../../components/ui/TiltCard/TiltCard';
import { SectionHeader } from '../../components/ui/SectionHeader/SectionHeader';

type Accent = { node: string; chip: string; box: string; boxText: string; label?: string };

const ACCENTS: Record<string, Accent> = {
  'freelance-automation': {
    node: 'from-emerald-400 via-sky-500 to-blue-600',
    chip: 'bg-sky-500/10 border-sky-500/30 text-sky-700 dark:text-sky-300',
    box: 'bg-sky-500/[0.06] border-sky-500/25',
    boxText: 'text-sky-900 dark:text-sky-200',
    label: 'AI & Cloud Automation',
  },
  'emapta-discovery': {
    node: 'from-sky-400 to-blue-600',
    chip: 'bg-sky-500/10 border-sky-500/30 text-sky-700 dark:text-sky-300',
    box: 'bg-sky-500/[0.06] border-sky-500/25',
    boxText: 'text-sky-900 dark:text-sky-100',
    label: 'C# / .NET / Azure Microservices',
  },
  renesas: {
    node: 'from-emerald-400 to-teal-600',
    chip: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300',
    box: 'bg-emerald-500/[0.06] border-emerald-500/25',
    boxText: 'text-emerald-900 dark:text-emerald-100',
    label: 'Enterprise Ownership',
  },
};

const DEFAULT_ACCENT: Accent = {
  node: 'from-slate-400 to-slate-600',
  chip: '',
  box: '',
  boxText: '',
};

const HIGHLIGHTS: Record<string, { icon: LucideIcon; title: string; text: string }> = {
  renesas: {
    icon: Award,
    title: 'Verified Key Achievements',
    text: '75% floor productivity boost • > MYR 1M time-saving benefits • 99% MES uptime across 100+ servers • e-LCS poka-yoke defect elimination.',
  },
  'emapta-discovery': {
    icon: Bot,
    title: 'AI-Assisted Development Workflow',
    text: 'Leveraged Cursor with repository-level rules and MCP (read-only database context), ensuring all generated code was strictly validated and tested before merging.',
  },
};

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section py-24 sm:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          icon={Briefcase}
          eyebrow="Career History"
          title="Engineering Experience &"
          highlight="Progression."
          description="Career evolution from enterprise VB.NET & IT systems engineering into modern C#/.NET and cloud architecture."
        />

        <div className="relative pl-8 sm:pl-12">
          {/* glowing rail */}
          <div className="absolute left-[11px] sm:left-[19px] top-2 bottom-2 w-[2px] rounded-full bg-gradient-to-b from-sky-500 via-sky-600 to-emerald-500/30 opacity-70" />

          <div className="space-y-8 sm:space-y-10">
            {cvData.experience.map((item) => {
              const accent = ACCENTS[item.id] ?? DEFAULT_ACCENT;
              const hl = HIGHLIGHTS[item.id];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30, rotateY: 8 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformPerspective: 1200 }}
                  className="relative"
                >
                  {/* node */}
                  <span
                    className={`absolute -left-8 sm:-left-12 top-7 w-6 h-6 sm:w-[22px] sm:h-[22px] -translate-x-[1px] sm:translate-x-[9px] rounded-full bg-gradient-to-br ${accent.node} ring-4 ring-[hsl(var(--bg))] shadow-sm`}
                  />

                  <TiltCard max={2} lift={6} className="glass rounded-3xl p-4 sm:p-8">
                    <div className="relative z-[3]">
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-3 mb-5 pb-5 border-b border-slate-200 dark:border-white/10">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{item.role}</h3>
                            {item.employmentType === 'freelance' && !item.role.includes('(Freelance)') && (
                              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center gap-1 shadow-sm">
                                <Sparkles size={11} className="text-emerald-500" />
                                Freelance
                              </span>
                            )}
                            {accent.label && (
                              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${accent.chip}`}>
                                {accent.label}
                              </span>
                            )}
                          </div>
                          <span className="text-sm font-semibold text-gradient mt-1 inline-block font-mono">{item.company}{item.confidentialityNote && item.location ? ` | ${item.location}` : ''}</span>
                          {item.confidentialityNote && <p className="mt-1 text-xs italic text-slate-500 dark:text-slate-400">{item.confidentialityNote}</p>}
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400 shrink-0">
                          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                            <Calendar size={12} className="text-sky-500" />
                            {item.period}
                          </span>
                          {item.location && !item.confidentialityNote && (
                            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                              <MapPin size={12} />
                              {item.location}
                            </span>
                          )}
                        </div>
                      </div>

                      {item.tools && (
                        <ul aria-label="Tools used in this role" className="flex flex-wrap gap-2 mb-5">
                          {item.tools.map(tool => <li key={tool} className="rounded-lg border border-sky-500/20 bg-sky-500/5 px-2.5 py-1.5 text-xs font-medium text-sky-800 dark:text-sky-200">{tool}</li>)}
                        </ul>
                      )}
                      <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {item.description.map((desc, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 size={15} className="text-sky-500 shrink-0 mt-0.5" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {item.technologies && (
                        <p className="mt-5 pt-4 border-t border-slate-200 dark:border-white/10 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                          <strong className="text-slate-800 dark:text-slate-200">Technologies: </strong>{item.technologies}
                        </p>
                      )}

                      {hl && (
                        <div className={`mt-6 p-4 rounded-2xl border flex items-start gap-3 ${accent.box}`}>
                          <hl.icon size={18} className={`shrink-0 mt-0.5 ${accent.boxText}`} />
                          <div className={`text-xs font-mono ${accent.boxText}`}>
                            <span className="font-bold uppercase tracking-wider block mb-1">{hl.title}</span>
                            <span>{hl.text}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
