import { cvData } from '../../data/cvData';
import type { SkillGroup } from './Skills.types';

export const useSkills = () => {
  const skillCategories: SkillGroup[] = cvData.skills;

  return {
    skillCategories,
  };
};
