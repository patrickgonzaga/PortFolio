import { useState } from 'react';
import { cvData, type Project } from '../../data/cvData';

export const useProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return {
    projects: cvData.projects,
    selectedProject,
    selectProject: (project: Project) => setSelectedProject(project),
    closeProjectDetails: () => setSelectedProject(null),
  };
};
