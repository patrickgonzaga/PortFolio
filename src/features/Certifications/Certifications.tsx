import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';
import { cvData } from '../../data/cvData';
import { SectionHeader } from '../../components/ui/SectionHeader/SectionHeader';
import { ResponsiveImage } from '../../components/ui/ResponsiveImage';

type FilterType = 'all' | 'ai' | 'professional';

export const Certifications: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [failedImages, setFailedImages] = useState<string[]>([]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const scrollIntervalRef = useRef<number | null>(null);

  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const inertiaFrameRef = useRef<number | null>(null);

  const tabs: { id: FilterType; label: string }[] = [
    { id: 'all', label: 'All Certifications' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'professional', label: 'Professional' },
  ];

  const filteredCerts = cvData.certifications
    .filter((cert) => (activeFilter === 'all' ? true : cert.type === activeFilter))
    .sort((a, b) => parseInt(b.date) - parseInt(a.date));

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 2);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.8;

      if (inertiaFrameRef.current) {
        cancelAnimationFrame(inertiaFrameRef.current);
        inertiaFrameRef.current = null;
      }
      setIsDragging(false);

      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const startAutoScroll = (direction: 'left' | 'right', speed: number) => {
    stopAutoScroll();
    const container = scrollContainerRef.current;
    if (!container) return;

    const step = () => {
      if (container) {
        container.scrollLeft += direction === 'left' ? -speed : speed;
        checkScroll();
      }
      scrollIntervalRef.current = requestAnimationFrame(step);
    };
    scrollIntervalRef.current = requestAnimationFrame(step);
  };

  const stopAutoScroll = () => {
    if (scrollIntervalRef.current) {
      cancelAnimationFrame(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  };

  const handleWindowMouseMove = (e: MouseEvent) => {
    if (!isDownRef.current || !scrollContainerRef.current) return;

    const x = e.pageX;
    const walk = (x - startXRef.current) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk;

    const now = performance.now();
    const dt = now - lastTimeRef.current;
    if (dt > 0) {
      const dx = x - lastXRef.current;
      velocityRef.current = velocityRef.current * 0.2 + (dx / dt) * 0.8;
    }

    lastXRef.current = x;
    lastTimeRef.current = now;

    checkScroll();
  };

  const handleWindowMouseUp = () => {
    isDownRef.current = false;

    window.removeEventListener('mousemove', handleWindowMouseMove);
    window.removeEventListener('mouseup', handleWindowMouseUp);

    if (Math.abs(velocityRef.current) > 0.1 && scrollContainerRef.current) {
      let v = velocityRef.current;
      const friction = 0.95;

      const step = () => {
        if (!scrollContainerRef.current) {
          setIsDragging(false);
          return;
        }

        scrollContainerRef.current.scrollLeft -= v * 16;
        v *= friction;

        checkScroll();

        if (Math.abs(v) > 0.05) {
          inertiaFrameRef.current = requestAnimationFrame(step);
        } else {
          setIsDragging(false);
          inertiaFrameRef.current = null;
        }
      };

      inertiaFrameRef.current = requestAnimationFrame(step);
    } else {
      setIsDragging(false);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;

    isDownRef.current = true;
    setIsDragging(true);

    startXRef.current = e.pageX;
    scrollLeftRef.current = scrollContainerRef.current?.scrollLeft || 0;

    lastXRef.current = e.pageX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;

    stopAutoScroll();
    if (inertiaFrameRef.current) {
      cancelAnimationFrame(inertiaFrameRef.current);
      inertiaFrameRef.current = null;
    }

    window.addEventListener('mousemove', handleWindowMouseMove);
    window.addEventListener('mouseup', handleWindowMouseUp);
  };

  const handleMouseLeave = () => {
    stopAutoScroll();
  };

  const handleMouseMoveHoverOnly = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDownRef.current) return;

    if (!scrollContainerRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const threshold = 120;

    if (x < threshold) {
      const speedFactor = (threshold - x) / threshold;
      startAutoScroll('left', speedFactor * 12);
    } else if (x > width - threshold) {
      const speedFactor = (x - (width - threshold)) / threshold;
      startAutoScroll('right', speedFactor * 12);
    } else {
      stopAutoScroll();
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => {
      window.removeEventListener('resize', checkScroll);
      stopAutoScroll();
      if (inertiaFrameRef.current) {
        cancelAnimationFrame(inertiaFrameRef.current);
      }
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('mouseup', handleWindowMouseUp);
    };
  }, [filteredCerts.length]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
    const timer = setTimeout(checkScroll, 100);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  useEffect(() => {
    return () => {
      stopAutoScroll();
      if (inertiaFrameRef.current) {
        cancelAnimationFrame(inertiaFrameRef.current);
      }
    };
  }, []);

  return (
    <section id="certifications" className="section section-glow py-24 sm:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          icon={GraduationCap}
          eyebrow="Continuous Learning"
          title=""
          highlight="Certifications."
          description="Verified credentials in cloud infrastructure, data engineering, code quality, and AI-assisted automation."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="-mt-6 mb-8"
        >
          {/* Filter Tabs & Carousel Controls */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => {
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id)}
                    className={`px-4 py-2 rounded-full text-xs font-mono font-semibold uppercase tracking-wider transition-all border ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500 to-violet-500 border-transparent text-white shadow-[0_8px_24px_-8px_hsl(var(--c-cyan)/0.9)]'
                        : 'glass text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {filteredCerts.length > 0 && (
              <div className="flex items-center gap-2 self-end md:self-auto">
                <button
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  className={`p-2 rounded-lg border transition-all ${
                    canScrollLeft
                      ? 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-sky-500/40 hover:text-sky-600 dark:hover:text-sky-400 cursor-pointer'
                      : 'border-slate-100 dark:border-slate-900 text-slate-300 dark:text-slate-700 cursor-not-allowed'
                  }`}
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  className={`p-2 rounded-lg border transition-all ${
                    canScrollRight
                      ? 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-sky-500/40 hover:text-sky-600 dark:hover:text-sky-400 cursor-pointer'
                      : 'border-slate-100 dark:border-slate-900 text-slate-300 dark:text-slate-700 cursor-not-allowed'
                  }`}
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Certifications Carousel */}
        <div className="relative group/carousel">
          <div
            className={`absolute left-0 top-0 bottom-8 w-16 bg-gradient-to-r from-[hsl(var(--bg))] to-transparent pointer-events-none z-10 transition-opacity duration-300 ${
              canScrollLeft ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div
            className={`absolute right-0 top-0 bottom-8 w-16 bg-gradient-to-l from-[hsl(var(--bg))] to-transparent pointer-events-none z-10 transition-opacity duration-300 ${
              canScrollRight ? 'opacity-100' : 'opacity-0'
            }`}
          />

          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMoveHoverOnly}
            className={`flex gap-6 overflow-x-auto pt-6 pb-10 px-1 scrollbar-none select-none [perspective:1200px] ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab scroll-smooth snap-x snap-mandatory'
            }`}
          >
            <AnimatePresence mode="popLayout">
              {filteredCerts.map((cert) => (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.35 }}
                  className="w-[260px] sm:w-[300px] md:w-[330px] shrink-0 snap-start rounded-3xl glass overflow-hidden flex flex-col group transition-[transform,box-shadow] duration-500 ease-out hover:[transform:translateY(-8px)_rotateX(6deg)] hover:shadow-[0_30px_60px_-20px_hsl(var(--c-cyan)/0.45)]"
                >
                  {/* Certificate Image */}
                  <div className="w-full aspect-[1.6/1] bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden flex items-center justify-center">
                    {cert.image && !failedImages.includes(cert.id) ? (
                      <ResponsiveImage
                        sizes="(max-width: 639px) 260px, 320px"
                        src={cert.image}
                        alt={cert.title}
                        draggable={false}
                        onError={() => setFailedImages((prev) => [...prev, cert.id])}
                        className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    ) : (
                      <Award className="w-8 h-8 text-slate-400 dark:text-slate-600" />
                    )}

                    <div className="absolute top-3 right-3">
                      <span
                        className={`px-2 py-0.5 text-[10px] font-mono font-bold tracking-widest uppercase rounded-full shadow-sm ${
                          cert.type === 'ai'
                            ? 'bg-sky-600 text-white'
                            : 'bg-slate-900/80 dark:bg-slate-100/90 text-white dark:text-slate-900'
                        }`}
                      >
                        {cert.type === 'ai' ? 'AI' : 'PRO'}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400 font-bold">
                        {cert.date}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-1.5 mb-1 leading-tight line-clamp-2">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">
                        {cert.issuer}
                      </p>
                    </div>

                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (isDragging) e.preventDefault();
                        }}
                        className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800/60 text-[11px] font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors inline-flex items-center gap-1.5"
                      >
                        View Credential
                        <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
