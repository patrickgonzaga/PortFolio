import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cvData } from '../../../data/cvData';
import { Award, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'professional'>('all');
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

  const tabs = [
    { id: 'all', label: 'All Certifications' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'professional', label: 'Professional' }
  ] as const;

  const filteredCerts = cvData.certifications
    .filter((cert) => (activeTab === 'all' ? true : cert.type === activeTab))
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
      
      // If we are actively dragging or running inertia, cancel it
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
    if (e.button !== 0) return; // Left click only
    
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
  }, [filteredCerts]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
    const timer = setTimeout(checkScroll, 100);
    return () => clearTimeout(timer);
  }, [activeTab]);

  useEffect(() => {
    return () => {
      stopAutoScroll();
      if (inertiaFrameRef.current) {
        cancelAnimationFrame(inertiaFrameRef.current);
      }
    };
  }, []);

  return (
    <section id="certifications" className="py-24 px-6 lg:px-20 relative bg-bg-color">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-text-secondary"></span>
            <span className="text-sm tracking-widest uppercase text-text-secondary font-mono">
              Continuous Learning
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-8">
            Certifications
          </h2>

          {/* Filtering Tabs & Carousel Controls */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-2 border-b border-border-color/30 pb-4">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-5 py-2.5 rounded-full text-[11px] font-mono tracking-widest uppercase transition-colors duration-300 ${
                      isActive
                        ? 'text-bg-color font-bold'
                        : 'text-text-secondary hover:text-text-primary border border-border-color/60'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabPill"
                        className="absolute inset-0 bg-text-primary rounded-full z-[-1]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Navigation buttons for horizontal carousel */}
            {filteredCerts.length > 0 && (
              <div className="flex items-center gap-2 self-end md:self-auto">
                <button
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  className={`p-2 rounded-full border border-border-color/60 transition-all duration-300 ${
                    canScrollLeft
                      ? 'text-text-primary hover:bg-text-primary hover:text-bg-color cursor-pointer'
                      : 'text-text-secondary/30 border-border-color/20 cursor-not-allowed'
                  }`}
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  className={`p-2 rounded-full border border-border-color/60 transition-all duration-300 ${
                    canScrollRight
                      ? 'text-text-primary hover:bg-text-primary hover:text-bg-color cursor-pointer'
                      : 'text-text-secondary/30 border-border-color/20 cursor-not-allowed'
                  }`}
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Certifications Carousel Container */}
        <div className="relative group/carousel mt-10">
          {/* Left Fade Overlay */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-bg-color to-transparent pointer-events-none z-10 transition-opacity duration-300 ${
              canScrollLeft ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          {/* Right Fade Overlay */}
          <div
            className={`absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-bg-color to-transparent pointer-events-none z-10 transition-opacity duration-300 ${
              canScrollRight ? 'opacity-100' : 'opacity-0'
            }`}
          />

          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMoveHoverOnly}
            className={`flex gap-6 overflow-x-auto pb-8 scrollbar-none select-none ${
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
                  transition={{ duration: 0.4 }}
                  className="w-[280px] sm:w-[340px] md:w-[380px] shrink-0 snap-start glass-panel rounded-2xl flex flex-col h-full hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden border border-border-color/60 hover:border-text-primary/30"
                >
                  {/* Top visual block: Image or Default Card */}
                  <div className="w-full aspect-[1.6/1] bg-black/5 border-b border-border-color/30 relative overflow-hidden flex items-center justify-center">
                    {cert.image && !failedImages.includes(cert.id) ? (
                      <img
                        src={cert.image}
                        alt={cert.title}
                        draggable={false}
                        onError={() => setFailedImages((prev) => [...prev, cert.id])}
                        className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    ) : (
                      /* Beautiful Mini Default Certificate Frame */
                      <div className={`w-full h-full p-4 flex flex-col justify-between text-center relative ${
                        cert.type === 'ai'
                          ? 'bg-gradient-to-br from-indigo-950/10 via-bg-color to-purple-950/10'
                          : 'bg-gradient-to-br from-amber-950/5 via-bg-color to-stone-900/10'
                      }`}>
                        {/* Background mesh lines */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none" />
                        
                        {/* Tiny emblem */}
                        <div className="flex flex-col items-center gap-1 z-10 pt-1">
                          <Award className={`w-5 h-5 ${cert.type === 'ai' ? 'text-indigo-400 animate-pulse' : 'text-amber-600'}`} />
                          <span className="text-[7px] uppercase tracking-[0.25em] font-mono text-text-secondary">
                            Verified Achievement
                          </span>
                        </div>

                        {/* Title & Name */}
                        <div className="flex flex-col gap-0.5 z-10 px-2 my-1">
                          <h4 className="text-xs font-bold text-text-primary line-clamp-2 leading-tight">
                            {cert.title}
                          </h4>
                          <span className="text-[8px] font-mono text-text-secondary">
                            Patrick Gonzaga
                          </span>
                        </div>

                        {/* Mini Footer */}
                        <div className="flex justify-between items-center text-[7px] font-mono text-text-secondary border-t border-border-color/30 pt-1.5 z-10">
                          <span>{cert.issuer}</span>
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3 z-20">
                      {cert.type === 'ai' ? (
                        <span className="px-2 py-0.5 text-[8px] font-mono tracking-widest uppercase bg-indigo-500/90 text-white border border-indigo-500 rounded-full font-semibold shadow-sm">
                          AI
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 text-[8px] font-mono tracking-widest uppercase bg-text-primary/80 text-bg-color border border-border-color rounded-full shadow-sm">
                          PRO
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom Info Block */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] tracking-widest uppercase text-text-secondary font-mono mb-2">
                        {cert.date}
                      </div>
                      <h3 className="text-lg font-bold text-text-primary mb-1.5 leading-tight line-clamp-2 group-hover:text-text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-text-secondary font-mono">
                        {cert.issuer}
                      </p>
                    </div>

                    {cert.url && cert.url !== '#' && (
                      <div className="mt-5 pt-5 border-t border-border-color/50">
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            if (isDragging) e.preventDefault();
                          }}
                          className="text-[10px] uppercase tracking-widest font-mono text-text-primary hover:text-text-secondary transition-colors inline-flex items-center gap-1.5 group/link"
                        >
                          View Credential
                          <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>
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

