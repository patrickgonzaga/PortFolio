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
    <section className="py-32 px-6 lg:px-20 bg-[var(--card-bg)]" id="expertise">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[var(--text-primary)]"></span>
            <span className="text-sm tracking-widest uppercase text-[var(--text-secondary)] font-mono">
              Toolkit
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            Expertise.
          </h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl text-lg font-light">
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
              className={`p-8 border border-[var(--border-color)] bg-[var(--bg-color)] hover:border-[var(--text-secondary)] transition-colors duration-300 ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
              variants={itemVariants}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-medium text-[var(--text-primary)]">{skillGroup.category}</h3>
                <span className="font-mono text-xs text-[var(--text-secondary)]">0{index + 1}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 text-sm border border-[var(--border-color)] text-[var(--text-secondary)] rounded-full bg-[var(--card-bg)]">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
