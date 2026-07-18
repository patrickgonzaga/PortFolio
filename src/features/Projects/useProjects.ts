import { useState, useEffect, useRef, useCallback } from 'react';
import { cvData, type Project } from '../../data/cvData';

export const useProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCostTierIndex, setActiveCostTierIndex] = useState<number>(0);
  const [selectedPlatform, setSelectedPlatform] = useState<'n8n' | 'Zapier' | 'Make' | null>(null);
  const [availablePlatforms, setAvailablePlatforms] = useState<('n8n' | 'Zapier' | 'Make')[]>([]);

  // Filter project categories
  const personalProjects = cvData.projects.filter(p => p.type === 'personal');
  const enterpriseProjects = cvData.projects.filter(p => p.type === 'enterprise');

  // Stages horizontal scroll tracking
  const stagesScrollRef = useRef<HTMLDivElement>(null);
  const [isDraggingStages, setIsDraggingStages] = useState(false);
  const stagesStartXRef = useRef(0);
  const stagesScrollLeftRef = useRef(0);
  const isStagesDownRef = useRef(false);

  const handleWindowStagesMouseMove = useCallback((e: MouseEvent) => {
    if (!isStagesDownRef.current || !stagesScrollRef.current) return;
    const x = e.pageX;
    const walk = (x - stagesStartXRef.current) * 1.5;
    stagesScrollRef.current.scrollLeft = stagesScrollLeftRef.current - walk;
  }, []);

  const handleWindowStagesMouseUp = useCallback(() => {
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

  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', handleWindowStagesMouseMove);
      window.removeEventListener('mouseup', handleWindowStagesMouseUp);
    };
  }, [handleWindowStagesMouseMove, handleWindowStagesMouseUp]);

  // Synchronize available platforms when the selected project changes
  useEffect(() => {
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

  const selectProject = (project: Project) => {
    setSelectedProject(project);
    setActiveCostTierIndex(0);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  const currentPlatformData = selectedProject?.platforms?.find(p => p.name === selectedPlatform);
  const displayedImage = currentPlatformData?.image || selectedProject?.image;
  const displayedDescription = currentPlatformData?.description || selectedProject?.fullDescription;
  const displayedTimeSavings = currentPlatformData?.timeSavings || selectedProject?.timeSavings;

  return {
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
  };
};
