import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ResponsiveImage } from '../ResponsiveImage';
import { KnowledgeBrainFlow } from '../../visualizer/KnowledgeBrainFlow';
import { X, ZoomIn, Workflow, Cpu, Wrench, Code, CheckCircle2, type LucideIcon } from 'lucide-react';

export type CaseStudySection = {
  kind: 'problem' | 'solution' | 'tech' | 'impact';
  title: string;
  text: string;
};

export type CaseStudy = {
  eyebrow?: string;
  title: string;
  image?: string;
  visual?: 'knowledge-brain';
  description: string;
  flowSteps?: { step: number; title: string; description: string }[];
  sections: CaseStudySection[];
  tags: string[];
};

const sectionStyle: Record<CaseStudySection['kind'], { icon: LucideIcon; head: string; box: string; body: string }> = {
  problem: {
    icon: Cpu,
    head: 'text-rose-600 dark:text-rose-400',
    box: 'border-rose-500/20 bg-rose-500/[0.04]',
    body: 'text-slate-700 dark:text-slate-300',
  },
  solution: {
    icon: Wrench,
    head: 'text-sky-600 dark:text-sky-400',
    box: 'border-sky-500/20 bg-sky-500/[0.04]',
    body: 'text-slate-700 dark:text-slate-300',
  },
  tech: {
    icon: Code,
    head: 'text-blue-600 dark:text-blue-400',
    box: 'border-blue-500/20 bg-blue-500/[0.04]',
    body: 'text-slate-700 dark:text-slate-300',
  },
  impact: {
    icon: CheckCircle2,
    head: 'text-emerald-600 dark:text-emerald-400',
    box: 'border-emerald-500/30 bg-emerald-500/[0.07]',
    body: 'text-emerald-900 dark:text-emerald-200 font-semibold',
  },
};

type Props = {
  study: CaseStudy | null;
  onClose: () => void;
};

export const CaseStudyModal: React.FC<Props> = ({ study, onClose }) => {
  const [zoom, setZoom] = useState(false);
  const zoomRef = useRef(false);
  useEffect(() => {
    zoomRef.current = zoom;
  }, [zoom]);

  // lock body scroll + Escape to close (lightbox first, then modal)
  useEffect(() => {
    if (!study) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (zoomRef.current) setZoom(false);
      else onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [study, onClose]);

  return createPortal(
    <>
      <AnimatePresence>
        {study && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:p-6 bg-slate-950/70 backdrop-blur-sm [perspective:1400px]"
            onClick={onClose}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={study.title}
              initial={{ opacity: 0, y: 60, rotateX: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, rotateX: 10, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full ${study.visual === 'knowledge-brain' ? 'max-w-6xl' : 'max-w-3xl'} max-h-[92svh] overflow-y-auto overscroll-contain rounded-t-3xl sm:rounded-3xl bg-white dark:bg-[#0a0f1f] border border-slate-200 dark:border-white/10 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)] text-slate-900 dark:text-slate-100`}
            >
              {/* Hero image */}
              {study.image && (
                <button
                  type="button"
                  onClick={() => setZoom(true)}
                  className="relative block w-full aspect-[16/8] overflow-hidden group bg-slate-100 dark:bg-slate-950"
                  aria-label="Expand image"
                >
                  <ResponsiveImage
                    loading="eager"
                    sizes="(max-width: 767px) 100vw, 768px"
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0a0f1f] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-slate-950/70 text-white font-mono text-[11px] font-semibold flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={14} /> Click to expand
                  </span>
                </button>
              )}

              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:rotate-90 transition-all shadow-md"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {study.visual === 'knowledge-brain' && <div className="px-4 pt-16 sm:px-8"><KnowledgeBrainFlow expanded /></div>}
              {!study.image && !study.visual && study.flowSteps && (
                <div className="relative w-full p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-950 to-sky-950 border-b border-slate-200 dark:border-white/10 overflow-hidden text-white">
                  <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-sky-400 flex items-center gap-1.5">
                      <Workflow size={13} /> Architecture Flow Diagram
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                      Live Ingestion Pipeline
                    </span>
                  </div>
                  <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {study.flowSteps.map((s) => (
                      <div key={s.step} className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <span className="w-5 h-5 rounded-md bg-sky-600 text-white text-[10px] font-mono font-bold flex items-center justify-center mb-1.5 shadow-sm">
                          {s.step}
                        </span>
                        <div className="text-xs font-bold text-white leading-tight">
                          {s.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className={`px-6 sm:px-10 pb-8 sm:pb-10 ${study.image ? '-mt-10 relative' : !study.image && study.flowSteps ? 'pt-8' : 'pt-10'}`}>
                {study.eyebrow && (
                  <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-gradient block mb-2">
                    {study.eyebrow}
                  </span>
                )}
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 pr-10">{study.title}</h2>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                  {study.description}
                </p>

                {/* Pipeline */}
                {!study.visual && study.flowSteps && study.flowSteps.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400 mb-4 flex items-center gap-2">
                      <Workflow size={14} /> Execution Pipeline
                    </h4>
                    <ol className="relative border-l border-dashed border-sky-500/40 ml-3.5 space-y-5">
                      {study.flowSteps.map((s, i) => (
                        <motion.li
                          key={s.step}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 + i * 0.07 }}
                          className="pl-7 relative"
                        >
                          <span className="absolute -left-3.5 top-0 w-7 h-7 rounded-lg bg-sky-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-md">
                            {s.step}
                          </span>
                          <h5 className="text-sm font-bold">{s.title}</h5>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-0.5">
                            {s.description}
                          </p>
                        </motion.li>
                      ))}
                    </ol>
                  </div>
                )}

                <div className="grid gap-4">
                  {study.sections.map((sec) => {
                    const st = sectionStyle[sec.kind];
                    const Icon = st.icon;
                    return (
                      <div key={sec.kind + sec.title} className={`p-5 rounded-2xl border ${st.box}`}>
                        <h4 className={`text-[11px] font-mono font-bold uppercase tracking-[0.18em] mb-2 flex items-center gap-2 ${st.head}`}>
                          <Icon size={14} /> {sec.title}
                        </h4>
                        <p className={`text-xs sm:text-sm leading-relaxed ${st.body}`}>{sec.text}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-2">
                  {study.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sky-700 dark:text-sky-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {zoom && study?.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-slate-950/90 flex items-center justify-center p-3 sm:p-8 cursor-zoom-out"
            onClick={() => setZoom(false)}
          >
            <ResponsiveImage
              loading="eager"
              sizes="100vw"
              src={study.image}
              alt={study.title}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            />
            <button
              onClick={() => setZoom(false)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 text-white hover:bg-white/20"
              aria-label="Close image"
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.body
  );
};

export default CaseStudyModal;
