import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../../../data/cvData';

export const Certifications: React.FC = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cvData.certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="glass-panel p-8 rounded-2xl flex flex-col h-full hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex-1">
                <div className="text-xs tracking-widest uppercase text-text-secondary font-mono mb-3">
                  {cert.date}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {cert.issuer}
                </p>
              </div>
              
              {cert.url && cert.url !== "#" && (
                <div className="mt-6 pt-6 border-t border-border-color">
                  <a 
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-widest font-mono text-text-primary hover:text-text-secondary transition-colors inline-flex items-center gap-2"
                  >
                    View Credential
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
