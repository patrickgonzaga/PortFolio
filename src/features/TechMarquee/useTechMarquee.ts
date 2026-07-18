import type { TechItem } from './TechMarquee.types';

export const useTechMarquee = () => {
  const techItems: TechItem[] = [
    { name: 'React', category: 'frontend' },
    { name: 'TypeScript', category: 'frontend' },
    { name: 'C#', category: 'backend' },
    { name: 'ASP.NET Core', category: 'backend' },
    { name: 'Azure Cloud', category: 'cloud' },
    { name: 'AWS Cloud', category: 'cloud' },
    { name: 'SQL Server', category: 'database' },
    { name: 'PostgreSQL', category: 'database' },
    { name: 'n8n Agents', category: 'automation' },
    { name: 'Zapier Automation', category: 'automation' },
    { name: 'Framer Motion', category: 'frontend' },
  ];

  return {
    techItems,
  };
};
