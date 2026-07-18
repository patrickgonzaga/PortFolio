import React from 'react';
import { Modal } from '../../../components/ui/Modal/Modal';
import { type Project } from '../Projects.types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  selectedPlatform: 'n8n' | 'Zapier' | 'Make' | null;
  setSelectedPlatform: (platform: 'n8n' | 'Zapier' | 'Make') => void;
  availablePlatforms: ('n8n' | 'Zapier' | 'Make')[];
  activeCostTierIndex: number;
  setActiveCostTierIndex: (index: number) => void;
  displayedImage: string | undefined;
  displayedDescription: string | undefined;
  displayedTimeSavings: any; // Type matches cvData timeSavings
  stagesScrollRef: React.RefObject<HTMLDivElement | null>;
  isDraggingStages: boolean;
  handleStagesMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  selectedPlatform,
  setSelectedPlatform,
  availablePlatforms,
  activeCostTierIndex,
  setActiveCostTierIndex,
  displayedImage,
  displayedDescription,
  displayedTimeSavings,
  stagesScrollRef,
  isDraggingStages,
  handleStagesMouseDown,
}) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title}>
      <div className="flex flex-col gap-6 font-sans">
        
        {/* Platform selection tabs (e.g. n8n vs Zapier) */}
        {project.platforms && availablePlatforms.length > 1 && (
          <div className="flex flex-wrap gap-2 border-b border-border-color pb-4">
            {project.platforms.map((platform) => {
              const isAvailable = availablePlatforms.includes(platform.name);
              if (!isAvailable) return null;

              const isActive = selectedPlatform === platform.name;
              return (
                <button
                  key={platform.name}
                  onClick={() => setSelectedPlatform(platform.name)}
                  className={`px-4 py-1.5 text-xs font-mono tracking-wider uppercase border transition-all duration-300 rounded-full cursor-pointer ${
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

        {/* Screenshot display */}
        {displayedImage && (
          <a
            href={displayedImage}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-64 md:h-96 overflow-hidden border border-border-color rounded-2xl flex items-center justify-center bg-black/10 dark:bg-black/30 block group relative cursor-zoom-in"
            title="Click to view full image in a new tab"
          >
            <img
              src={displayedImage}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-102"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-xs font-mono bg-black/85 px-4 py-2 border border-white/10 tracking-wider uppercase rounded-full backdrop-blur-sm shadow-md">
                View Full Image
              </span>
            </div>
          </a>
        )}

        {/* Tag list */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="px-3 py-1 text-xs font-mono border border-border-color text-text-primary rounded-full bg-card-bg"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Full description */}
        <div className="text-sm md:text-base leading-relaxed text-text-secondary flex flex-col gap-4">
          {displayedDescription && displayedDescription.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="whitespace-pre-line">{paragraph}</p>
          ))}
        </div>

        {/* Time Savings Analytics section */}
        {displayedTimeSavings && (
          <div className="mt-6 border-t border-border-color pt-6">
            <h4 className="text-xs font-mono tracking-widest uppercase text-text-primary mb-4 flex items-center gap-2 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-color animate-pulse"></span>
              {project.platforms && selectedPlatform
                ? `${selectedPlatform} Workflow Time Savings Analysis`
                : 'Workflow Automation Savings Analysis'}
            </h4>
            
            {/* Top Cards metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 border border-border-color bg-card-bg/50 rounded-2xl">
                <span className="text-[10px] text-text-secondary font-mono uppercase tracking-wider">Manual Process</span>
                <div className="text-lg md:text-xl font-bold text-red-500/90 mt-1">{displayedTimeSavings.totalManual}</div>
              </div>
              <div className="p-4 border border-border-color bg-card-bg/50 rounded-2xl">
                <span className="text-[10px] text-text-secondary font-mono uppercase tracking-wider">
                  {project.platforms && selectedPlatform ? `${selectedPlatform} Automated` : 'Automated'}
                </span>
                <div className="text-lg md:text-xl font-bold text-green-500/90 mt-1">{displayedTimeSavings.totalAutomated}</div>
              </div>
              <div className="p-4 border border-accent-color/30 bg-accent-color/5 rounded-2xl">
                <span className="text-[10px] text-accent-color font-mono font-bold uppercase tracking-wider">Total Saved</span>
                <div className="text-lg md:text-xl font-bold text-accent-color mt-1">{displayedTimeSavings.percentSaved}</div>
              </div>
            </div>

            {/* Scrolling pipeline stages */}
            <div
              ref={stagesScrollRef}
              onMouseDown={handleStagesMouseDown}
              className={`overflow-x-auto pb-4 scrollbar-none select-none ${
                isDraggingStages ? 'cursor-grabbing' : 'cursor-grab'
              }`}
            >
              <div className="flex gap-4 w-max">
                {displayedTimeSavings.stages.map((stage: any) => (
                  <div 
                    key={stage.stage} 
                    className="flex-1 min-w-[190px] p-4 border border-border-color bg-card-bg/30 rounded-2xl relative flex flex-col justify-between hover:border-accent-color/40 transition-all duration-300"
                  >
                    <div>
                      <div className="text-xs font-mono font-bold text-text-primary mb-3 truncate">
                        {stage.stage}
                      </div>
                      <div className="flex justify-between items-center text-xs mb-1.5">
                        <span className="text-text-secondary font-light">Manual:</span>
                        <span className="text-red-500/80 font-mono font-semibold">{stage.manual}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs mb-2">
                        <span className="text-text-secondary font-light">Auto:</span>
                        <span className="text-green-500/80 font-mono font-semibold">{stage.automated}</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-border-color/30 flex justify-between items-center">
                      <span className="text-[9px] uppercase font-mono tracking-widest text-text-secondary">Reduction</span>
                      <span className="text-xs font-mono font-bold text-accent-color">{stage.saved}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-[10px] font-mono text-text-secondary text-right mt-1 opacity-70">
              ← Drag/Scroll to view all {displayedTimeSavings.stages.length} stages →
            </div>
          </div>
        )}

        {/* Deployment Costs section */}
        {project.deploymentCosts && (
          <div className="mt-6 border-t border-border-color pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h4 className="text-xs font-mono tracking-widest uppercase text-text-primary flex items-center gap-2 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-color animate-pulse"></span>
                Hosting & Deployment Cost Forecast
              </h4>
              
              {/* Cost Tier Buttons */}
              <div className="flex gap-1 bg-card-bg p-1 rounded-lg border border-border-color self-start sm:self-auto">
                {project.deploymentCosts.tiers.map((tier, idx) => (
                  <button
                    key={tier.name}
                    onClick={() => setActiveCostTierIndex(idx)}
                    className={`px-3 py-1 text-[10px] font-mono tracking-wider uppercase rounded transition-all duration-300 ${
                      activeCostTierIndex === idx
                        ? 'bg-text-primary text-bg-color font-bold shadow-sm'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {tier.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Cost Details for chosen tier */}
            {project.deploymentCosts.tiers[activeCostTierIndex] && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 border border-border-color bg-card-bg/30 rounded-2xl">
                    <span className="text-[10px] text-text-secondary font-mono uppercase tracking-wider">Self-Hosted (VPS / Docker)</span>
                    <div className="text-base md:text-lg font-bold text-green-500 mt-1">
                      {project.deploymentCosts.tiers[activeCostTierIndex].totalSelfHosted}
                    </div>
                  </div>
                  <div className="p-4 border border-accent-color/20 bg-accent-color/5 rounded-2xl">
                    <span className="text-[10px] text-accent-color font-mono uppercase tracking-wider">Fully Managed (SaaS / Cloud)</span>
                    <div className="text-base md:text-lg font-bold text-accent-color mt-1">
                      {project.deploymentCosts.tiers[activeCostTierIndex].totalManaged}
                    </div>
                  </div>
                </div>

                {/* Table details */}
                <div className="overflow-x-auto border border-border-color rounded-2xl bg-card-bg/25">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border-color bg-card-bg/60">
                        <th className="p-3 text-[10px] font-mono tracking-wider uppercase text-text-primary">Resource</th>
                        <th className="p-3 text-[10px] font-mono tracking-wider uppercase text-text-primary">Self-Hosted</th>
                        <th className="p-3 text-[10px] font-mono tracking-wider uppercase text-text-primary">Managed Cloud</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-color/25">
                      {project.deploymentCosts.tiers[activeCostTierIndex].breakdown.map((item, idx) => (
                        <tr key={idx} className="hover:bg-card-bg/20 transition-colors">
                          <td className="p-3">
                            <div className="text-xs font-mono font-bold text-text-primary">{item.service}</div>
                            {item.notes && <div className="text-[10px] text-text-secondary font-light mt-0.5">{item.notes}</div>}
                          </td>
                          <td className="p-3 text-xs text-green-500 font-mono whitespace-nowrap">{item.selfHosted}</td>
                          <td className="p-3 text-xs text-accent-color font-mono whitespace-nowrap">{item.managed}</td>
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
    </Modal>
  );
};
export default ProjectModal;
