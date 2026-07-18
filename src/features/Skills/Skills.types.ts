export type SkillCategoryKey = 'frontend' | 'backend' | 'tools';

export interface SkillItem {
  name: string;
  level?: string; // e.g., 'Expert', 'Intermediate'
}

export interface SkillCategoryGroup {
  key: SkillCategoryKey;
  label: string;
  description: string;
  skills: SkillItem[];
}

export interface SkillsProps {
  // Option to extend later
}
