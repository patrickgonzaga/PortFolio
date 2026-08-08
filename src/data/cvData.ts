export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  flag?: string;
  description: string[];
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

export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  client?: string;
  tags: string[];
  shortDescription: string;
  fullDescription: string;
  problem?: string;
  solution?: string;
  engineeringDecisions?: string;
  impact?: string;
  image?: string;
  type: 'enterprise' | 'personal';
  badge?: string;
}

export interface AIIndependentProject {
  id: string;
  title: string;
  badge: string;
  tags: string[];
  shortDescription: string;
  fullDescription: string;
  timeSavings?: string;
  image?: string;
  problem?: string;
  solution?: string;
  techDetails?: string;
  flowSteps?: {
    step: number;
    title: string;
    description: string;
  }[];
}

export const cvData = {
  personal: {
    name: "Patrick Gonzaga",
    fullName: "Patrick James Lee Gonzaga",
    title: "Senior Software Engineer",
    primaryStatement: "I don't just write code — I close gaps.",
    supportingStatement: "Understand the system. Identify the gap. Build the solution. Deliver it in production.",
    techBadges: ["C# / .NET", "ASP.NET Core", "Azure", "SQL Server", "APIs & Integrations"],
    overview: "Software engineer with 2 decades of experience across software development, enterprise applications, databases, integrations and IT systems, including 5+ years of professional C#/.NET experience.",
    longAbout: "My engineering career spans two decades of building software, enterprise applications, and production systems. My earlier foundation was built on desktop and web application development, database architecture (SQL Server, Oracle), manufacturing systems, and enterprise integrations. Over the last 5+ years, I have focused professionally on modern C#/.NET, ASP.NET Core, Azure cloud infrastructure, and robust backend microservices.\n\nI approach engineering with a systems mindset: understand the business domain, pinpoint operational gaps, build clean and maintainable software, and ensure reliable execution in production.",
    location: "Available for Senior .NET & Azure Roles (Remote International)",
    email: "patrickgonzaga@gmail.com",
    linkedin: "https://www.linkedin.com/in/patgonzaga/",
    portfolio: "https://patgonzaga.dev",
    resumePdf: "/documents/CV_Patrick_Gonzaga.pdf"
  },

  skills: [
    {
      category: "Primary Engineering Stack",
      description: "Core technologies used daily in modern backend and enterprise systems",
      skills: ["C#", ".NET", "ASP.NET Core", "Entity Framework Core", "SQL Server", "Microsoft Azure", "REST APIs", "Enterprise Integrations"]
    },
    {
      category: "Azure & Cloud Infrastructure",
      description: "Cloud services, messaging pipelines, resilience, and DevOps tooling",
      skills: ["Azure App Service", "Azure Functions", "Azure Service Bus", "Azure Redis", "Azure Blob Storage", "Azure Key Vault", "Application Insights", "CI/CD", "Git", "GitHub", "Azure DevOps", "xUnit", "NSubstitute", "Polly"]
    },
    {
      category: "Databases & Data Systems",
      description: "Relational, document, and high-performance database management systems",
      skills: ["SQL Server", "Oracle", "PostgreSQL", "MySQL", "MongoDB"]
    },
    {
      category: "Enterprise & Web Technologies",
      description: "Foundational frameworks, web scripting, business intelligence, and enterprise software platforms",
      skills: ["JavaScript", "SAP", "Retool", "TIBCO Spotfire", "MES", "AWS (S3, SQS)"]
    },
    {
      category: "Emerging & AI-Assisted Engineering",
      description: "Modern AI tooling for accelerated development and process automation",
      skills: ["Cursor (Repo Rules & MCP)", "n8n Workflows", "OpenAI API Integration"]
    }
  ] as SkillGroup[],

  experience: [
    {
      id: "emapta-discovery",
      company: "Discovery Holiday Parks / Emapta",
      role: "Backend Developer",
      period: "2023 – 2026",
      location: "Australia (Remote)",
      flag: "au",
      description: [
        "Engineered and maintained production C#, .NET, and ASP.NET Core APIs powering the Deals and WikiCamps platforms, owning domain logic, EF Core data access, and microservice integrations.",
        "Orchestrated reliable event-driven backend workflows using Azure Service Bus, Azure Functions (scheduled jobs, offline builder), Redis Cache, Blob Storage, Key Vault, and Application Insights.",
        "Integrated third-party service pipelines including BookEasy (booking sync), OSRM (routing) with Polly resilience policies, and Azure AI Search for automated content indexing.",
        "Took full ownership of the internal Retool Admin Portal, configuring resources, complex SQL queries, and multi-environment pipelines used daily by operations teams.",
        "Accelerated development velocity using AI-assisted tooling (Cursor with repository-level rules and MCP for read-only Azure/SQL access), ensuring all generated changes were thoroughly tested and validated before merge."
      ]
    },
    {
      id: "emapta-bidenergy",
      company: "BidEnergy / Emapta (Optima Technology)",
      role: ".NET Developer",
      period: "2021 – 2023",
      location: "Australia (Remote)",
      flag: "au",
      description: [
        "Engineered C#/.NET applications for high-throughput energy metering systems, leveraging AWS S3 and SQS for scalable storage and asynchronous message handling.",
        "Refactored legacy energy data pipelines to Clean Architecture, improving long-term maintainability, system resilience, and overall code quality.",
        "Automated release workflows across Test, UAT, and Production environments using Buildkite CI/CD pipelines.",
        "Enforced high code quality standards through active code reviews and achieved 99% meter data accuracy through automated validation checks."
      ]
    },
    {
      id: "renesas",
      company: "Renesas Semiconductor KL SDN BHD",
      role: "Senior Engineer (Sole Software Engineer)",
      period: "2011 – 2021",
      location: "Kuala Langat, Malaysia",
      flag: "my",
      description: [
        "Served as sole software engineer managing and scaling 24/7 Manufacturing Execution Systems (MES) and enterprise IT applications across 100+ production, VMware, and Hyper-V servers.",
        "Engineered custom VB.NET, SQL Server, and Oracle solutions that boosted floor productivity by 75% and delivered > MYR 1M in verified time-saving operational benefits.",
        "Architected the Electronic Lot Control Slip (e-LCS), introducing system-driven 'poka-yoke' (mistake-proofing) validation that blocked incorrect lot processing steps in real time.",
        "Integrated SAP with MES to fully automate material master registration and production planning runs, eliminating manual data entry cycles.",
        "Built internal RSKL Helpdesk ticketing system (VB.NET, ASP.NET, SQL Server) and real-time Spotfire manufacturing analytics dashboards for operational leadership."
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
        "As IT Manager: led end-to-end project planning, infrastructure deployments, documentation, and stakeholder management for resort systems.",
        "As IT Executive: designed and delivered the Resort Operations System Suite — Point of Sale (POS), Casino Management System (CMS), and Biometric Timekeeping (ATS) using VB.NET and SQL Server."
      ]
    },
    {
      id: "subic-bay",
      company: "Subic Bay Yacht Club",
      role: "Senior Programmer / Junior Programmer",
      period: "2005 – 2008",
      location: "Subic Bay, Philippines",
      flag: "ph",
      description: [
        "Developed custom VB.NET and SQL Server applications for payroll, employee timekeeping, billing, collections, accounts payable, and POS.",
        "Administered multi-platform infrastructure including Windows Server, SCO UNIX, Novell NetWare, Oracle OPERA PMS, and Micros-Fidelio systems, maintaining 99% database uptime."
      ]
    }
  ] as Experience[],

  projects: [
    {
      id: "wikicamps-admin",
      title: "Deals & WikiCamps Platform",
      client: "Discovery Holiday Parks / Emapta",
      tags: ["C#", ".NET", "ASP.NET Core", "Entity Framework Core", "Azure", "Retool", "Polly", "REST API"],
      shortDescription: "Production APIs, event-driven microservices, and internal admin portal supporting holiday park deals and travel bookings.",
      fullDescription: "Built and maintained RESTful APIs powering the Deals and WikiCamps platforms, integrated with a low-code Retool admin portal used daily by internal operations. Implemented secure configuration via Azure Key Vault, response caching via Redis, and resilient HTTP client integrations with Polly.",
      problem: "High-volume hospitality platform required resilient backend services, real-time booking synchronization, and efficient internal admin tools.",
      solution: "Engineered ASP.NET Core REST APIs with EF Core data access, integrated BookEasy and OSRM with Polly resilience policies, and built custom Retool admin portals.",
      engineeringDecisions: "Implemented Azure Service Bus event handlers, Redis response caching, Key Vault secret management, and Cursor AI workflows with strict human code review.",
      impact: "Delivered reliable production APIs and internal tools powering daily operations for Australian holiday park users.",
      image: "/images/projects/wikicamps-admin.png",
      type: "enterprise"
    },
    {
      id: "optimatech-cloud",
      title: "Cloud Meter Data Processing System",
      client: "BidEnergy / Optima Technology",
      tags: ["C#", ".NET", "AWS S3", "AWS SQS", "Buildkite CI/CD", "Clean Architecture"],
      shortDescription: "High-throughput cloud backend system ensuring reliable ingestion and processing of energy meter reads.",
      fullDescription: "Contributed to the design and development of a scalable cloud architecture using AWS S3 for storage and SQS for asynchronous messaging. Handled large volumes of meter data with a focus on reliability, data integrity, and automated CI/CD releases.",
      problem: "Large-scale energy metering platform needed to ingest and process high volumes of meter read data with guaranteed accuracy.",
      solution: "Built distributed processing pipelines leveraging AWS S3 for storage and SQS for asynchronous message queuing with automated validation.",
      engineeringDecisions: "Implemented AWS S3/SQS message ingestion handlers, refactored data access logic following Clean Architecture, and maintained Buildkite CI/CD deployment jobs.",
      impact: "Achieved 99% meter data accuracy and 50% faster knowledge transfer via structured documentation.",
      image: "/images/projects/optimatech-cloud.png",
      type: "enterprise"
    },
    {
      id: "mes-sap-integration",
      title: "MES–SAP Enterprise Integration & Automation",
      client: "Renesas Semiconductor",
      tags: ["VB.NET", "SQL Server", "Oracle", "SAP", "ABAP", "MES", "Enterprise Integration"],
      shortDescription: "Automated 2-way data integration between SAP ERP and Manufacturing Execution Systems.",
      fullDescription: "Engineered seamless integration between Manufacturing Execution Systems (MES) and SAP to automate material master registration and production planning processes, eliminating manual data entry cycles.",
      problem: "Disconnected SAP production planning and MES floor execution led to manual data re-entry and production delays.",
      solution: "Engineered automated two-way data integration between SAP (MM/PP modules) and MES floor databases.",
      engineeringDecisions: "Created real-time sync jobs and mistake-proofing rules to automate material master registration and planning runs.",
      impact: "Contributed to 75% overall floor productivity increase and > MYR 1M in operational cost savings.",
      image: "/images/projects/mes-sap-integration.png",
      type: "enterprise"
    },
    {
      id: "e-lot-control-slip",
      title: "e-Lot Control Slip (e-LCS) Poka-Yoke Automation",
      client: "Renesas Semiconductor",
      tags: ["VB.NET", "SQL Server", "MES", "Poka-Yoke", "Manufacturing Automation"],
      shortDescription: "Digitized manual paper lot templates with real-time system 'poka-yoke' to prevent semiconductor routing defects.",
      fullDescription: "Developed the Electronic Lot Control Slip (e-LCS) system to replace a highly error-prone manual routing paper process on the semiconductor manufacturing floor. Built-in 'poka-yoke' (mistake-proofing) logic was implemented, automatically blocking mismatched process steps in real time.",
      problem: "Manual paper lot templates caused operators to occasionally select incorrect process sheets, creating risk of wafer lot misprocessing.",
      solution: "Digitized routing templates into an MES-integrated software application with automated validation.",
      engineeringDecisions: "Implemented real-time poka-yoke (error-proofing) rules that automatically verify the lot's current routing step in SQL Server and block mismatched steps before physical processing.",
      impact: "Completely eliminated routing mismatch defects, saving 23 minutes per lot cycle (92% time savings).",
      image: "/images/projects/e-lot-control.png",
      type: "enterprise"
    },
    {
      id: "resort-systems",
      title: "Resort Operations System Suite",
      client: "Grand Dragon Resorts",
      tags: ["VB.NET", "SQL Server", "POS", "Biometrics", "System Architecture"],
      shortDescription: "End-to-end system suite replacing manual resort operations across departments.",
      fullDescription: "Led development of multiple in-house systems including Point of Sale (POS), Casino Management System (CMS), and Biometric Timekeeping (ATS). Automated manual workflows and centralized data management.",
      problem: "Manual paper-based resort tracking created revenue leakages and delay in department reporting.",
      solution: "Built integrated resort application suite combining POS, Casino Management System (CMS), and Biometric Timekeeping (ATS).",
      impact: "Fully automated resort operations, centralizing revenue and timekeeping data across departments.",
      image: "/images/projects/resort-systems.png",
      type: "enterprise"
    },
    {
      id: "enterprise-reporting",
      title: "Manufacturing Analytics & Spotfire Platform",
      client: "Renesas Semiconductor",
      tags: ["TIBCO Spotfire", "Oracle", "SQL Server", "JavaScript", "Manufacturing BI"],
      shortDescription: "Real-time manufacturing analytics and reporting dashboards for semiconductor operations.",
      fullDescription: "Developed interactive data visualization dashboards using TIBCO Spotfire integrated with Oracle and SQL Server production databases. Enabled semiconductor floor leadership to monitor real-time KPIs, equipment utilization, and yield metrics.",
      problem: "Operational decision-making was delayed by manual data extraction from floor production databases.",
      solution: "Engineered automated real-time analytics pipelines connecting Oracle/SQL databases directly to TIBCO Spotfire dashboards.",
      engineeringDecisions: "Implemented optimized SQL views, index tuning, and custom Spotfire script actions for instantaneous query performance.",
      impact: "Provided executive visibility into floor operations, supporting data-driven decisions across 24/7 manufacturing cycles.",
      image: "/images/projects/enterprise-reporting.png",
      type: "enterprise"
    }
  ] as Project[],

  aiAutomationData: {
    professionalWork: {
      title: "Professional AI-Assisted Development",
      company: "Discovery Holiday Parks / Emapta",
      role: "Backend Developer",
      summary: "Integrated modern AI tools into daily software development workflows to accelerate delivery while maintaining high code quality and security standards.",
      highlights: [
        "Cursor IDE Workflows: Formulated repository-level rules to enforce clean architecture patterns and project conventions.",
        "Model Context Protocol (MCP): Utilized MCP servers for read-only database schema inspection and Azure configuration context.",
        "Cursor Debugging & Diagnostics: Leveraged Cursor AI to debug production issues identified in Azure Application Insights, analyzing stack traces to pinpoint root-cause code locations, evaluate fix suggestions, update implementation logic, and verify resolution with unit tests."
      ]
    },
    independentProjects: [
      {
        id: "ai-resume-screener",
        title: "AI Resume Screener & Evaluation Pipeline",
        badge: "Independent Portfolio Project",
        tags: ["n8n", "OpenAI GPT", "Google Drive API", "Google Sheets", "Gmail API"],
        shortDescription: "Automated candidate resume parsing, evaluation against role criteria, and applicant tracking log.",
        fullDescription: "Built an independent n8n workflow that ingests applicant emails, parses PDF resumes via OpenAI GPT, extracts structured qualifications, evaluates fit against role criteria, and updates Google Sheets tracking.",
        problem: "HR teams spend an average of 12 minutes per applicant manually opening emails, extracting PDF resumes, scoring qualifications against job descriptions, and updating spreadsheets.",
        solution: "Built an end-to-end automated screening pipeline in n8n. Ingests candidate emails, parses raw PDF/Word resumes using OCR and text extraction, passes structured applicant context to OpenAI GPT for criteria evaluation, and updates tracking systems automatically.",
        techDetails: "Leveraged OpenAI JSON Schema enforcing strict typed outputs for candidate scores (0-100), key skills, missing requirements, and red flags. Configured n8n webhook triggers and Google Drive API for automated file parsing.",
        timeSavings: "Reduces screening time from 12 minutes to under 30 seconds per application (96% faster).",
        image: "/images/projects/n8n-ai-resume-screener.png",
        flowSteps: [
          {
            step: 1,
            title: "Trigger & Ingestion",
            description: "Listens for incoming applicant emails via Gmail API and automatically downloads PDF/Word resume attachments to Google Drive."
          },
          {
            step: 2,
            title: "Document Text Extraction",
            description: "Extracts raw text content from PDF and Word resumes using n8n document processing nodes."
          },
          {
            step: 3,
            title: "AI Criteria Evaluation & Scoring",
            description: "Passes extracted resume text and target job criteria to OpenAI GPT-4o with structured JSON schema output to evaluate fit, score key requirements, and highlight flags."
          },
          {
            step: 4,
            title: "ATS Sync & Hiring Team Alert",
            description: "Logs structured candidate evaluation data to Google Sheets tracking database and sends instant Slack/Email summaries to the hiring lead."
          }
        ]
      },
      {
        id: "support-ticket-triage",
        title: "AI Support Ticket Classification & Triage",
        badge: "Independent Portfolio Project",
        tags: ["n8n", "Zapier", "OpenAI GPT", "Gmail API", "Asana API"],
        shortDescription: "Automated support inbox monitoring, issue classification, sentiment analysis, and task creation.",
        fullDescription: "Independent automation pipeline built on n8n and Zapier. Extracts key details from incoming support emails, classifies urgency via OpenAI GPT, and routes tasks to appropriate team boards in Asana.",
        problem: "Support leads suffer from bottlenecked ticket triage where incoming customer emails sit unclassified, causing critical P1 system outages to wait in queue behind minor billing inquiries.",
        solution: "Designed an intelligent triage workflow combining n8n, Zapier, and OpenAI. Instantly categorizes incoming tickets by urgency (P1-P4), detects customer sentiment, extracts issue tags, and dispatches tasks directly to department boards.",
        techDetails: "Utilized zero-shot prompt engineering techniques for multi-class classification and sentiment scoring. Integrated webhook triggers with Asana and Slack APIs to handle immediate emergency alerts.",
        timeSavings: "Reduces ticket triage time from 4 minutes to 15 seconds (95% faster).",
        image: "/images/projects/n8n-ai-customer-support-ticket-triage.png",
        flowSteps: [
          {
            step: 1,
            title: "Inbox Monitoring",
            description: "Monitors support inbox continuously for incoming emails via Gmail webhook triggers."
          },
          {
            step: 2,
            title: "AI Categorization & Sentiment Analysis",
            description: "Evaluates message body using OpenAI GPT for issue categorization (Bug, Billing, Outage, Feature Request) and urgency level (P1-P4)."
          },
          {
            step: 3,
            title: "Dynamic Task Routing",
            description: "Automatically creates structured task cards in Asana assigned to relevant team leads with context tags."
          },
          {
            step: 4,
            title: "Emergency Escalation & Auto-Drafting",
            description: "Triggers immediate high-priority alerts in Slack for P1 critical outages and generates an automated initial response draft for agents."
          }
        ]
      },
      {
        id: "ai-invoice-processing",
        title: "AI Invoice Processing & Approval Workflow",
        badge: "Independent Portfolio Project",
        tags: ["n8n", "Zapier", "Google Gemini AI", "Xero API", "Google Drive", "Slack"],
        shortDescription: "Accounts payable automation extracting PDF invoice data, checking duplicates, and drafting Xero bills.",
        fullDescription: "Automated accounts payable pipeline using n8n and Google Gemini AI. Extracts line items from incoming invoice PDFs, checks for duplicates, drafts bills in Xero, archives files to Google Drive, and routes approval alerts.",
        problem: "Accounts payable personnel spend ~7 minutes per invoice manually typing line items into accounting software, risking duplicate payments and data entry errors.",
        solution: "Constructed a zero-touch AP automation flow using n8n and Google Gemini AI. Ingests vendor PDF invoices, extracts structured financial metrics via multimodal vision AI, validates vendor records, drafts Xero bills, and routes approval requests.",
        techDetails: "Used Google Gemini multimodal capability to parse complex multi-page PDF invoice tables, line items, VAT/tax calculations, and vendor details. Implemented Xero API duplicate check logic before bill creation.",
        timeSavings: "Reduces invoice processing time from 7 minutes to under 1 minute (91% faster).",
        image: "/images/projects/n8n-ai-invoice-processing.png",
        flowSteps: [
          {
            step: 1,
            title: "Invoice Ingestion & Archive",
            description: "Monitors vendor email attachments and Google Drive invoice upload folders, archiving source documents."
          },
          {
            step: 2,
            title: "Multimodal OCR & Vision Parsing",
            description: "Passes PDF invoice images to Google Gemini AI to extract line items, total amount, tax ID, and payment due dates."
          },
          {
            step: 3,
            title: "Duplicate Validation & Vendor Check",
            description: "Queries Xero API to verify vendor match and check if the invoice reference number has already been billed."
          },
          {
            step: 4,
            title: "Draft Bill Creation & Slack Approval",
            description: "Creates draft bill in Xero with attached source document and dispatches Slack approval notifications to finance managers."
          }
        ]
      }
    ] as AIIndependentProject[]
  },

  certifications: [
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
      id: "udemy-azure-bicep",
      title: "Learn Infra as a Code with Azure Bicep",
      issuer: "Udemy",
      date: "2025",
      url: "https://www.udemy.com/certificate/UC-49d83313-257a-496c-9907-8a189eb04dda/",
      image: "/images/certificates/udemy-azure-bicep.jpg",
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
      id: "udemy-react",
      title: "The Complete ReactJs Course - Basics to Advanced",
      issuer: "Udemy",
      date: "2026",
      url: "https://www.udemy.com/certificate/UC-42f4b61e-e673-4ed5-b8bc-42fdb952837f",
      image: "/images/certificates/udemy-react.jpg",
      type: "professional"
    },
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
      id: "n8n-quickstart",
      title: "QS101: n8n Quickstart",
      issuer: "n8n Academy",
      date: "2026",
      url: "https://badges.n8n.io/a8780446-ca11-44a5-872d-d30e2bd4cead#acc.qTuCVHO6",
      image: "/images/certificates/n8n-quickstart.jpg",
      type: "ai"
    }
  ] as Certification[]
};
