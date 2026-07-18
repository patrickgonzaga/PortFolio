export interface SkillProgressionItem {
  level: string;
  description: string;
}

export interface SkillCategoryGroup {
  category: string;
  skills: string[];
  image?: string;
  progression?: SkillProgressionItem[];
}

export interface SkillsProps {
  // Option to extend later
}
