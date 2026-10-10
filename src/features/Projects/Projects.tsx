import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ArrowUpRight, Building2, TrendingUp } from 'lucide-react';
import { cvData, type Project } from '../../data/cvData';
import { TiltCard } from '../../components/ui/TiltCard/TiltCard';
import { ResponsiveImage } from '../../components/ui/ResponsiveImage';
import { SectionHeader } from '../../components/ui/SectionHeader/SectionHeader';
import { CaseStudyModal, type CaseStudy } from '../../components/ui/CaseStudyModal/CaseStudyModal';

const toCaseStudy = (p: Project): CaseStudy => ({
  eyebrow: p.client,
  title: p.title,
  image: p.image,
  description: p.fullDescription,
  tags: p.tags,
  sections: [
    p.problem && { kind: 'problem' as const, title: 'Engineering Problem & Business Need', text: p.problem },
    p.solution && { kind: 'solution' as const, title: 'Architectural Solution', text: p.solution },
    p.engineeringDecisions && { kind: 'tech' as const, title: 'Technical Implementation', text: p.engineeringDecisions },
    p.impact && { kind: 'impact' as const, title: 'Verified Outcome & Impact', text: p.impact },
  ].filter(Boolean) as CaseStudy['sections'],
});

const ease = [0.22, 1, 0.36, 1] as const;

export const Projects: React.FC = () => {
  const [study, setStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="projects" className="section section-glow py-24 sm:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          icon={FolderGit2}
          eyebrow="Featured Case Studies"
          title="Software Engineering"
          highlight="Projects."
          description="Backend architecture, high-throughput cloud processing, MES/SAP integrations, and poka-yoke defect prevention."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cvData.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: (idx % 2) * 0.1, ease }}
              style={{ transformPerspective: 1200 }}
            >
              <TiltCard
                max={6}
                role="button"
                tabIndex={0}
                onClick={() => setStudy(toCaseStudy(project))}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setStudy(toCaseStudy(project));
                  }
                }}
                className="glass rounded-3xl overflow-hidden h-full flex flex-col cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                {/* Image */}
                {project.image && (
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-200 dark:bg-slate-950">
                    <ResponsiveImage
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.06] transition-transform duration-700 ease-out"
                      onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent dark:from-[#0b1022] dark:via-[#0b1022]/20" />
                    {project.client && (
                      <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/70 text-white font-mono text-[11px] font-semibold">
                        <Building2 size={12} /> {project.client}
                      </span>
                    )}
                    <span className="absolute top-4 right-4 p-2 rounded-xl bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 group-hover:bg-sky-600 group-hover:text-white transition-all">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                )}

                <div className="relative z-[3] p-6 sm:p-7 pt-2 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{project.shortDescription}</p>

                  {project.impact && (
                    <div className="flex gap-2.5 p-3 rounded-xl bg-emerald-500/[0.07] border border-emerald-500/20 mb-5">
                      <TrendingUp size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <p className="text-xs text-emerald-800 dark:text-emerald-200 leading-relaxed line-clamp-2">{project.impact}</p>
                    </div>
                  )}

                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <CaseStudyModal study={study} onClose={() => setStudy(null)} />
    </section>
  );
};

export default Projects;
