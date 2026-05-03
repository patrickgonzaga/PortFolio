import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cvData, type Project } from '../../../data/cvData';
import { Modal } from '../../ui/Modal/Modal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-32 px-6 lg:px-20 border-t border-[var(--border-color)]" id="projects">
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
              Selected Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            Projects.
          </h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl text-lg font-light">
            Highlighting a few key integrations, platforms, and architectures I've built over the years.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cvData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer p-8 border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[var(--text-primary)] hover:bg-[var(--bg-color)] transition-all duration-300 flex flex-col h-full relative overflow-hidden"
            >
              {/* Subtle accent line on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--text-primary)] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              
              <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-[var(--text-secondary)] font-light mb-6 flex-grow">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-mono border border-[var(--border-color)] text-[var(--text-secondary)] rounded-full bg-[var(--bg-color)]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <Modal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        title={selectedProject?.title || ''}
      >
        {selectedProject && (
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-xs font-mono border border-[var(--border-color)] text-[var(--text-primary)] rounded-full bg-[var(--card-bg)]">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
              {selectedProject.fullDescription}
            </p>
          </div>
        )}
      </Modal>
    </section>
  );
};
