import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Bot, Code, Workflow, ArrowUpRight, X, ZoomIn, Cpu, Wrench, CheckCircle2, Layers, Clock } from 'lucide-react';
import { cvData, type AIIndependentProject } from '../../data/cvData';

export const AIAutomation: React.FC = () => {
  const { professionalWork, independentProjects } = cvData.aiAutomationData;
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);
  const [selectedProject, setSelectedProject] = useState<AIIndependentProject | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedImage || selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, selectedProject]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
        setSelectedProject(null);
      }
    };
    if (selectedImage || selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, selectedProject]);

  return (
    <section id="ai-automation" className="py-24 px-6 md:px-12 lg:px-20 relative bg-white dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sky-600 dark:text-sky-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Sparkles size={14} />
            <span>Secondary Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            AI & Automation<span className="text-sky-600 dark:text-sky-400">.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-2xl text-sm sm:text-base">
            Independent Projects & Professional AI-Assisted Development Workflows.
          </p>
        </motion.div>

        {/* 1. PROFESSIONAL AI-ASSISTED DEVELOPMENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-8 rounded-2xl bg-sky-50/70 dark:bg-sky-950/20 border border-sky-200 dark:border-sky-500/30 shadow-sm dark:shadow-xl font-sans"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-sky-100 dark:bg-sky-500/20 text-sky-700 dark:text-sky-400 border border-sky-300 dark:border-sky-500/30">
                <Bot size={22} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-sky-700 dark:text-sky-400 font-bold block">
                  Professional Experience
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans">
                  {professionalWork.title}
                </h3>
              </div>
            </div>

            <span className="px-3 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 shadow-xs">
              {professionalWork.company} ({professionalWork.role})
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            {professionalWork.summary}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {professionalWork.highlights.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans shadow-xs">
                <div className="flex items-center gap-2 mb-2 text-sky-700 dark:text-sky-400 font-mono font-bold">
                  <Code size={14} />
                  <span>Workflow #{idx + 1}</span>
                </div>
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* 2. INDEPENDENT PROJECTS & WORKFLOW FLOWS */}
        <div>
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Workflow size={20} className="text-sky-600 dark:text-sky-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans tracking-tight">
                Independent Projects & Automation Flows
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 hidden sm:inline">
              Click any project for full flow architecture
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {independentProjects.map((project: AIIndependentProject, idx: number) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 transition-all flex flex-col justify-between cursor-pointer group shadow-sm hover:shadow-md dark:shadow-xl font-sans"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sky-700 dark:text-sky-400 font-mono text-xs font-semibold shadow-xs">
                      {project.badge}
                    </span>
                    <span className="text-slate-400 dark:text-slate-500 group-hover:text-sky-600 dark:group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white font-sans group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors mb-2">
                    {project.title}
                  </h4>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Flow Diagram Thumbnail */}
                  {project.image && (
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage({ url: project.image!, title: project.title });
                      }}
                      className="w-full h-40 rounded-xl overflow-hidden mb-4 border border-slate-200 dark:border-slate-800 bg-slate-200 dark:bg-slate-950 relative group/img cursor-pointer"
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} Flow Diagram`}
                        className="w-full h-full object-cover object-top filter brightness-95 group-hover/img:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-slate-900/30 group-hover/img:bg-slate-900/10 transition-colors flex items-center justify-center">
                        <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 text-white font-mono text-[11px] font-semibold flex items-center gap-1.5 opacity-0 group-hover/img:opacity-100 transition-opacity backdrop-blur-xs">
                          <ZoomIn size={14} />
                          Zoom Flow Diagram
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Automation Flow Steps Timeline Preview */}
                  {project.flowSteps && (
                    <div className="mb-4 p-3.5 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 space-y-2.5">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 block flex items-center gap-1.5">
                        <Layers size={13} />
                        Automation Flow Steps:
                      </span>
                      <div className="space-y-2">
                        {project.flowSteps.map((step) => (
                          <div key={step.step} className="flex items-start gap-2 text-xs">
                            <span className="shrink-0 w-4 h-4 rounded-full bg-sky-100 dark:bg-sky-950 border border-sky-300 dark:border-sky-800 text-sky-700 dark:text-sky-400 font-mono font-bold text-[10px] flex items-center justify-center mt-0.5">
                              {step.step}
                            </span>
                            <div className="min-w-0">
                              <span className="font-semibold text-slate-800 dark:text-slate-200">{step.title}: </span>
                              <span className="text-slate-500 dark:text-slate-400 line-clamp-1">{step.description}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.timeSavings && (
                    <div className="mb-4 p-3 rounded-lg bg-emerald-50 dark:bg-slate-950/90 border border-emerald-200 dark:border-emerald-800/40 text-xs font-mono text-emerald-800 dark:text-emerald-400 flex items-center gap-2">
                      <Clock size={14} className="shrink-0" />
                      <span>{project.timeSavings}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-slate-800/60">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Automation Project Detailed Case Study Modal */}
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
              {/* Close Button - Sticky at top right */}
              <button
                onClick={() => setSelectedProject(null)}
                className="sticky top-0 float-right z-20 -mr-2 -mt-2 sm:-mr-4 sm:-mt-4 p-2 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white backdrop-blur-md shadow-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400 block mb-2">
                {selectedProject.badge}
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-sans mb-4 pr-10">
                {selectedProject.title}
              </h2>

              {/* Flow Diagram Featured Image */}
              {selectedProject.image && (
                <div 
                  onClick={() => setSelectedImage({ url: selectedProject.image!, title: selectedProject.title })}
                  className="w-full max-h-72 rounded-xl overflow-hidden mb-6 border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 relative group cursor-pointer"
                >
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 text-white font-mono text-[11px] font-semibold flex items-center gap-1.5 backdrop-blur-xs">
                      <ZoomIn size={14} />
                      Click to Expand Flow Diagram
                    </span>
                  </div>
                </div>
              )}

              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                {selectedProject.fullDescription}
              </p>

              {/* Step-by-Step Architecture Pipeline */}
              {selectedProject.flowSteps && (
                <div className="mb-6 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-4 flex items-center gap-2">
                    <Workflow size={16} />
                    Automation Flow Architecture & Execution Pipeline
                  </h4>
                  <div className="space-y-4">
                    {selectedProject.flowSteps.map((step) => (
                      <div key={step.step} className="flex items-start gap-3.5 p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80">
                        <span className="shrink-0 w-7 h-7 rounded-lg bg-sky-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                          {step.step}
                        </span>
                        <div>
                          <h5 className="text-xs font-bold text-slate-900 dark:text-white font-sans mb-0.5">
                            {step.title}
                          </h5>
                          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Problem / Solution / Tech Details / Impact Grid */}
              <div className="space-y-6">
                {selectedProject.problem && (
                  <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2 flex items-center gap-2">
                      <Cpu size={15} />
                      Manual Process & Engineering Problem
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
                      Automation Architecture & Solution
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                )}

                {selectedProject.techDetails && (
                  <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-300 mb-2 flex items-center gap-2">
                      <Code size={15} />
                      Technical & Prompt Engineering Details
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {selectedProject.techDetails}
                    </p>
                  </div>
                )}

                {selectedProject.timeSavings && (
                  <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-2">
                      <CheckCircle2 size={15} />
                      Measured Outcome & Time Savings
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 leading-relaxed font-semibold">
                      {selectedProject.timeSavings}
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

      {/* Lightbox / Zoom Modal for Flow Diagram */}
      <AnimatePresence>
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl bg-white dark:bg-[#0b1120] border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-2xl overflow-hidden flex flex-col cursor-default"
            >
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans">
                  {selectedImage.title} — Workflow Architecture Flow
                </h3>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  aria-label="Close flow image"
                >
                  <X size={18} />
                </button>
              </div>
              
              <div className="flex-1 overflow-auto rounded-xl bg-slate-100 dark:bg-slate-950 p-2 flex items-center justify-center">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[75vh] object-contain rounded-lg shadow-md"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AIAutomation;

