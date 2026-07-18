import React from 'react';
import { motion } from 'framer-motion';
import { useProjects } from './useProjects';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';

export const Projects: React.FC = () => {
  const {
    personalProjects,
    enterpriseProjects,
    selectedProject,
    activeCostTierIndex,
    setActiveCostTierIndex,
    selectedPlatform,
    setSelectedPlatform,
    availablePlatforms,
    stagesScrollRef,
    isDraggingStages,
    handleStagesMouseDown,
    selectProject,
    closeProjectDetails,
    displayedImage,
    displayedDescription,
    displayedTimeSavings,
  } = useProjects();

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 border-t border-border-color relative z-10" id="projects">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-accent-color"></span>
            <span className="text-sm tracking-widest uppercase text-text-secondary font-mono">
              Selected Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
            Projects Portfolio<span className="text-accent-color">.</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl text-lg font-light leading-relaxed">
            A showcase of enterprise systems integration, low-code automations, and custom AI agent workflows designed to streamline operations.
          </p>
        </motion.div>

        {/* Enterprise & Client Solutions Section */}
        {enterpriseProjects.length > 0 && (
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2 mb-10"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-color animate-pulse"></span>
                <h3 className="text-lg font-mono tracking-wider uppercase text-text-primary font-bold">
                  Enterprise Solutions
                </h3>
              </div>
              <p className="text-text-secondary font-light max-w-xl text-sm sm:text-base">
                Scalable architectures, cloud migrations, and workflow digitizations built for corporate platforms.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {enterpriseProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onClick={() => selectProject(project)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Personal & AI Automation Section */}
        {personalProjects.length > 0 && (
          <div className="mb-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2 mb-10"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-color animate-pulse"></span>
                <h3 className="text-lg font-mono tracking-wider uppercase text-text-primary font-bold">
                  Personal & AI Workflows
                </h3>
              </div>
              <p className="text-text-secondary font-light max-w-xl text-sm sm:text-base">
                Self-initiated pipelines, multi-step agent workflows, and API sync integrations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {personalProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onClick={() => selectProject(project)}
                />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Interactive Detail Modal Popup */}
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={closeProjectDetails}
        project={selectedProject}
        selectedPlatform={selectedPlatform}
        setSelectedPlatform={setSelectedPlatform}
        availablePlatforms={availablePlatforms}
        activeCostTierIndex={activeCostTierIndex}
        setActiveCostTierIndex={setActiveCostTierIndex}
        displayedImage={displayedImage}
        displayedDescription={displayedDescription}
        displayedTimeSavings={displayedTimeSavings}
        stagesScrollRef={stagesScrollRef}
        isDraggingStages={isDraggingStages}
        handleStagesMouseDown={handleStagesMouseDown}
      />
    </section>
  );
};
export default Projects;
