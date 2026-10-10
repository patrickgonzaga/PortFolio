import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Server, Database, Code2, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { TiltCard } from '../../components/ui/TiltCard/TiltCard';
import { SectionHeader } from '../../components/ui/SectionHeader/SectionHeader';

export const Skills: React.FC = () => {
  const categories = [
    {
      title: "PRIMARY ENGINEERING STACK",
      badge: "Core Expertise",
      icon: Code2,
      isPrimary: true,
      skills: ["C#", "VB.NET", ".NET", "ASP.NET Core", "Entity Framework Core", "SQL Server", "Microsoft Azure", "REST APIs", "Enterprise Integrations"],
      description: "Primary backend stack used daily for building robust enterprise applications, microservices, and API platforms."
    },
    {
      title: "AZURE & SECONDARY TOOLING",
      badge: "Cloud & Reliability",
      icon: Server,
      isPrimary: false,
      skills: ["Azure App Service", "Azure Functions", "Azure Service Bus", "Azure Redis", "Azure Blob Storage", "Azure Key Vault", "Application Insights", "CI/CD", "Git", "GitHub", "Azure DevOps", "xUnit"],
      description: "Cloud-native Azure ecosystem, messaging queues, caching, resilience policies, unit testing, and CI/CD pipelines."
    },
    {
      title: "CODE QUALITY & SECURITY",
      badge: "Static Analysis & Scanning",
      icon: ShieldCheck,
      isPrimary: false,
      skills: ["SonarQube", "Snyk"],
      description: "Static code analysis and dependency/vulnerability scanning integrated into CI pipelines."
    },
    {
      title: "DATABASE & DATA SYSTEMS",
      badge: "Relational & NoSQL",
      icon: Database,
      isPrimary: false,
      skills: ["SQL Server", "Oracle", "PostgreSQL", "MySQL", "MongoDB"],
      description: "Database design, query optimization, indexing, stored procedures, and multi-database maintenance."
    },
    {
      title: "ENTERPRISE & WEB TECHNOLOGIES",
      badge: "Enterprise & Web",
      icon: Layers,
      isPrimary: false,
      skills: ["JavaScript", "SAP", "Retool", "TIBCO Spotfire", "MES", "AWS (S3, SQS)"],
      description: "Web scripting, enterprise software platforms, manufacturing MES/SAP integrations, business intelligence, and cloud storage."
    },
    {
      title: "AI-ASSISTED DEV & AUTOMATION",
      badge: "Modern Workflows",
      icon: Sparkles,
      isPrimary: false,
      skills: ["OpenClaw", "Claude API", "Claude Code", "Claude Cowork", "Telegram Bots", "Cursor", "n8n Workflows", "Gemini"],
      description: "AI-assisted engineering processes, structured prompt rules, MCP context integration, and automation."
    }
  ];

  return (
    <section id="skills" className="section section-glow py-24 sm:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          icon={Code2}
          eyebrow="Technical Capabilities"
          title="Technical Expertise &"
          highlight="Stack."
          description="Core languages, frameworks, cloud services, and enterprise databases."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformPerspective: 1200 }}
                className={cat.isPrimary ? 'md:col-span-2 lg:col-span-12' : 'lg:col-span-4'}
              >
                <TiltCard
                  max={cat.isPrimary ? 3 : 6}
                  className={`glass rounded-2xl p-6 sm:p-8 h-full ${
                    cat.isPrimary ? 'border-sky-500/40 bg-sky-50/50 dark:bg-sky-950/20' : ''
                  }`}
                >
                  <div className="relative z-[3]">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`depth-1 p-2.5 rounded-xl border ${
                          cat.isPrimary
                            ? 'bg-sky-600 text-white border-transparent shadow-md'
                            : 'bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-sky-600 dark:text-sky-400'
                        }`}
                      >
                        <Icon size={20} />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400 font-bold block">
                          {cat.badge}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">{cat.title}</h3>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">{cat.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all hover:-translate-y-0.5 ${
                            cat.isPrimary
                              ? 'bg-white dark:bg-sky-950/80 text-slate-900 dark:text-sky-100 border border-sky-300 dark:border-sky-700/80 font-semibold shadow-xs'
                              : 'bg-slate-50 dark:bg-white/[0.03] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-sky-500/40'
                          }`}
                        >
                          <CheckCircle2 size={12} className={cat.isPrimary ? 'text-sky-500' : 'text-slate-400 dark:text-slate-500'} />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
