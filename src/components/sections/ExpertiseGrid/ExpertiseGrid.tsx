import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { cvData } from '../../../data/cvData';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

export const ExpertiseGrid: React.FC = () => {
  return (
    <section className="py-32 px-6 lg:px-20 bg-card-bg" id="expertise">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-text-primary"></span>
            <span className="text-sm tracking-widest uppercase text-text-secondary font-mono">
              Toolkit
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
            Expertise.
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl text-lg font-light">
            A comprehensive toolkit built over 15+ years of engineering robust enterprise platforms.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {cvData.skills.map((skillGroup, index) => (
            <motion.div 
              key={skillGroup.category} 
              className={`group border border-border-color bg-card-bg hover:border-text-primary hover:bg-bg-color transition-all duration-300 flex flex-col h-full overflow-hidden ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
              variants={itemVariants}
            >
              {/* Hero Photo with Hover Effects */}
              {skillGroup.image && (
                <div className="w-full h-40 md:h-48 overflow-hidden relative border-b border-border-color group-hover:border-text-primary transition-colors duration-300">
                  <img 
                    src={skillGroup.image} 
                    alt={skillGroup.category} 
                    className="w-full h-full object-cover grayscale contrast-115 brightness-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle dark overlay that fades on hover */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              )}

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-medium text-text-primary group-hover:text-blue-400 dark:group-hover:text-blue-300 transition-colors">
                    {skillGroup.category}
                  </h3>
                  <span className="font-mono text-xs text-text-secondary">0{index + 1}</span>
                </div>
                {skillGroup.progression ? (
                  <div className="flex flex-col gap-6 mt-4 flex-grow justify-end">
                    {skillGroup.progression.map((step, stepIndex) => (
                      <div key={step.level} className="flex gap-4 items-start relative group/step">
                        <div className="flex flex-col items-center h-full min-w-4 mt-1.5 relative">
                          <span className="w-2.5 h-2.5 rounded-full border border-border-color bg-bg-color group-hover:border-text-primary group-hover/step:bg-text-primary transition-colors duration-300 z-10" />
                          {stepIndex < skillGroup.progression!.length - 1 && (
                            <span className="absolute top-3 w-[1px] bg-border-color z-0" style={{ height: 'calc(100% + 1.5rem)' }} />
                          )}
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-semibold text-text-primary font-mono tracking-wide">
                            {step.level}
                          </h4>
                          <p className="text-xs text-text-secondary mt-1 font-light leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {skillGroup.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 text-sm border border-border-color text-text-secondary rounded-full bg-bg-color">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
