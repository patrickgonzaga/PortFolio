import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Server, Database, Code2, Sparkles, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const categories = [
    {
      title: "PRIMARY ENGINEERING STACK",
      badge: "Core Expertise",
      icon: Code2,
      isPrimary: true,
      skills: ["C#", ".NET", "ASP.NET Core", "Entity Framework Core", "SQL Server", "Microsoft Azure", "REST APIs", "Enterprise Integrations"],
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
      skills: ["Cursor", "n8n Workflows", "Claude", "Gemini"],
      description: "AI-assisted engineering processes, structured prompt rules, MCP context integration, and automation."
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-20 relative bg-slate-50 dark:bg-[#080c14] text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sky-600 dark:text-sky-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Code2 size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Technical Expertise & Stack<span className="text-sky-600 dark:text-sky-400">.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-2xl text-sm sm:text-base">
            Structured view of core languages, frameworks, cloud services, and enterprise databases.
          </p>
        </motion.div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`rounded-2xl p-6 sm:p-8 ${
                  cat.isPrimary 
                    ? 'border border-sky-300 dark:border-sky-500/40 bg-sky-50/70 dark:bg-sky-950/20 lg:col-span-12 shadow-sm dark:shadow-xl' 
                    : 'border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 lg:col-span-6 hover:border-slate-300 dark:hover:border-slate-700'
                } transition-all flex flex-col justify-between group shadow-sm`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${cat.isPrimary ? 'bg-sky-100 dark:bg-sky-500/20 text-sky-700 dark:text-sky-400 border border-sky-300 dark:border-sky-500/30' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400 font-bold block">
                          {cat.badge}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans tracking-tight">
                          {cat.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                          cat.isPrimary
                            ? 'bg-white dark:bg-sky-900/40 text-sky-900 dark:text-sky-200 border border-sky-200 dark:border-sky-700/60 font-semibold shadow-xs'
                            : 'bg-slate-50 dark:bg-slate-950/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 group-hover:border-slate-300 dark:group-hover:border-slate-700'
                        }`}
                      >
                        <CheckCircle2 size={12} className={cat.isPrimary ? 'text-sky-600 dark:text-sky-400' : 'text-slate-400 dark:text-slate-500'} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
