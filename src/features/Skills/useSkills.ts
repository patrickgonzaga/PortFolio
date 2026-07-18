import { cvData } from '../../data/cvData';
import type { SkillCategoryGroup } from './Skills.types';

export const useSkills = () => {
  const skillCategories: SkillCategoryGroup[] = cvData.skills;

  return {
    skillCategories,
  };
};
