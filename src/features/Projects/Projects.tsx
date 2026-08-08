import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ArrowUpRight, CheckCircle2, X, Building2, Cpu, Wrench, ZoomIn } from 'lucide-react';
import { cvData, type Project } from '../../data/cvData';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-20 relative bg-white dark:bg-[#080c14] text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sky-600 dark:text-sky-400 font-mono text-xs uppercase tracking-widest mb-3">
            <FolderGit2 size={14} />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Software Engineering Projects<span className="text-sky-600 dark:text-sky-400">.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-2xl text-sm sm:text-base">
            Detailed case studies showcasing backend architecture, high-throughput cloud processing, MES/SAP integrations, and poka-yoke defect prevention.
          </p>
        </motion.div>

        {/* Enterprise Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cvData.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 transition-all flex flex-col justify-between cursor-pointer group shadow-sm hover:shadow-md dark:shadow-xl font-sans"
            >
              <div>
                {/* Client & Tags */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  {project.client && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sky-600 dark:text-sky-400 font-mono text-xs font-semibold shadow-xs">
                      <Building2 size={13} />
                      {project.client}
                    </span>
                  )}
                  <span className="text-slate-400 dark:text-slate-500 group-hover:text-sky-600 dark:group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                    <ArrowUpRight size={20} />
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors mb-3">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {project.shortDescription}
                </p>

                {/* Project Image Screenshot Preview */}
                {project.image && (
                  <div className="w-full h-48 rounded-xl overflow-hidden mb-6 border border-slate-200 dark:border-slate-800 bg-slate-200 dark:bg-slate-950 relative group/img">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top filter brightness-95 group-hover/img:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-slate-900/20 group-hover/img:bg-slate-900/0 transition-colors flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 text-white font-mono text-[11px] font-semibold flex items-center gap-1.5 opacity-0 group-hover/img:opacity-100 transition-opacity backdrop-blur-xs">
                        <ZoomIn size={14} />
                        View Case Study Details
                      </span>
                    </div>
                  </div>
                )}

                {/* Problem & Solution Preview */}
                {project.problem && (
                  <div className="mb-6 p-4 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 space-y-2 text-xs">
                    <div>
                      <span className="font-mono font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider block">Problem:</span>
                      <p className="text-slate-700 dark:text-slate-300 line-clamp-2">{project.problem}</p>
                    </div>
                    {project.impact && (
                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60">
                        <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">Impact:</span>
                        <p className="text-emerald-800 dark:text-emerald-200 line-clamp-2">{project.impact}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-800/60">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded text-[11px] font-mono bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 dark:bg-black/80 backdrop-blur-md cursor-pointer"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#0b1120] border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-2xl text-slate-900 dark:text-slate-100 font-sans cursor-default"
            >
              {/* Close Button - Sticky so it stays visible while scrolling inside the modal */}
              <button
                onClick={() => setSelectedProject(null)}
                className="sticky top-0 float-right z-20 -mr-2 -mt-2 sm:-mr-4 sm:-mt-4 p-2 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white backdrop-blur-md shadow-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Modal Content */}
              {selectedProject.client && (
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400 block mb-2">
                  {selectedProject.client}
                </span>
              )}

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-sans mb-4">
                {selectedProject.title}
              </h2>

              {/* Modal Featured Image */}
              {selectedProject.image && (
                <div className="w-full max-h-72 rounded-xl overflow-hidden mb-6 border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}

              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                {selectedProject.fullDescription}
              </p>

              {/* Problem / Solution / Decisions / Impact Grid */}
              <div className="space-y-6">
                {selectedProject.problem && (
                  <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2 flex items-center gap-2">
                      <Cpu size={15} />
                      Engineering Problem & Business Need
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>
                )}

                {selectedProject.solution && (
                  <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2 flex items-center gap-2">
                      <Wrench size={15} />
                      Architectural Solution
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                )}

                {selectedProject.engineeringDecisions && (
                  <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-300 mb-2">
                      Technical Implementation & Contributions
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {selectedProject.engineeringDecisions}
                    </p>
                  </div>
                )}

                {selectedProject.impact && (
                  <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-2">
                      <CheckCircle2 size={15} />
                      Verified Outcome & Business Impact
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 leading-relaxed">
                      {selectedProject.impact}
                    </p>
                  </div>
                )}
              </div>

              {/* Technologies */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sky-700 dark:text-sky-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
