import {
  TbBrandCSharp,
  TbBrandAzure,
  TbBrandOpenai,
  TbBrandGit,
  TbBrandDocker,
} from 'react-icons/tb';
import {
  SiDotnet,
  SiPostgresql,
  SiSap,
  SiRetool,
  SiN8N,
  SiTypescript,
  SiReact,
  SiJavascript,
  SiGooglegemini,
  SiCursor,
} from 'react-icons/si';
import { DiMsqlServer, DiRedis } from 'react-icons/di';
import { VscAzure, VscDatabase } from 'react-icons/vsc';

import type { TechItem } from './TechMarquee.types';

export const useTechMarquee = () => {
  const techItems: TechItem[] = [
    { name: 'C#', icon: TbBrandCSharp, color: '#512BD4' },
    { name: '.NET / ASP.NET Core', icon: SiDotnet, color: '#512BD4' },
    { name: 'Microsoft Azure', icon: TbBrandAzure, color: '#0089D6' },
    { name: 'SQL Server', icon: DiMsqlServer, color: '#CC292B' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Oracle DB', icon: VscDatabase, color: '#F80000' },
    { name: 'Azure DevOps', icon: VscAzure, color: '#0078D4' },
    { name: 'Docker', icon: TbBrandDocker, color: '#2496ED' },
    { name: 'Redis', icon: DiRedis, color: '#FF4438' },
    { name: 'Git', icon: TbBrandGit, color: '#F05032' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'SAP & MES Integration', icon: SiSap, color: '#0FAFE9' },
    { name: 'Retool Admin Portal', icon: SiRetool, color: '#3D5A80' },
    { name: 'n8n Automation', icon: SiN8N, color: '#EA4B71' },
    { name: 'OpenAI GPT', icon: TbBrandOpenai, color: '#10A37F' },
    { name: 'Google Gemini', icon: SiGooglegemini, color: '#8E75FF' },
    { name: 'Cursor AI', icon: SiCursor, color: '#38BDF8' },
  ];

  return {
    techItems,
  };
};

export default useTechMarquee;
