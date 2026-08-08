import { cvData } from '../../data/cvData';

export const useAbout = () => {
  const bioParagraphs = [
    "My software engineering career spans two decades building applications, database systems, and enterprise infrastructure. My earlier background was built on desktop and web development, database architecture (SQL Server, Oracle), SAP/MES manufacturing integration, and production systems.",
    "Over the last 5+ years, I have focused professionally on modern C#/.NET, ASP.NET Core RESTful APIs, Microsoft Azure cloud architecture, distributed messaging, and high-throughput data processing. My career has naturally evolved from broader software and IT systems into specialized backend and cloud engineering.",
    "I operate on a fundamental principle: I don't just write code — I close gaps. I approach complex software engineering by understanding the entire system architecture, identifying operational bottlenecks, engineering clean solutions with Entity Framework Core and cloud services, and delivering reliable code in production."
  ];

  const principles = [
    { step: "01", title: "Understand the system", description: "Analyze end-to-end domain logic, data flows, and infrastructure constraints before writing code." },
    { step: "02", title: "Identify the gap", description: "Pinpoint performance bottlenecks, process friction, error rates, or missing integration layers." },
    { step: "03", title: "Build the solution", description: "Architect resilient C#/.NET services, clean APIs, EF Core access, and cloud pipelines." },
    { step: "04", title: "Deliver it in production", description: "Deploy through CI/CD with automated testing, observability, and long-term maintainability." }
  ];

  const stats = [
    { value: "20+", label: "Years Software & IT" },
    { value: "5+", label: "Years Professional .NET" },
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
