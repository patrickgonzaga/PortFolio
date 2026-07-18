import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { useSkills } from './useSkills';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: 'spring', 
      stiffness: 80, 
      damping: 15 
    } 
  }
};

export const Skills: React.FC = () => {
  const { skillCategories } = useSkills();

  return (
    <section id="skills" className="py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden z-10 bg-card-bg/10">
      {/* Decorative Orbs for background depth */}
      <div className="bg-glow-orb w-[300px] h-[300px] md:w-[600px] md:h-[600px] top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 opacity-[0.07]" />
      <div className="bg-glow-orb w-[250px] h-[250px] md:w-[500px] md:h-[500px] bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 opacity-[0.05]" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-left"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-accent-color"></span>
            <span className="text-sm tracking-widest uppercase text-text-secondary font-mono">
              Toolkit
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
            Expertise<span className="text-accent-color">.</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl text-base md:text-lg font-light leading-relaxed">
            A comprehensive toolkit built over 15+ years of engineering robust enterprise platforms.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((skillGroup, index) => (
            <motion.div 
              key={skillGroup.category} 
              variants={itemVariants}
              whileHover={{ 
                y: -6,
                borderColor: 'var(--accent-color)',
                boxShadow: '0 12px 40px var(--glow-color)'
              }}
              className={`group border border-border-color bg-card-bg/60 backdrop-blur-sm rounded-2xl transition-all duration-500 flex flex-col h-full overflow-hidden ${
                index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Image Header with Hover Scale */}
              {skillGroup.image && (
                <div className="w-full h-40 md:h-48 overflow-hidden relative border-b border-border-color/60">
                  <img 
                    src={skillGroup.image} 
                    alt={skillGroup.category} 
                    className="w-full h-full object-cover grayscale contrast-115 brightness-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-lg font-bold tracking-tight text-text-primary group-hover:text-accent-color transition-colors duration-300">
                    {skillGroup.category}
                  </h3>
                  <span className="font-mono text-xs text-text-secondary">0{index + 1}</span>
                </div>

                {/* Automation Progression Timeline vs Normal Skills Pills */}
                {skillGroup.progression ? (
                  <div className="flex flex-col gap-6 mt-4 flex-grow justify-end pl-1">
                    {skillGroup.progression.map((step, stepIndex) => (
                      <div key={step.level} className="flex gap-4 items-start relative group/step text-left">
                        <div className="flex flex-col items-center h-full min-w-[16px] mt-1.5 relative">
                          <span className="w-2.5 h-2.5 rounded-full border border-border-color bg-bg-color group-hover/step:border-accent-color group-hover/step:bg-accent-color transition-colors duration-300 z-10" />
                          {stepIndex < skillGroup.progression!.length - 1 && (
                            <span className="absolute top-3 w-[1px] bg-border-color z-0" style={{ height: 'calc(100% + 1.5rem)' }} />
                          )}
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-xs font-bold text-text-primary font-mono tracking-wide">
                            {step.level}
                          </h4>
                          <p className="text-[11px] text-text-secondary mt-1 font-light leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2 mt-auto text-left">
                    {skillGroup.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 text-xs border border-border-color text-text-secondary rounded-full bg-bg-color/40 backdrop-blur-sm group-hover:border-accent-color/30 group-hover:text-text-primary transition-all duration-300"
                      >
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

export default Skills;
