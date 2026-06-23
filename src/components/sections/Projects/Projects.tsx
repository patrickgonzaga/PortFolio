import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cvData, type Project } from '../../../data/cvData';
import { Modal } from '../../ui/Modal/Modal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-32 px-6 lg:px-20 border-t border-border-color" id="projects">
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
              Selected Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
            Projects.
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl text-lg font-light">
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
              className="group cursor-pointer border border-border-color bg-card-bg hover:border-text-primary hover:bg-bg-color transition-all duration-300 flex flex-col h-full relative overflow-hidden"
            >
              {/* Subtle accent line on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-text-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-10" />
              
              {/* Hero Photo with Hover Effects */}
              {project.image && (
                <div className="w-full h-48 md:h-56 overflow-hidden relative border-b border-border-color group-hover:border-text-primary transition-colors duration-300">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale contrast-115 brightness-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle dark overlay that fades on hover */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              )}

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-text-primary mb-3 group-hover:text-blue-400 dark:group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary font-light mb-6 flex-grow leading-relaxed">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-mono border border-border-color text-text-secondary rounded-full bg-bg-color">
                      {tag}
                    </span>
                  ))}
                </div>
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
            {selectedProject.image && (
              <div className="w-full h-64 md:h-80 overflow-hidden border border-border-color">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-xs font-mono border border-border-color text-text-primary rounded-full bg-card-bg">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-lg leading-relaxed text-text-secondary">
              {selectedProject.fullDescription}
            </p>
          </div>
        )}
      </Modal>
    </section>
  );
};
