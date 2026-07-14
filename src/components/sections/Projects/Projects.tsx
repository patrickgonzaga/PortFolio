import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cvData, type Project } from '../../../data/cvData';
import { Modal } from '../../ui/Modal/Modal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCostTierIndex, setActiveCostTierIndex] = useState<number>(0);
  const [selectedPlatform, setSelectedPlatform] = useState<'n8n' | 'Zapier' | 'Make' | null>(null);
  const [availablePlatforms, setAvailablePlatforms] = useState<('n8n' | 'Zapier' | 'Make')[]>([]);

  const stagesScrollRef = React.useRef<HTMLDivElement>(null);
  const [isDraggingStages, setIsDraggingStages] = useState(false);
  const stagesStartXRef = React.useRef(0);
  const stagesScrollLeftRef = React.useRef(0);
  const isStagesDownRef = React.useRef(false);

  const handleWindowStagesMouseMove = React.useCallback((e: MouseEvent) => {
    if (!isStagesDownRef.current || !stagesScrollRef.current) return;
    const x = e.pageX;
    const walk = (x - stagesStartXRef.current) * 1.5;
    stagesScrollRef.current.scrollLeft = stagesScrollLeftRef.current - walk;
  }, []);

  const handleWindowStagesMouseUp = React.useCallback(() => {
    isStagesDownRef.current = false;
    setIsDraggingStages(false);
    window.removeEventListener('mousemove', handleWindowStagesMouseMove);
    window.removeEventListener('mouseup', handleWindowStagesMouseUp);
  }, [handleWindowStagesMouseMove]);

  const handleStagesMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return; // Left click only
    if (!stagesScrollRef.current) return;
    
    isStagesDownRef.current = true;
    setIsDraggingStages(true);
    
    stagesStartXRef.current = e.pageX;
    stagesScrollLeftRef.current = stagesScrollRef.current.scrollLeft;

    window.addEventListener('mousemove', handleWindowStagesMouseMove);
    window.addEventListener('mouseup', handleWindowStagesMouseUp);
  };

  React.useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', handleWindowStagesMouseMove);
      window.removeEventListener('mouseup', handleWindowStagesMouseUp);
    };
  }, [handleWindowStagesMouseMove, handleWindowStagesMouseUp]);

  const currentPlatformData = selectedProject?.platforms?.find(p => p.name === selectedPlatform);
  const displayedImage = currentPlatformData?.image || selectedProject?.image;
  const displayedDescription = currentPlatformData?.description || selectedProject?.fullDescription;
  const displayedTimeSavings = currentPlatformData?.timeSavings || selectedProject?.timeSavings;

  React.useEffect(() => {
    const platforms = selectedProject?.platforms;
    if (platforms) {
      const checkPlatformImages = async () => {
        const checks = await Promise.all(
          platforms.map(async (platform) => {
            try {
              const res = await fetch(platform.image, { method: 'HEAD' });
              if (res.ok) {
                return { name: platform.name, ok: true };
              }
              if (res.status !== 404) {
                const getRes = await fetch(platform.image, { method: 'GET' });
                return { name: platform.name, ok: getRes.ok };
              }
              return { name: platform.name, ok: false };
            } catch {
              try {
                const getRes = await fetch(platform.image, { method: 'GET' });
                return { name: platform.name, ok: getRes.ok };
              } catch {
                return { name: platform.name, ok: false };
              }
            }
          })
        );
        const active = checks
          .filter(c => c.ok)
          .map(c => c.name as 'n8n' | 'Zapier' | 'Make');
        setAvailablePlatforms(active);
        if (active.length > 0) {
          setSelectedPlatform(active[0]);
        } else {
          setSelectedPlatform(null);
        }
      };
      checkPlatformImages();
    } else {
      setAvailablePlatforms([]);
      setSelectedPlatform(null);
    }
  }, [selectedProject]);

  const personalProjects = cvData.projects.filter(p => p.type === 'personal');
  const enterpriseProjects = cvData.projects.filter(p => p.type === 'enterprise');

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setActiveCostTierIndex(0);
  };

  const renderProjectCard = (project: Project, index: number) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onClick={() => handleProjectClick(project)}
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
            className="w-full h-full object-cover object-top grayscale contrast-115 brightness-90 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-100 transition-all duration-500 ease-out"
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
  );

  return (
    <section className="py-32 px-6 lg:px-20 border-t border-border-color" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
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

        {/* Section 1: Enterprise & Client Solutions */}
        {enterpriseProjects.length > 0 && (
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2 mb-10"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-text-secondary"></span>
                <h3 className="text-lg font-mono tracking-wider uppercase text-text-primary">
                  Enterprise & Client Solutions
                </h3>
              </div>
              <p className="text-text-secondary font-light max-w-xl">
                Production-grade platforms, cloud integrations, and automation suites built for corporate environments.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {enterpriseProjects.map((project, index) => renderProjectCard(project, index))}
            </div>
          </div>
        )}
        

        {/* Section 2: Personal & AI Automation */}
        {personalProjects.length > 0 && (
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2 mb-10"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                <h3 className="text-lg font-mono tracking-wider uppercase text-text-primary">
                  Personal & AI Automation
                </h3>
              </div>
              <p className="text-text-secondary font-light max-w-xl">
                Self-initiated pipelines, agentic workflows, and architectures built to explore new technology paradigms.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {personalProjects.map((project, index) => renderProjectCard(project, index))}
            </div>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <Modal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        title={selectedProject?.title || ''}
      >
        {selectedProject && (
          <div className="flex flex-col gap-6">
            {/* Platform Selector Tabs */}
            {selectedProject.platforms && availablePlatforms.length > 1 && (
              <div className="flex flex-wrap gap-2 border-b border-border-color/30 pb-4">
                {selectedProject.platforms.map((platform) => {
                  const isAvailable = availablePlatforms.includes(platform.name);
                  if (!isAvailable) return null;

                  const isActive = selectedPlatform === platform.name;
                  return (
                    <button
                      key={platform.name}
                      onClick={() => setSelectedPlatform(platform.name)}
                      className={`px-4 py-2 text-xs font-mono tracking-wider uppercase border transition-all duration-300 rounded-full cursor-pointer ${
                        isActive
                          ? 'bg-text-primary text-bg-color border-text-primary font-bold'
                          : 'border-border-color text-text-secondary hover:border-text-primary hover:text-text-primary'
                      }`}
                    >
                      {platform.name}
                    </button>
                  );
                })}
              </div>
            )}

            {displayedImage && (
              <a 
                href={displayedImage} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full h-64 md:h-96 overflow-hidden border border-border-color flex items-center justify-center bg-black/10 dark:bg-black/30 block group relative cursor-zoom-in"
                title="Click to view full image in a new tab"
              >
                <img 
                  src={displayedImage} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xs font-mono bg-black/80 px-4 py-2 border border-white/10 tracking-wider uppercase backdrop-blur-sm">
                    View Full Image
                  </span>
                </div>
              </a>
            )}
            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-xs font-mono border border-border-color text-text-primary rounded-full bg-card-bg">
                  {tag}
                </span>
              ))}
            </div>
            <div className="text-lg leading-relaxed text-text-secondary flex flex-col gap-4">
              {displayedDescription && displayedDescription.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="whitespace-pre-line">{paragraph}</p>
              ))}
            </div>

            {displayedTimeSavings && (
              <div className="mt-6 border-t border-border-color pt-6">
                <h4 className="text-xs font-mono tracking-widest uppercase text-text-secondary mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                  {selectedProject.platforms && selectedPlatform
                    ? `${selectedPlatform} Workflow Time Savings Analysis`
                    : selectedProject.id === 'altomatiko'
                    ? 'Pipeline Time Savings Analysis'
                    : 'Time Savings Analysis'}
                </h4>
                
                {/* Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  <div className="p-3 border border-border-color bg-black/5 dark:bg-white/5 rounded-xl">
                    <span className="text-[10px] text-text-secondary font-mono">Manual Workflow</span>
                    <div className="text-base md:text-lg font-bold text-red-400/90 mt-1">{displayedTimeSavings.totalManual}</div>
                  </div>
                  <div className="p-3 border border-border-color bg-black/5 dark:bg-white/5 rounded-xl">
                    <span className="text-[10px] text-text-secondary font-mono">
                      {selectedProject.platforms && selectedPlatform ? `${selectedPlatform} Automated` : 'Automated'}
                    </span>
                    <div className="text-base md:text-lg font-bold text-green-400/90 mt-1">{displayedTimeSavings.totalAutomated}</div>
                  </div>
                  <div className="p-3 border border-blue-500/20 bg-blue-500/10 rounded-xl">
                    <span className="text-[10px] text-blue-400 font-mono font-bold">Total Saved</span>
                    <div className="text-base md:text-lg font-bold text-blue-300 mt-1">{displayedTimeSavings.percentSaved}</div>
                  </div>
                </div>

                {/* Horizontal Scrollable Stages Timeline */}
                <div 
                  ref={stagesScrollRef}
                  onMouseDown={handleStagesMouseDown}
                  className={`overflow-x-auto pb-2 scrollbar-none select-none ${
                    isDraggingStages ? 'cursor-grabbing' : 'cursor-grab'
                  }`}
                >
                  <div 
                    className="flex gap-4 w-max select-none"
                  >
                    {displayedTimeSavings.stages.map((stage) => (
                      <div key={stage.stage} className="flex-1 min-w-[170px] p-4 border border-border-color bg-card-bg rounded-xl relative flex flex-col justify-between hover:border-text-primary/30 transition-all duration-300">
                        <div>
                          <div className="text-xs font-mono font-bold text-text-primary mb-3">
                            {stage.stage}
                          </div>
                          <div className="flex justify-between items-center text-xs mb-1.5">
                            <span className="text-text-secondary font-light">Manual:</span>
                            <span className="text-red-400/95 font-mono">{stage.manual}</span>
                          </div>
                          <div className="flex justify-between items-center text-xs mb-2">
                            <span className="text-text-secondary font-light">Auto:</span>
                            <span className="text-green-400/95 font-mono">{stage.automated}</span>
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-border-color/30 flex justify-between items-center">
                          <span className="text-[9px] uppercase font-mono tracking-widest text-text-secondary">Saved</span>
                          <span className="text-xs font-mono font-bold text-blue-400">{stage.saved}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-[9px] font-mono text-text-secondary text-right mt-1.5 opacity-60">
                  ← Scroll to view all {displayedTimeSavings.stages.length} stages →
                </div>
              </div>
            )}

            {selectedProject.deploymentCosts && (
              <div className="mt-6 border-t border-border-color pt-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <h4 className="text-xs font-mono tracking-widest uppercase text-text-secondary flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                    Production Deployment Cost Estimate
                  </h4>
                  
                  {/* Tier selector tabs */}
                  <div className="flex gap-1.5 bg-black/10 dark:bg-white/5 p-1 rounded-lg border border-border-color self-start sm:self-auto">
                    {selectedProject.deploymentCosts.tiers.map((tier, idx) => (
                      <button
                        key={tier.name}
                        onClick={() => setActiveCostTierIndex(idx)}
                        className={`px-3 py-1 text-[10px] font-mono tracking-wider uppercase rounded transition-colors ${
                          activeCostTierIndex === idx
                            ? 'bg-text-primary text-bg-color font-bold'
                            : 'text-text-secondary hover:text-text-primary'
                        }`}
                      >
                        {tier.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Cost Summary Cards for selected tier */}
                {selectedProject.deploymentCosts.tiers[activeCostTierIndex] && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      <div className="p-3 border border-border-color bg-black/5 dark:bg-white/5 rounded-xl">
                        <span className="text-[10px] text-text-secondary font-mono">Self-Hosted / VPS Option</span>
                        <div className="text-base md:text-lg font-bold text-green-400/90 mt-1">
                          {selectedProject.deploymentCosts.tiers[activeCostTierIndex].totalSelfHosted}
                        </div>
                      </div>
                      <div className="p-3 border border-blue-500/20 bg-blue-500/5 rounded-xl">
                        <span className="text-[10px] text-blue-400 font-mono">Fully Managed / SaaS Option</span>
                        <div className="text-base md:text-lg font-bold text-blue-300 mt-1">
                          {selectedProject.deploymentCosts.tiers[activeCostTierIndex].totalManaged}
                        </div>
                      </div>
                    </div>

                    {/* Table breakdown */}
                    <div className="overflow-x-auto border border-border-color rounded-xl bg-card-bg">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-border-color bg-black/10 dark:bg-white/5">
                            <th className="p-3 text-[10px] font-mono tracking-wider uppercase text-text-primary">Service</th>
                            <th className="p-3 text-[10px] font-mono tracking-wider uppercase text-text-primary">Self-Hosted / VPS</th>
                            <th className="p-3 text-[10px] font-mono tracking-wider uppercase text-text-primary">Managed / Cloud</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border-color/30">
                          {selectedProject.deploymentCosts.tiers[activeCostTierIndex].breakdown.map((item, idx) => (
                            <tr key={idx} className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                              <td className="p-3">
                                <div className="text-xs font-mono font-bold text-text-primary">{item.service}</div>
                                {item.notes && <div className="text-[10px] text-text-secondary font-light mt-0.5">{item.notes}</div>}
                              </td>
                              <td className="p-3 text-xs text-green-400/95 font-mono whitespace-nowrap">{item.selfHosted}</td>
                              <td className="p-3 text-xs text-blue-300 font-mono whitespace-nowrap">{item.managed}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};
