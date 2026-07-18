import { useTheme } from '../../contexts/ThemeContext';
import type { AboutStats } from './About.types';

export const useAbout = () => {
  const { theme } = useTheme();

  /*
   * PLACEHOLDER CONTENT COMMENTS FOR PATRICK:
   * You can easily customize these bio paragraphs to describe your background,
   * journey, and goals. Just edit the strings in the array below.
   */
  const bioParagraphs = [
    "I am a Senior Software Engineer with over 15 years of experience building and integrating high-performance enterprise systems. Over the course of my career, I've specialized in creating robust backends, cloud architectures, and databases that sustain 24/7 manufacturing and business operations.",
    "Driven by a passion for automation, I focus on building smart digital workflows. I bridge the gap between traditional enterprise backends (like SAP MES, SQL Server, and .NET Core APIs) and state-of-the-art agentic AI systems using tools like n8n and Zapier to save teams thousands of hours of manual labor.",
    "When I'm not coding or designing automation scripts, I explore new technologies, configure custom development environments, and refine software architectures to adhere to strict SOLID guidelines."
  ];

  /*
   * PLACEHOLDER CONTENT COMMENTS FOR PATRICK:
   * You can edit these stats to showcase your personal records.
   * e.g., Years of Experience, Projects Completed, Hours Automated, etc.
   */
  const stats: AboutStats[] = [
    { value: "15+", label: "Years of Experience" },
    { value: "50+", label: "Systems Integrated" },
    { value: "75%", label: "Floor Productivity Gains" },
    { value: "1M+", label: "MYR in Automation Savings" }
  ];

  // Placeholder avatar picture URL
  const avatarUrl = "/pat.png";

  return {
    bioParagraphs,
    stats,
    avatarUrl,
    theme,
  };
};
