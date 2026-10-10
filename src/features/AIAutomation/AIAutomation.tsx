import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bot, Brain, Code, Workflow, ArrowUpRight, Zap, ZoomIn, Layers } from 'lucide-react';
import { cvData, type AIIndependentProject } from '../../data/cvData';
import { TiltCard } from '../../components/ui/TiltCard/TiltCard';
import { ResponsiveImage } from '../../components/ui/ResponsiveImage';
import { KnowledgeBrainFlow } from '../../components/visualizer/KnowledgeBrainFlow';
import { SectionHeader } from '../../components/ui/SectionHeader/SectionHeader';
import { CaseStudyModal, type CaseStudy } from '../../components/ui/CaseStudyModal/CaseStudyModal';

const toCaseStudy = (p: AIIndependentProject): CaseStudy => ({
  eyebrow: p.badge,
  title: p.title,
  image: p.image,
  description: p.fullDescription,
  flowSteps: p.flowSteps,
  visual: p.id === 'drive-knowledge-brain' ? 'knowledge-brain' : undefined,
  tags: p.tags,
  sections: [
    p.problem && { kind: 'problem' as const, title: 'Manual Process & Problem', text: p.problem },
    p.solution && { kind: 'solution' as const, title: 'Automation Architecture', text: p.solution },
    p.techDetails && { kind: 'tech' as const, title: 'Technical & Prompt Engineering', text: p.techDetails },
    p.timeSavings && { kind: 'impact' as const, title: 'Measured Outcome', text: p.timeSavings },
  ].filter(Boolean) as CaseStudy['sections'],
});

/** pull a short headline metric out of the time-savings sentence, e.g. "96% faster" */
const headlineMetric = (text?: string) => {
  if (!text) return null;
  const m = text.match(/\((\d+%\s*faster)\)/i);
  return m ? m[1] : null;
};

const ease = [0.22, 1, 0.36, 1] as const;

