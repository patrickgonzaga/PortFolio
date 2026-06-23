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
            <span className="w-8 h-[1px] bg-text-primary"></span>
            <span className="text-sm tracking-widest uppercase text-text-secondary font-mono">
              Career
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
            Experience.
          </h2>
        </motion.div>

        <div className="relative pl-8 md:pl-0">
          {/* Vertical Line */}
          <motion.div
            className="absolute left-0 md:left-1/3 top-0 bottom-0 w-[1px] bg-border-color origin-top hidden md:block"
            style={{ scaleY: scrollYProgress }}
          />
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border-color md:hidden"></div>

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
                <div className="absolute left-[-36px] md:left-1/3 md:-ml-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-bg-color border border-text-primary group-hover:bg-text-primary transition-colors duration-300 z-10" />

                {/* Left Side (Meta) */}
                <div className="md:w-1/3 md:pr-12 md:text-right mb-4 md:mb-0 pt-1">
                  <span className="text-sm font-mono text-text-secondary block mb-1">
                    {exp.period}
                  </span>
                  <h4 className="font-medium text-text-primary">
                    {exp.company}
                  </h4>
                  <span className="text-sm text-text-secondary inline-flex items-center gap-2 mt-1 md:justify-end justify-start w-full">
                    {exp.flag && (
                      <img
                        src={`https://flagcdn.com/${exp.flag}.svg`}
                        alt={`${exp.location}`}
                        className="w-4 h-3 object-cover rounded-[1px] shadow-[0_1px_2px_rgba(0,0,0,0.1)] border border-border-color"
                      />
                    )}
                    <span>{exp.location}</span>
                  </span>
                </div>

                {/* Right Side (Content) */}
                <div className="md:w-2/3 md:pl-12">
                  <h3 className="text-2xl font-semibold text-text-primary mb-6">
                    {exp.role}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-text-secondary relative pl-5 leading-relaxed font-light">
                        <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-border-color group-hover:bg-text-primary transition-colors duration-300" />
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
