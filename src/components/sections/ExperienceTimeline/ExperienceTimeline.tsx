import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { cvData } from '../../../data/cvData';

export const ExperienceTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section className="py-32 px-6 lg:px-20 relative" id="experience" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[var(--text-primary)]"></span>
            <span className="text-sm tracking-widest uppercase text-[var(--text-secondary)] font-mono">
              Career
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            Experience.
          </h2>
        </motion.div>

        <div className="relative pl-8 md:pl-0">
          {/* Vertical Line */}
          <motion.div 
            className="absolute left-0 md:left-1/3 top-0 bottom-0 w-[1px] bg-[var(--border-color)] origin-top hidden md:block"
            style={{ scaleY: scrollYProgress }}
          />
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[var(--border-color)] md:hidden"></div>

          <div className="flex flex-col gap-20">
            {cvData.experience.map((exp, index) => (
              <motion.div 
                key={exp.id}
                className="relative flex flex-col md:flex-row md:gap-12 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Node */}
                <div className="absolute left-[-36px] md:left-1/3 md:-ml-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--bg-color)] border border-[var(--text-primary)] group-hover:bg-[var(--text-primary)] transition-colors duration-300 z-10" />

                {/* Left Side (Meta) */}
                <div className="md:w-1/3 md:pr-12 md:text-right mb-4 md:mb-0 pt-1">
                  <span className="text-sm font-mono text-[var(--text-secondary)] block mb-1">
                    {exp.period}
                  </span>
                  <h4 className="font-medium text-[var(--text-primary)]">
                    {exp.company}
                  </h4>
                  <span className="text-sm text-[var(--text-secondary)] block mt-1">
                    {exp.location}
                  </span>
                </div>

                {/* Right Side (Content) */}
                <div className="md:w-2/3 md:pl-12">
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">
                    {exp.role}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-[var(--text-secondary)] relative pl-5 leading-relaxed font-light">
                        <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-[var(--border-color)] group-hover:bg-[var(--text-primary)] transition-colors duration-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
