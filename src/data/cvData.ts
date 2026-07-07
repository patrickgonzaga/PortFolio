export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
  flag?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url?: string;
  image?: string;
  type: 'professional' | 'ai';
}

export interface SkillCategory {
  category: string;
  skills: string[];
  image?: string;
  progression?: {
    level: string;
    description: string;
  }[];
}

export const cvData = {
  personal: {
    name: "Patrick James Lee Gonzaga",
    title: "Senior Software Engineer | Enterprise Systems, SAP, AI Assisted Dev & Automation, .NET & Azure Cloud Solutions",
    overview: "Senior Software Engineer with over 15 years of experience building enterprise software, systems integrations, and business process automations. I’ve always enjoyed finding ways to eliminate manual work through technology—whether by developing custom applications, integrating enterprise systems, or automating workflows. Today, I'm expanding that foundation into AI, LLMs, and modern automation platforms like n8n and Zapier."
  },
  skills: [
    {
      category: "Backend & Frameworks",
      skills: ["C#", "ASP.NET Core", "EF Core", "VB.NET", "REST/OpenAPI"],
      image: "/images/expertise/expertise-backend.png"
    },
    {
      category: "Cloud & DevOps",
      skills: ["Azure (App Config, Key Vault, App Insights, Service Bus, Blob Storage, Redis, Functions)", "AWS (S3, SQS)", "Azure DevOps", "Buildkite", "Git"],
      image: "/images/expertise/expertise-cloud.png"
    },
    {
      category: "Automation",
      skills: ["Scripts/Cron", "Zapier", "n8n", "AI Agents", "Human-in-the-Loop"],
      progression: [
        {
          level: "Business process automation",
          description: "scripts, cron jobs, stored procedure, desktop and web solutions"
        },
        {
          level: "Low-code / iPaaS",
          description: "Zapier, n8n (currently learning)"
        },
        {
          level: "Agentic AI automation",
          description: "LLM-driven multi-step workflows, human-in-the-loop pipelines"
        }
      ],
      image: "/images/expertise/expertise-automation.png"
    },
    {
      category: "Databases",
      skills: ["SQL Server", "Oracle", "PostgreSQL", "MySQL", "MongoDB"],
      image: "/images/expertise/expertise-databases.png"
    },
    {
      category: "Scripting & Markup",
      skills: ["SQL", "JavaScript", "HTML5/CSS3", "ABAP"],
      image: "/images/expertise/expertise-scripting.png"
    },
    {
      category: "Enterprise & ERP",
      skills: ["SAP [MM (Materials Management), PP (Production Planning), CO (Controlling), ABAP]", "SAP–MES integration"],
      image: "/images/expertise/expertise-enterprise.png"
    },
    {
      category: "AI-Assisted Dev",
      skills: ["Cursor"],
      image: "/images/expertise/expertise-ai.png"
    },
    {
      category: "Portal & Reporting",
      skills: ["Retool", "TIBCO Spotfire"],
      image: "/images/expertise/expertise-portal.png"
    }
  ] as SkillCategory[],
  experience: [
    {
      id: "emapta-current",
      company: "EMAPTA (Client: Discovery Holiday Parks AU)",
      role: "Backend Developer",
      period: "2023 – 2026",
      location: "Australia (remote)",
      flag: "au",
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
      location: "Australia (remote)",
      flag: "au",
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
      company: "Renesas Semiconductor KL SDN BHD MY",
      role: "Senior Engineer",
      period: "2011 – 2021",
      location: "Kuala Langat, Malaysia",
      flag: "my",
      description: [
        "Ensures Main Manufacturing Execution System (MES) has an uptime of 99%.",
        "Engineered software solutions yielding an increased in productivity by 75%, over 1M+ MYR time saving benefits and 'POKA-YOKE'.",
        "Developed the Electronic Lot Control Slip (e-LCS) system, replacing manual paper templates with system-driven 'poka-yoke' route verification.",
        "Designed and developed the RSKL Helpdesk system (VB.NET, ASP.NET, SQL Server) to automate internal IT support ticketing and streamline incident response workflows.",
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
      flag: "kh",
      description: [
        "Led project planning, resourcing, documentation, and client engagement; cleared risks so deliverables shipped on time.",
        "Delivered the Resort Operations System Suite (POS, Casino Management, and Automated Timekeeping with Biometrics), fully automating manual workflows and centralizing operations."
      ]
    },
    {
      id: "subic-bay",
      company: "Subic Bay Yacht Club",
      role: "Senior Programmer / Junior Programmer",
      period: "2005 – 2008",
      location: "Subic Bay Olongapo, Philippines",
      flag: "ph",
      description: [
        "Designed and built club systems covering employment, payroll, timekeeping, billing/collections, AP, and POS.",
        "Administered Windows Server, SCO UNIX, Novell NetWare, Oracle OPERA 4.04 PMS, and Micros-Fidelio.",
        "Day-to-day monitoring of systems and databases (99% uptime target); custom programs; vendor evaluation."
      ]
    }
  ] as Experience[],
  projects: [
    {
      id: "altomatiko",
      title: "Altomatiko — AI-Powered Content Automation Pipeline",
      tags: ["n8n", "ASP.NET Core", "React", "Postgre", "Antigravity", "AI Automation"],
      shortDescription: "A portfolio project built to explore agentic workflow design, featuring a multi-stage n8n pipeline and a .NET backend.",
      fullDescription: "Altomatiko is a portfolio project built to learn and explore agentic workflow design rather than simple, single-prompt AI calls.\n\nAt its core, n8n orchestrates a 9-stage content pipeline (discover → research → write → metadata → approve → generate media → publish → analyze → repeat) supported by a backend in ASP.NET Core 8 following CQRS patterns (MediatR), EF Core + Dapper, and PostgreSQL/Supabase. The user dashboard is a modern React 18 + Vite + TypeScript application.\n\nThis project demonstrates human-in-the-loop AI automation, ensuring AI agents collaborate with human editors before performing side-effect operations like media creation or publishing.\n\nTech Stack:\n• n8n (Orchestration)\n• ASP.NET Core 8 & MediatR (CQRS)\n• React + Vite + TypeScript & Zustand\n• PostgreSQL / Supabase\n• EF Core & Dapper\n• FluentValidation\n• Docker Compose\n• Tailwind CSS\n• Gemini / OpenRouter / OpenAI\n• Cloudinary",
      image: "/images/projects/AItomatiko.png",
      type: "personal",
      timeSavings: {
        totalManual: "6 Hours",
        totalAutomated: "3 Minutes",
        percentSaved: "99% Faster",
        stages: [
          { stage: "1. Discover", manual: "30m", automated: "10s", saved: "99.4%" },
          { stage: "2. Research", manual: "60m", automated: "30s", saved: "99.1%" },
          { stage: "3. Write", manual: "120m", automated: "45s", saved: "99.3%" },
          { stage: "4. Metadata", manual: "15m", automated: "5s", saved: "99.4%" },
          { stage: "5. Approve", manual: "10m", automated: "60s (Human Review)", saved: "90.0%" },
          { stage: "6. Media Gen", manual: "45m", automated: "20s", saved: "99.2%" },
          { stage: "7. Publish", manual: "30m", automated: "5s", saved: "99.7%" },
          { stage: "8. Analyze", manual: "40m", automated: "10s", saved: "99.5%" },
          { stage: "9. Repeat", manual: "10m", automated: "Instant", saved: "100%" }
        ]
      }
    },
    {
      id: "wikicamps-admin",
      title: "Deals & WikiCamps Platform (Backend & Admin Portal)",
      tags: [".NET", "C#", "Cursor", "Visual Studio", "ASP.NET Core", "Retool", "Azure", "REST API"],
      shortDescription: "Scalable backend APIs and internal admin portal supporting bookings, deals, and content management.",
      fullDescription: "Built and maintained RESTful APIs powering the Deals and WikiCamps platform, integrated with a low-code Retool admin portal used by internal teams. Implemented secure configuration using Azure Key Vault, optimized performance with Redis caching, and structured data access with EF Core. Supported multi-environment deployments and ensured reliability for business-critical operations.",
      image: "/images/projects/wikicamps-admin.png",
      type: "enterprise"
    },
    {
      id: "optimatech-cloud",
      title: "Cloud-Based Meter Data Processing System",
      tags: ["C#", "AWS S3", "AWS SQS", "BuildKite", "LaunchDarkly"],
      shortDescription: "High-throughput cloud system ensuring reliable and accurate meter data processing.",
      fullDescription: "Contributed to the design and development of a scalable cloud architecture using AWS S3 for storage and SQS for asynchronous messaging. Handled large volumes of meter data with a focus on reliability and data integrity, achieving ~99% accuracy. Refactored legacy components and improved system resilience and maintainability.",
      image: "/images/projects/optimatech-cloud.png",
      type: "enterprise"
    },
    {
      id: "mes-sap-integration",
      title: "MES–SAP Integration & Automation",
      tags: ["SAP", "MES", "ABAP", "Enterprise Integration"],
      shortDescription: "Automated enterprise workflows, improving productivity by 75%.",
      fullDescription: "Engineered integration between Manufacturing Execution Systems (MES) and SAP to automate material master data and production planning processes. Implemented 'poka-yoke' (error-proofing) solutions to eliminate manual input errors, resulting in significant efficiency gains and over 1M+ MYR in operational savings.",
      image: "/images/projects/mes-sap-integration.png",
      type: "enterprise"
    },
    {
      id: "e-lot-control-slip",
      title: "e-Lot Control Slip",
      tags: ["VB.NET", "SQL Server", "MES", "Poka-Yoke", "Manufacturing Automation"],
      shortDescription: "Digitized manual paper lot templates, introducing system-driven 'poka-yoke' to prevent routing errors.",
      fullDescription: "Developed the Electronic Lot Control Slip (e-LCS) system to replace a highly error-prone manual routing process on the semiconductor manufacturing floor.\n\nPreviously, operators relied on pre-printed paper templates, manually selecting and attaching sheets based on the lot's current routing step (e.g., Assembly, Dicing, etc.). Because this selection process was entirely manual, operators frequently selected the incorrect template, leading to lots being moved to the incorrect process. This created high risks of lot misprocessing and material waste.\n\nThe e-LCS solution digitized these templates and integrated directly with the Manufacturing Execution System (MES). The system automatically selects and validates the correct template based on the lot's real-time step in the routing database. Built-in 'poka-yoke' (mistake-proofing) logic was implemented, automatically blocking the lot from proceeding if a mismatch was detected. This integration completely eliminated routing mismatch errors, optimized production efficiency, and saved significant manual tracking hours.",
      image: "/images/projects/e-lot-control.png",
      timeSavings: {
        totalManual: "25 Minutes",
        totalAutomated: "2 Minutes",
        percentSaved: "92% Faster",
        stages: [
          { stage: "1. Template Selection", manual: "5m", automated: "Instant", saved: "100%" },
          { stage: "2. Route Verification", manual: "10m", automated: "30s", saved: "95%" },
          { stage: "3. Poka-Yoke Validation", manual: "10m", automated: "1m 30s", saved: "85%" }
        ]
      }
    },
    {
      id: "enterprise-reporting",
      title: "Manufacturing Analytics & Reporting Platform",
      tags: ["TIBCO Spotfire", "Oracle", "Data Visualization"],
      shortDescription: "Real-time reporting platform for operational insights and decision-making.",
      fullDescription: "Developed interactive dashboards and reporting solutions using TIBCO Spotfire, enabling stakeholders to monitor production performance, identify bottlenecks, and improve decision-making. Enhanced visibility across operations and supported data-driven improvements.",
      image: "/images/projects/enterprise-reporting.png",
      type: "enterprise"
    },
    {
      id: "resort-systems",
      title: "Resort Operations System Suite (Point of Sales(POS), Casino Management System (CMS), Automated Timekeeping System(ATS) with Biometric)",
      tags: ["VB.NET", "SQL Server", "PHP", "Javascript", "System Design"],
      shortDescription: "End-to-end system suite replacing manual resort operations.",
      fullDescription: "Led development of multiple in-house systems including POS, Casino Management, and biometric timekeeping. Automated manual workflows, improved operational efficiency, and centralized data management across departments.",
      image: "/images/projects/resort-systems.png",
      type: "enterprise"
    },
    {
      id: "rskl-helpdesk",
      title: "RSKL Helpdesk",
      tags: ["VB.NET", "ASP.NET", "SQL Server", "Javascript"],
      shortDescription: "Internal IT helpdesk and support ticketing system streamlining request workflows.",
      fullDescription: "Developed an internal Helpdesk ticketing system for Renesas Semiconductor KL (RSKL) using VB.NET, ASP.NET, and SQL Server. Automated support request routing, tracked SLA compliance, and replaced manual email-based tracking to improve IT department response times, transparency, and operational accountability.",
      image: "/images/projects/rskl-helpdesk.png",
      type: "enterprise"
    }
  ] as Project[],
  certifications: [
    {
      id: "openai-workflow",
      title: "Agents and Workflow",
      issuer: "OpenAI",
      date: "2026",
      url: "https://academy.openai.com/home/certificate/zs18d7fk5h",
      image: "/images/certificates/openai-workflow.jpg",
      type: "ai"
    },
    {
      id: "taraai-zapier",
      title: "No Code Automation with Zapier",
      issuer: "TaraAI",
      date: "2026",
      url: "https://my-certificates.com/certificates/6a49ff4481683ab63964cd56",
      image: "/images/certificates/taraai-zapier.jpg",
      type: "ai"
    },
    {
      id: "udemy-react",
      title: "The Complete ReactJs Course - Basics to Advanced",
      issuer: "Udemy",
      date: "2026",
      url: "https://www.udemy.com/certificate/UC-42f4b61e-e673-4ed5-b8bc-42fdb952837f",
      image: "/images/certificates/udemy-react.jpg",
      type: "professional"
    },
    {
      id: "udemy-azure-bicep",
      title: "Learn Infra as a Code with Azure Bicep",
      issuer: "Udemy",
      date: "2025",
      url: "https://www.udemy.com/certificate/UC-49d83313-257a-496c-9907-8a189eb04dda/",
      image: "/images/certificates/udemy-azure-bicep.jpg",
      type: "professional"
    },
    {
      id: "udemy-azure-devops",
      title: "Learn Azure DevOps CI/CD pipelines",
      issuer: "Udemy",
      date: "2025",
      url: "https://www.udemy.com/certificate/UC-56b397a8-e1e8-4468-8ef4-c515c04e1518/",
      image: "/images/certificates/udemy-azure-devops.jpg",
      type: "professional"
    },
    {
      id: "udemy-code-reviews",
      title: "Code Reviews for Secure, Clean, and Scalable Code",
      issuer: "Udemy",
      date: "2024",
      url: "https://www.udemy.com/certificate/UC-cb997fb5-4ea4-417c-b23d-8c23677b735f/",
      image: "/images/certificates/udemy-code-reviews.jpg",
      type: "professional"
    },
    {
      id: "project-sparta-data-engineering",
      title: "Data Engineering Pathway ",
      issuer: "Project SPARTA",
      date: "2023",
      url: "https://sparta.dap.edu.ph/",
      image: "/images/certificates/project-sparta-data-engineering.jpg",
      type: "professional"
    },
    {
      id: "n8n-quickstart",
      title: "QS101: n8n Quickstart",
      issuer: "n8n Academy",
      date: "2026",
      url: "https://badges.n8n.io/a8780446-ca11-44a5-872d-d30e2bd4cead#acc.qTuCVHO6",
      image: "/images/certificates/n8n-quickstart.jpg",
      type: "ai"
    },
    {
      id: "udemy-ai",
      title: "Google AI Studio Bootcamp: Build Pro Apps with Gemini",
      issuer: "Udemy",
      date: "2026",
      url: "https://www.udemy.com/certificate/UC-ec50185e-3909-44b2-859a-bd9d2b91f7bd/",
      image: "/images/certificates/udemy-ai.jpg",
      type: "ai"
    },
    {
      id: "udemy-claude-code-pro",
      title: "Claude Pro: Build, Integrate & Optimize AI Solutions",
      issuer: "Udemy",
      date: "2026",
      url: "https://www.udemy.com/certificate/UC-4ab674fc-cda3-45a5-ae26-b3404f77560b/",
      image: "/images/certificates/udemy-claude-code-pro.jpg",
      type: "ai"
    },
    {
      id: "project-sparta-data-visualization",
      title: "Data Visualization Fundamentals ",
      issuer: "Project SPARTA",
      date: "2023",
      url: "https://sparta.dap.edu.ph/",
      image: "/images/certificates/project-sparta-data-visualization.jpg",
      type: "professional"
    },
    {
      id: "project-sparta-data-science",
      title: "Data Science and Machine Learning Using Python",
      issuer: "Project SPARTA",
      date: "2022",
      url: "https://sparta.dap.edu.ph/",
      image: "/images/certificates/project-sparta-data-science.jpg",
      type: "professional"
    },
    {
      id: "project-sparta-data-science-analytics",
      title: "Data Science and Analytics Project Management",
      issuer: "Project SPARTA",
      date: "2023",
      url: "https://sparta.dap.edu.ph/",
      image: "/images/certificates/project-sparta-data-science-analytics.jpg",
      type: "professional"
    },
    {
      id: "project-sparta-advance-data-engineering",
      title: "Advanced Data Engineering",
      issuer: "Project SPARTA",
      date: "2023",
      url: "https://sparta.dap.edu.ph/",
      image: "/images/certificates/project-sparta-advance-data-engineering.jpg",
      type: "professional"
    },
    {
      id: "project-sparta-data-visualization-tableau",
      title: "Data Visualization with Tableau and Python",
      issuer: "Project SPARTA",
      date: "2023",
      url: "https://sparta.dap.edu.ph/",
      image: "/images/certificates/project-sparta-data-visualization-tableau.jpg",
      type: "professional"
    },
    {
      id: "project-sparta-python-for-data-engineering",
      title: "Python for Data Engineering",
      issuer: "Project SPARTA",
      date: "2023",
      url: "https://sparta.dap.edu.ph/",
      image: "/images/certificates/project-sparta-python-data-engineering.jpg",
      type: "professional"
    },
    {
      id: "project-sparta-deep-learning-python",
      title: "Deep Learning using Python",
      issuer: "Project SPARTA",
      date: "2022",
      url: "https://sparta.dap.edu.ph/",
      image: "/images/certificates/project-sparta-deep-learning-python.jpg",
      type: "professional"
    },
    {
      id: "project-sparta-computing-python",
      title: "Computing in Python",
      issuer: "Project SPARTA",
      date: "2022",
      url: "https://sparta.dap.edu.ph/",
      image: "/images/certificates/project-sparta-computing-python.jpg",
      type: "professional"
    },
  ] as Certification[]
};

export interface TimeSavingStage {
  stage: string;
  manual: string;
  automated: string;
  saved: string;
}

export interface TimeSavings {
  totalManual: string;
  totalAutomated: string;
  percentSaved: string;
  stages: TimeSavingStage[];
}

export interface Project {
  id: string;
  title: string;
  tags: string[];
  shortDescription: string;
  fullDescription: string;
  image?: string;
  timeSavings?: TimeSavings;
  type: 'personal' | 'enterprise';
}
