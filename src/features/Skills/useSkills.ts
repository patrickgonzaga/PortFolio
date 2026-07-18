import { useState } from 'react';
import type { SkillCategoryGroup, SkillCategoryKey } from './Skills.types';

export const useSkills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategoryKey>('frontend');

  /*
   * PLACEHOLDER CONTENT COMMENTS FOR PATRICK:
   * You can edit this skills object to change, add, or remove items.
   * Levels are optional and can be updated to fit your skill proficiency.
   */
  const skillCategories: SkillCategoryGroup[] = [
    {
      key: 'frontend',
      label: 'Frontend Development',
      description: 'Building responsive, fast, and visual web interfaces following strict UX details.',
      skills: [
        { name: 'React', level: 'Beginner' },
        { name: 'TypeScript', level: 'Beginner' },
        { name: 'JavaScript (ES6+)', level: 'Expert' },
        { name: 'Tailwind CSS', level: 'Beginner' },
        { name: 'HTML5 & CSS3', level: 'Expert' },
        { name: 'Retool Portals', level: 'Advanced' },
        { name: 'TIBCO Spotfire', level: 'Advanced' }
      ]
    },
    {
      key: 'backend',
      label: 'Backend & Databases',
      description: 'Designing transactional architectures, REST/OpenAPI contracts, and robust databases.',
      skills: [
        { name: 'C# / .NET', level: 'Expert' },
        { name: 'ASP.NET Core', level: 'Expert' },
        { name: 'EF Core & Dapper', level: 'Expert' },
        { name: 'RESTful API Design', level: 'Expert' },
        { name: 'SQL Server', level: 'Expert' },
        { name: 'PostgreSQL', level: 'Intermediate' },
        { name: 'Oracle SQL', level: 'Advanced' },
        { name: 'ABAP (SAP)', level: 'Advanced' }
      ]
    },
    {
      key: 'tools',
      label: 'Tools & Automations',
      description: 'Connecting enterprise applications, building agentic automations, and deploying Cloud infrastructure.',
      skills: [
        { name: 'n8n Workflow Engine', level: 'Beginner' },
        { name: 'Zapier Automation', level: 'Beginner' },
        { name: 'Cursor AI', level: 'Intermediate' },
        { name: 'Azure Cloud Services', level: 'Intermediate' },
        { name: 'AWS Cloud Services', level: 'Beginner' },
        { name: 'Azure DevOps', level: 'Intermediate' },
        { name: 'Buildkite CI/CD', level: 'Intermediate' },
        { name: 'Git', level: 'Expert' }
      ]
    }
  ];

  return {
    activeCategory,
    setActiveCategory,
    skillCategories,
  };
};
