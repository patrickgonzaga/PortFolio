import { cvData } from '../../data/cvData';

export const useAbout = () => {
  const bioParagraphs = [
    "My software engineering career spans two decades building applications, database systems, and enterprise infrastructure. My earlier background was built on desktop and web development, database architecture (SQL Server, Oracle), SAP/MES manufacturing integration, and production systems.",
    "Over the last 5+ years, I have focused professionally on modern C#/.NET, ASP.NET Core RESTful APIs, Microsoft Azure cloud architecture, distributed messaging, and high-throughput data processing, building on 15+ years of prior enterprise VB.NET and IT systems engineering.",
    "I operate on a fundamental principle: From enterprise backends to cloud & AI — I deliver production-ready systems that last. I approach complex software engineering by understanding the entire system architecture, designing for resilience, engineering clean solutions with modern .NET, cloud services, and AI integrations, and ensuring reliable execution in production."
  ];

  const principles = [
    { step: "01", title: "Understand the domain", description: "Analyze end-to-end domain logic, data flows, and infrastructure constraints before writing code." },
    { step: "02", title: "Architect for resilience", description: "Design clean boundaries, decoupled microservices, fault tolerance, and secure data access." },
    { step: "03", title: "Build the solution", description: "Engineer performant C#/.NET services, clean APIs, EF Core access, and cloud pipelines." },
    { step: "04", title: "Deliver in production", description: "Deploy through CI/CD with automated testing, observability, and long-term maintainability." }
  ];

  const stats = [
    { value: "20+", label: "Years Software & IT" },
    { value: "5+ / 15+", label: "Years C# / VB.NET" },
    { value: ">MYR 1M", label: "Renesas Savings" },
    { value: "99%", label: "MES Uptime (100+ Servers)" }
  ];

  const avatarUrl = "/hero-profile.png";

  return {
    personal: cvData.personal,
    bioParagraphs,
    principles,
    stats,
    avatarUrl,
  };
};