export const AIAutomation: React.FC = () => {
  const { professionalWork, clientProjects, independentProjects } = cvData.aiAutomationData;
  const [study, setStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="ai-automation" className="section section-glow py-24 sm:py-32 px-6 md:px-12 lg:px-20 overflow-hidden bg-white dark:bg-[#070b12] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          icon={Sparkles}
          eyebrow="Specialization & Automation"
          title="AI &"
          highlight="Automation."
          description="Client AI projects, professional AI-assisted development, and independent n8n automation pipelines."
        />

        {/* ---------- Professional + Client: 2-col bento ---------- */}
        <div className="grid grid-cols-1 gap-6 mb-16">
          {/* Professional */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease }}
          >
            <TiltCard max={3} className="glass rounded-2xl p-7 sm:p-8 h-full border border-slate-200 dark:border-slate-800">
              <div className="relative z-[3]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                    <Bot size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400 font-bold block">
                      Professional Experience
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">{professionalWork.title}</h3>
                  </div>
                </div>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
                  {professionalWork.company} · {professionalWork.role}
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-5 leading-relaxed">{professionalWork.summary}</p>
                <ul className="space-y-3">
                  {professionalWork.highlights.map((item, idx) => {
                    const [head, ...body] = item.split(':');
                    return (
                      <li key={idx} className="flex gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        <Code size={15} className="text-sky-500 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-slate-900 dark:text-white">{head}:</strong>
                          {body.join(':')}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TiltCard>
          </motion.div>

          {/* Featured client architecture */}
          {clientProjects.map(project => (
            <motion.div key={project.id} className="order-first" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }}>
              <TiltCard max={2} className="glass rounded-3xl p-4 sm:p-7 lg:p-8">
                <div className="relative z-[3] grid grid-cols-1 gap-7">
                  <div className="min-w-0">
                    <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.14em] text-sky-700 dark:text-sky-300 mb-4"><Brain size={15} />{project.badge}</span>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight text-slate-900 dark:text-white">{project.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">{project.shortDescription}</p>
                    <div className="flex flex-wrap gap-2 mt-5">
                      {project.tags.map(tag => <span key={tag} className="px-2.5 py-1 rounded-lg text-[11px] bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">{tag}</span>)}
                    </div>
                    <button type="button" onClick={() => setStudy(toCaseStudy(project))} className="inline-flex items-center gap-3 mt-6 min-h-11 rounded-lg px-4 bg-sky-700 hover:bg-sky-600 text-white text-xs font-semibold transition-colors" aria-label="View AI Knowledge Brain case study">
                      Explore the architecture <ArrowUpRight size={16} />
                    </button>
                  </div>
                  <KnowledgeBrainFlow />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
        {/* ---------- Independent n8n projects: Sleek Photo List ---------- */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8 pb-3 border-b border-slate-200 dark:border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400 font-bold mb-1.5">
              <Workflow size={14} /> Production Automation Portfolios
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              n8n Automated <span className="text-sky-600 dark:text-sky-400">Pipelines</span>
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
            {independentProjects.length} production workflows · tap any row for case study details
          </span>
        </div>

        {/* Sleek List Container */}
        <div className="space-y-5">
          {independentProjects.map((project, idx) => {
            const metric = headlineMetric(project.timeSavings);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease }}
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setStudy(toCaseStudy(project))}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setStudy(toCaseStudy(project));
                    }
                  }}
                  className="rounded-2xl p-4 sm:p-5 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-sky-500/50 hover:bg-slate-50/50 dark:hover:bg-slate-900/90 transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-md"
                >
                  <div className="flex flex-col md:flex-row gap-5 lg:gap-6 items-start md:items-center">

                    {/* Workflow Diagram Photo Thumbnail */}
                    <div className="relative w-full md:w-[320px] lg:w-[360px] shrink-0 aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 group-hover:border-sky-500/40 transition-colors">
                      {project.image && (
                        <ResponsiveImage
                          sizes="(max-width: 767px) calc(100vw - 80px), 360px"
                          src={project.image}
                          alt={`${project.title} workflow diagram`}
                          loading="lazy"
                          className="w-full h-full object-cover object-center filter brightness-95 group-hover:brightness-105 group-hover:scale-105 transition-all duration-500"
                        />
                      )}

                      {/* Badge Counter */}
                      <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-slate-900/90 border border-white/10 text-white font-mono font-bold text-xs">
                        #{String(idx + 1).padStart(2, '0')}
                      </span>

                      {/* Speed-up metric pill */}
                      {metric && (
                        <span className="absolute bottom-2.5 left-2.5 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-500 text-slate-950 text-[11px] font-mono font-bold shadow-md">
                          <Zap size={11} /> {metric}
                        </span>
                      )}

                      {/* Click to expand hover overlay */}
                      <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 text-white font-mono text-[11px] font-medium flex items-center gap-1.5 shadow-lg">
                          <ZoomIn size={13} /> View Full Workflow
                        </span>
                      </div>
                    </div>

                    {/* Workflow Details */}
                    <div className="flex-1 min-w-0 w-full flex flex-col justify-between py-1">
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-1.5">
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                            {project.title}
                          </h4>
                          <span className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 group-hover:text-sky-500 group-hover:border-sky-500/30 transition-all shrink-0">
                            <ArrowUpRight size={15} />
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                          {project.shortDescription}
                        </p>

                        {/* Sequential Execution Node Badges */}
                        {project.flowSteps && (
                          <div className="mb-3 flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1">
                            <Layers size={13} className="text-sky-600 dark:text-sky-400 shrink-0" />
                            {project.flowSteps.map((s, sIdx) => (
                              <React.Fragment key={s.step}>
                                <span className="shrink-0 px-2 py-0.5 rounded text-[11px] font-mono whitespace-nowrap bg-sky-50 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800/80">
                                  {s.title}
                                </span>
                                {sIdx < project.flowSteps!.length - 1 && (
                                  <span className="shrink-0 text-slate-300 dark:text-slate-700 font-bold text-[10px]">
                                    →
                                  </span>
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        )}

                        {/* Measurable Outcome */}
                        {project.timeSavings && (
                          <p className="text-xs font-sans text-emerald-800 dark:text-emerald-400 font-medium">
                            <strong className="font-mono text-[11px] uppercase mr-1">Outcome:</strong>
                            {project.timeSavings}
                          </p>
                        )}
                      </div>

                      {/* Tech Tags */}
                      <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap gap-1.5">
                        {project.tags.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <CaseStudyModal study={study} onClose={() => setStudy(null)} />
    </section>
  );
};

export default AIAutomation;
