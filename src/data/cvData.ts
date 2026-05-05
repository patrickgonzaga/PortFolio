export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url?: string;
}


export interface SkillCategory {
  category: string;
  skills: string[];
}

export const cvData = {
  personal: {
    name: "Patrick James Lee Gonzaga",
    title: "Software Engineer | .NET · Azure · APIs",
    overview: "Software engineer with 15+ years of experience building systems that support real business operations — spanning backend development, system integrations, and enterprise platforms. Currently focused on .NET and Azure, delivering APIs and distributed systems that are stable and maintainable at scale. Known for stepping into unfamiliar technology and delivering — from learning ABAP to bridge SAP-to-MES integrations to picking up Retool to build production admin tooling.",
  },
  skills: [
    {
      category: "Backend & Frameworks",
      skills: ["C#", "ASP.NET Core", "EF Core", "VB.NET", "REST/OpenAPI"],
    },
    {
      category: "Cloud & DevOps",
      skills: ["Azure (App Config, Key Vault, App Insights, Service Bus, Blob Storage, Redis, Functions)", "AWS (S3, SQS)", "Azure DevOps", "Buildkite", "Git"],
    },
    {
      category: "Databases",
      skills: ["SQL Server", "Oracle", "PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      category: "Scripting & Markup",
      skills: ["SQL", "JavaScript", "HTML5/CSS3", "ABAP"],
    },
    {
      category: "Enterprise & ERP",
      skills: ["SAP (MM, BOM, Routing, PP, CO)", "SAP–MES integration"],
    },
    {
      category: "AI-Assisted Dev",
      skills: ["Cursor"],
    },
    {
      category: "Portal & Reporting",
      skills: ["Retool", "TIBCO Spotfire"],
    }
  ] as SkillCategory[],
  experience: [
    {
      id: "emapta-current",
      company: "EMAPTA (Client: Discovery Holiday Parks)",
      role: ".NET Developer",
      period: "2023 – Present",
      location: "PNB Manila, Philippines",
      description: [
        "Built and maintained the Deals and WikiCamps domain, focusing on RESTful API implementation, EF Core data access, and integration with shared microservices.",
        "Supported development of shared WikiCamps platform services, including sites, forums, accounts, trips, and media.",
        "Took ownership of the Admin Portal (Retool) for deals, bookings, and WikiCamps — including pages, resource/query configuration, and multi-environment setup.",
        "Worked extensively with Azure services: Key Vault, Application Insights, Redis Cache, Blob Storage, Service Bus (message handlers), and Azure Functions.",
        "Integrated external and internal services such as BookEasy (bookings), OSRM (routing) with Polly resilience policies, and Azure AI Search for content indexing.",
        "Used Cursor (repository-level rules, MCP for read-only Azure/SQL access) to support AI-assisted development."
      ]
    },
    {
      id: "emapta-optima",
      company: "EMAPTA (Client: Optima Technology AU)",
      role: ".NET Developer",
      period: "2021 – 2023",
      location: "PNB Manila, Philippines",
      description: [
        "Collaborated in the development of a highly scalable web application architecture utilizing AWS S3 and SQS for efficient and reliable storage and messaging solutions.",
        "Responsible for the design, development, refactoring, and maintenance of the Optimatech application implementing efficient and reliable best software practices.",
        "Created and maintained top-notch functional and technical documentation using Confluence, resulting in a remarkable 50% improvement in knowledge sharing.",
        "Successfully deployed code to Test, UAT and production environments using Buildkite.",
        "Oversaw the accuracy of meter data, ensuring a 99% data quality rate."
      ]
    },
    {
      id: "renesas",
      company: "Renesas Semiconductor KL SDN BHD",
      role: "Senior Engineer",
      period: "2011 – 2021",
      location: "Kuala Langat, Malaysia",
      description: [
        "Ensures Main Manufacturing Execution System (MES) has an uptime of 99%.",
        "Engineered software solutions yielding an increased in productivity by 75%, over 1M+ MYR time saving benefits and 'POKA-YOKE'.",
        "Efficiently multi-tasked and administered over 100 servers running in physical, VMWare and Hyper V.",
        "Interfaced and integrated SAP to MES systems automating material master registrations and production planning run.",
        "Built Innovative management reports using TIBCO Spotfire."
      ]
    },
    {
      id: "grand-dragon",
      company: "Grand Dragon Resorts",
      role: "IT Manager / IT Executive",
      period: "2008 – 2010",
      location: "Chrey Thom, Cambodia",
      description: [
        "Led project planning, resourcing, documentation, and client engagement; cleared risks so deliverables shipped on time.",
        "Delivered in-house POS, casino management (CMS), and biometric timekeeping (ATS); fully automated previously manual processes."
      ]
    },
    {
      id: "subic-bay",
      company: "Subic Bay Yacht Club",
      role: "Senior Programmer / Junior Programmer",
      period: "2005 – 2008",
      location: "Subic Bay Olongapo, Philippines",
      description: [
        "Designed and built club systems covering employment, payroll, timekeeping, billing/collections, AP, and POS.",
        "Administered Windows Server, SCO UNIX, Novell NetWare, Oracle OPERA 4.04 PMS, and Micros-Fidelio.",
        "Day-to-day monitoring of systems and databases (99% uptime target); custom programs; vendor evaluation."
      ]
    }
  ] as Experience[],
  projects: [
    {
      id: "wikicamps-admin",
      title: "Deals & WikiCamps Platform (Backend & Admin Portal)",
      tags: [".NET", "C#", "ASP.NET Core", "Retool", "Azure", "REST API"],
      shortDescription: "Scalable backend APIs and internal admin portal supporting bookings, deals, and content management.",
      fullDescription: "Built and maintained RESTful APIs powering the Deals and WikiCamps platform, integrated with a low-code Retool admin portal used by internal teams. Implemented secure configuration using Azure Key Vault, optimized performance with Redis caching, and structured data access with EF Core. Supported multi-environment deployments and ensured reliability for business-critical operations."
    },
    {
      id: "optimatech-cloud",
      title: "Cloud-Based Meter Data Processing System",
      tags: ["C#", "AWS S3", "AWS SQS", "BuildKite", "LaunchDarkly"],
      shortDescription: "High-throughput cloud system ensuring reliable and accurate meter data processing.",
      fullDescription: "Contributed to the design and development of a scalable cloud architecture using AWS S3 for storage and SQS for asynchronous messaging. Handled large volumes of meter data with a focus on reliability and data integrity, achieving ~99% accuracy. Refactored legacy components and improved system resilience and maintainability."
    },
    {
      id: "mes-sap-integration",
      title: "MES–SAP Integration & Automation",
      tags: ["SAP", "MES", "ABAP", "Enterprise Integration"],
      shortDescription: "Automated enterprise workflows, improving productivity by 75%.",
      fullDescription: "Engineered integration between Manufacturing Execution Systems (MES) and SAP to automate material master data and production planning processes. Implemented 'poka-yoke' (error-proofing) solutions to eliminate manual input errors, resulting in significant efficiency gains and over 1M+ MYR in operational savings."
    },
    {
      id: "enterprise-reporting",
      title: "Manufacturing Analytics & Reporting Platform",
      tags: ["TIBCO Spotfire", "Oracle", "Data Visualization"],
      shortDescription: "Real-time reporting platform for operational insights and decision-making.",
      fullDescription: "Developed interactive dashboards and reporting solutions using TIBCO Spotfire, enabling stakeholders to monitor production performance, identify bottlenecks, and improve decision-making. Enhanced visibility across operations and supported data-driven improvements."
    },
    {
      id: "resort-systems",
      title: "Resort Operations System Suite (POS, CMS, ATS)",
      tags: ["VB.NET", "SQL Server", "System Design"],
      shortDescription: "End-to-end system suite replacing manual resort operations.",
      fullDescription: "Led development of multiple in-house systems including POS, Casino Management, and biometric timekeeping. Automated manual workflows, improved operational efficiency, and centralized data management across departments."
    }
  ],
  certifications: [
    {
      id: "udemy-ai",
      title: "Google AI Studio Bootcamp: Build Pro Apps with Gemini",
      issuer: "Udemy",
      date: "2026",
      url: "https://www.udemy.com/certificate/UC-ec50185e-3909-44b2-859a-bd9d2b91f7bd/"
    },
    {
      id: "udemy-claude-pro",
      title: "Claude Pro: Build, Integrate & Optimize AI Solutions",
      issuer: "Udemy",
      date: "2026",
      url: "https://www.udemy.com/certificate/UC-4ab674fc-cda3-45a5-ae26-b3404f77560b/"
    },
    {
      id: "udemy-azure-bicep",
      title: "Learn Infra as a Code with Azure Bicep",
      issuer: "Udemy",
      date: "2025",
      url: "https://www.udemy.com/certificate/UC-49d83313-257a-496c-9907-8a189eb04dda/"
    },
    {
      id: "udemy-azure-devops",
      title: "Learn Azure DevOps CI/CD pipelines",
      issuer: "Udemy",
      date: "2025",
      url: "https://www.udemy.com/certificate/UC-56b397a8-e1e8-4468-8ef4-c515c04e1518/"
    },
    {
      id: "udemy-code-reviews",
      title: "Code Reviews for Secure, Clean, and Scalable Code",
      issuer: "Udemy",
      date: "2024",
      url: "https://www.udemy.com/certificate/UC-cb997fb5-4ea4-417c-b23d-8c23677b735f/"
    },
    {
      id: "project-sparta-data-engineering",
      title: "Data Engineering, Data Science & Machine Learning ",
      issuer: "Project SPARTA",
      date: "2022",
      url: "https://sparta.dap.edu.ph/"
    }
  ] as Certification[]
};

export interface Project {
  id: string;
  title: string;
  tags: string[];
  shortDescription: string;
  fullDescription: string;
}
