import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSkills } from './useSkills';

export const Skills: React.FC = () => {
  const { activeCategory, setActiveCategory, skillCategories } = useSkills();

  const activeGroup = skillCategories.find((cat) => cat.key === activeCategory);

  const getLevelDots = (level: string | undefined) => {
    if (!level) return null;
    let dots = 3;
    const lower = level.toLowerCase();
    if (lower === 'beginner') dots = 2;
    else if (lower === 'intermediate') dots = 4; // Map Intermediate to 4 dots for visual prominence
    else if (lower === 'advanced') dots = 4;
    else if (lower === 'expert') dots = 5;

    return (
      <div className="flex gap-1 items-center" aria-label={`Level: ${dots} out of 5`}>
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              i < dots 
                ? 'bg-accent-color/80 group-hover:bg-accent-color' 
                : 'bg-text-secondary/20 dark:bg-text-secondary/35'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden z-10 bg-card-bg/20">
      {/* Decorative Orbs for background depth */}
      <div className="bg-glow-orb w-[200px] h-[200px] md:w-[400px] md:h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-accent-color"></span>
            <span className="text-sm tracking-widest uppercase text-text-secondary font-mono">
              Expertise
            </span>
            <span className="w-8 h-[1px] bg-accent-color"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
            Technical Skills<span className="text-accent-color">.</span>
          </h2>
        </motion.div>

        {/* Categories Tab Toggles */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-full border border-border-color bg-card-bg/80 backdrop-blur-md gap-1">
            {skillCategories.map((category) => {
              const isActive = activeCategory === category.key;
              return (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`relative px-6 py-2.5 rounded-full text-xs font-semibold font-mono uppercase tracking-wider transition-colors duration-300 cursor-pointer ${
                    isActive ? 'text-bg-color' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className="absolute inset-0 bg-text-primary rounded-full z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Category Skill Grid Display */}
        <div className="min-h-[220px]">
          <AnimatePresence mode="wait">
            {activeGroup && (
              <motion.div
                key={activeGroup.key}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center"
              >
                <p className="text-sm text-text-secondary max-w-xl font-light mb-8 italic">
                  {activeGroup.description}
                </p>

                <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
                  {activeGroup.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ 
                        scale: 1.05,
                        borderColor: 'var(--accent-color)',
                        boxShadow: '0 4px 20px var(--glow-color)'
                      }}
                      className="px-5 py-3 rounded-2xl border border-border-color bg-card-bg/60 text-sm font-semibold tracking-wide text-text-primary flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 transition-all duration-300 relative overflow-hidden group cursor-default"
                    >
                      {/* Top border slide element */}
                      <span className="absolute top-0 left-0 w-full h-[1px] bg-accent-color scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                      
                      <span>{skill.name}</span>
                      {getLevelDots(skill.level)}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
export default Skills;
