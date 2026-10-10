export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  flag?: string;
  employmentType?: 'freelance' | 'fulltime' | 'contract';
  tools?: string[];
  technologies?: string;
  confidentialityNote?: string;
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
    primaryStatement: "From enterprise backends to cloud & AI — I deliver production-ready systems that last.",
    supportingStatement: "Understand the business domain. Engineer resilient architecture. Deliver production-ready software that scales.",
    techBadges: ["C# / VB.NET / .NET", "ASP.NET Core", "Azure", "SQL Server", "APIs & Integrations"],
    overview: "Software engineer with 2 decades of experience across software development, enterprise applications, databases, integrations and IT systems, with 5+ years of C# / modern .NET and 15+ years of VB.NET enterprise experience.",
    longAbout: "My engineering career spans two decades of building software, enterprise applications, and production systems. My earlier foundation was built on desktop and web application development, database architecture (SQL Server, Oracle), manufacturing systems, and enterprise integrations using VB.NET. Over the last 5+ years, I have focused professionally on modern C#/.NET, ASP.NET Core, Azure cloud infrastructure, and robust backend microservices.\n\nI approach engineering with a systems mindset: understand the business domain, architect clean and scalable systems, and ensure reliable execution in production.",
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
      skills: ["C#", "VB.NET", ".NET", "ASP.NET Core", "Entity Framework Core", "SQL Server", "Microsoft Azure", "REST APIs", "Enterprise Integrations"]
    },
    {
      category: "Azure & Cloud Infrastructure",
      description: "Cloud services, messaging pipelines, resilience, and DevOps tooling",
      skills: ["Azure App Service", "Azure Functions", "Azure Service Bus", "Azure Redis", "Azure Blob Storage", "Azure Key Vault", "Application Insights", "CI/CD", "Git", "GitHub", "Azure DevOps", "xUnit", "NSubstitute", "Polly"]
    },
    {
      category: "Code Quality & Security",
      description: "Static analysis and dependency/vulnerability scanning integrated into CI pipelines",
      skills: ["SonarQube", "Snyk"]
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
      skills: ["Cursor (Repo Rules & MCP)", "n8n Workflows", "OpenAI API Integration", "Claude Code", "Claude Cowork", "Claude API", "OpenClaw", "Telegram Bots", "Node.js", "Google Drive API", "Google OAuth Sign-In"]
    }
  ] as SkillGroup[],

  experience: [
    {
      id: "freelance-automation",
      company: "Australian IT services firm",
      role: "Automation & Integration Developer (Freelance, Part-time)",
      period: "Sep 2026 – Present",
      confidentialityNote: "Client engagements under NDA",
      location: "Remote",
      employmentType: "freelance",
      technologies: "Node.js, MCP, Claude / Claude Code, OpenClaw, n8n, Docker, Linux, Azure (Key Vault, Bicep, NSG, Backup, CLI), Google OAuth / Drive API, rclone, Markdown / Obsidian, Caddy, systemd, GitHub Actions, Git.",
      description: [
        "Build AI knowledge platforms, document ingestion and synchronization pipelines, MCP integrations and automation workflows; operate and troubleshoot OpenClaw-based agents.",
        "Deliver secure cloud deployments, infrastructure as code and CI/CD, with access controls, secrets management, backups, automated tests and release rollback.",
        "Investigate and resolve web application and integration issues, implement features and regression tests, review changes and verify production releases.",
        "Translate business processes into scopes, estimates and delivery plans; produce SOPs, technical guides and runbooks, and support stakeholder sessions and remote setup."
      ]
    },
    {
      id: "emapta-discovery",
      technologies: "C#, .NET, ASP.NET Core, EF Core, REST APIs, Azure (Key Vault, Application Insights, Redis, Blob Storage, Service Bus, Functions, AI Search), SQL Server, Retool, Polly, SonarQube, Cursor, MCP.",
      company: "Discovery Holiday Parks / Emapta",
      role: "Backend Developer",
      period: "2023 – 2026",
      location: "Australia (Remote)",
      flag: "au",
      description: [
        "Built and maintained C# / .NET / ASP.NET Core APIs and EF Core data access for Deals and WikiCamps, contributing shared services across sites, forums, accounts, trips and media.",
        "Delivered event-driven workflows with Azure Service Bus, Functions, Redis, Blob Storage, Key Vault and Application Insights; integrated BookEasy, OSRM with Polly, and Azure AI Search.",
        "Owned the Retool Admin Portal, including pages, resources, SQL queries and multi-environment configuration for deals, bookings and WikiCamps.",
        "Enforced SonarQube code quality, security and coverage standards; used Cursor and MCP for read-only Azure / SQL context, reviewing and validating changes before release."
      ]
    },
    {
      id: "emapta-bidenergy",
      technologies: "C#, .NET, AWS S3, AWS SQS, Buildkite CI/CD, Snyk, Clean Architecture, Confluence.",
      company: "BidEnergy / Emapta (Optima Technology)",
      role: ".NET Developer",
      period: "2021 – 2023",
      location: "Australia (Remote)",
      flag: "au",
      description: [
        "Built, maintained and refactored C# / .NET energy applications, using AWS S3 and SQS for scalable storage and reliable asynchronous messaging.",
        "Applied Clean Architecture, code reviews and Snyk security scanning; automated validation maintained 99% meter data accuracy.",
        "Delivered releases across Test, UAT and Production using Buildkite CI/CD with minimal downtime.",
        "Created functional and technical documentation in Confluence, improving knowledge sharing and troubleshooting efficiency by 50%."
      ]
    },
    {
      id: "renesas",
      technologies: "VB.NET, ASP.NET, SQL Server, Oracle, SAP, MES, TIBCO Spotfire, VMware, Hyper-V.",
      company: "Renesas Semiconductor KL SDN BHD",
      role: "Senior Engineer",
      period: "2011 – 2021",
      location: "Kuala Langat, Malaysia",
      flag: "my",
      description: [
        "Served as a senior engineer managing and scaling 24/7 Manufacturing Execution Systems (MES) and enterprise IT applications across 100+ production, VMware, and Hyper-V servers.",
        "Engineered custom VB.NET, SQL Server, and Oracle solutions that boosted floor productivity by 75% and delivered > MYR 1M in verified time-saving operational benefits.",
        "Architected the Electronic Lot Control Slip (e-LCS) and e-Counting Balance System, implementing poka-yoke validation to eliminate lot-mixing defects and save up to 800,000 scrapped component pieces.",
        "Integrated SAP with MES to fully automate material master registration and production planning runs, eliminating manual data entry cycles.",
        "Built internal RSKL Helpdesk ticketing system (VB.NET, ASP.NET, SQL Server) and real-time Spotfire manufacturing analytics dashboards for operational leadership."
      ]
    },
    {
      id: "grand-dragon",
      technologies: "VB.NET, PHP, SQL Server, POS, Casino Management System, biometric timekeeping.",
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
      technologies: "VB.NET, SQL Server, Windows Server, SCO UNIX, Novell NetWare, Oracle OPERA PMS, Micros-Fidelio.",
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
      tags: ["C#", ".NET", "ASP.NET Core", "Entity Framework Core", "Azure", "Retool", "Polly", "REST API", "SonarQube"],
      shortDescription: "Production APIs, event-driven microservices, and internal admin portal supporting holiday park deals and travel bookings.",
      fullDescription: "Built and maintained RESTful APIs powering the Deals and WikiCamps platforms, integrated with a low-code Retool admin portal used daily by internal operations. Implemented secure configuration via Azure Key Vault, response caching via Redis, and resilient HTTP client integrations with Polly.",
      problem: "High-volume hospitality platform required resilient backend services, real-time booking synchronization, and efficient internal admin tools.",
      solution: "Engineered ASP.NET Core REST APIs with EF Core data access, integrated BookEasy and OSRM with Polly resilience policies, and built custom Retool admin portals.",
      engineeringDecisions: "Contributed to existing infrastructure including Azure Service Bus event handlers, Redis response caching, and Key Vault secret management, while creating custom Cursor AI error-checking workflows with strict human code review.",
      impact: "Delivered reliable production APIs and internal tools powering daily operations for Australian holiday park users.",
      image: "/images/projects/wikicamps-admin.png",
      type: "enterprise"
    },
    {
      id: "optimatech-cloud",
      title: "Cloud Meter Data Processing System",
      client: "BidEnergy / Optima Technology",
      tags: ["C#", ".NET", "AWS S3", "AWS SQS", "Buildkite CI/CD", "Clean Architecture", "Snyk"],
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
      id: "e-counting-balance",
      title: "e-Counting Balance System (eCB)",
      client: "Renesas Semiconductor",
      tags: ["VB.NET", "SQL Server", "Oracle", "MES", "Poka-Yoke", "Inventory Control"],
      shortDescription: "Automated tracking and lot consolidation system preventing material scrap of partial component lots.",
      fullDescription: "Architected and deployed the e-Counting Balance system to eliminate scrap of partial component lots in semiconductor manufacturing. Previously, up to 800,000 residual component pieces that did not form a complete lot were discarded to prevent lot mixing. The system logged, validated, and safely combined matching partial inventory into full production lots.",
      problem: "Residual component pieces (ranging up to 800,000 pieces) that did not make a complete lot were routinely scrapped to prevent lot mixing, causing severe material waste.",
      solution: "Engineered an automated e-Counting Balance tracking and poka-yoke (mistake-proofing) validation system in VB.NET and SQL Server to safely combine residual pieces into full production lots.",
      engineeringDecisions: "Built real-time lot combination logic with barcode verification and database constraints to guarantee zero lot mixing while consolidating partial lots.",
      impact: "Eliminated the scrapping of up to 800,000 component pieces, dramatically reducing material waste and driving substantial cost savings.",
      image: "/images/projects/e-counting-balance.png",
      type: "enterprise"
    },
    {
      id: "resort-systems",
      title: "Resort Operations System Suite",
      client: "Grand Dragon Resorts",
      tags: ["PHP", "MySQL", "POS", "Biometrics", "System Architecture"],
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
    },
    {
      id: "rskl-helpdesk",
      title: "RSKL IT Helpdesk & Service Management System",
      client: "Renesas Semiconductor",
      tags: ["VB.NET", "ASP.NET", "SQL Server", "IIS", "IT Service Management"],
      shortDescription: "Centralized IT ticketing and automated SLA tracking system powering 24/7 semiconductor manufacturing floor support.",
      fullDescription: "Engineered and deployed an internal web-based IT ticketing system to centralize helpdesk requests, hardware maintenance dispatches, and infrastructure incident reporting across Renesas KL manufacturing operations. The system introduced automated SLA escalation workflows, technician workload assignment, and real-time resolution metrics.",
      problem: "Unstructured email and phone calls for floor IT issues caused response delays, lost support requests, and zero visibility into SLAs or equipment downtime.",
      solution: "Engineered a web-based IT Service Management portal in VB.NET, ASP.NET, and SQL Server with automated ticket routing, SLA timers, and email notifications.",
      engineeringDecisions: "Built background SLA tracking jobs in SQL Server, role-based ticket assignment rules, and automated technician notification alerts to ensure continuous 24/7 support readiness.",
      impact: "Streamlined IT service delivery across 100+ production servers and manufacturing departments, achieving > 99% SLA compliance and reducing ticket turnaround times.",
      image: "/images/projects/rskl-helpdesk.png",
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
        "Model Context Protocol (MCP): Utilized MCP servers for read-only database schema inspection and Azure configuration context.",
        "Cursor Debugging & Diagnostics: Leveraged Cursor AI to debug production issues identified in Azure Application Insights, analyzing stack traces to pinpoint root-cause code locations, evaluate fix suggestions, update implementation logic, and verify resolution with unit tests."
      ]
    },
    clientProjects: [
      {
        id: "drive-knowledge-brain",
        title: "AI Knowledge Brain",
        badge: "Confidential Client Work",
        tags: ["Node.js", "MCP", "Claude / Claude Code", "n8n", "Google OAuth / Drive API", "Markdown / Obsidian", "Docker", "Azure / Bicep", "GitHub Actions"],
        shortDescription: "One shared knowledge core connects Claude, business documents and human-reviewed workflows. Explore how meeting notes, document handling, onboarding and agent-assisted work fit together.",
        fullDescription: "An interconnected architecture for knowledge retrieval and business automation, spanning users, access channels, shared services and five workflow lanes. Explore each flow below. The diagram presents the platform architecture and scope without implying that every lane has been implemented; client identities and confidential operational details are excluded.",
        problem: "Company knowledge was scattered across Google Drive files that staff had to search manually, and any AI assistant would quickly go out of date as documents changed.",
        solution: "The architecture connects document imports, conversation saves, MCP search and Google-authenticated knowledge access with transcript summaries, CRM notes, draft follow-ups, document checklists, broker approvals, onboarding visibility and an agent-assisted Telegram interface.",
        techDetails: "Node.js, MCP, Claude / Claude Code, Markdown / Obsidian, Google OAuth / Drive API, rclone, n8n, Docker, Azure / Bicep and GitHub Actions. Shared controls include tiered knowledge, request auditing, protected secrets, verified backups, CI tests and manual deployments with automatic rollback. Integration channels include Teams, Gmail, CRM and Telegram.",
        flowSteps: [
          {
            step: 1,
            title: "Document Ingestion",
            description: "Process connected business documents into reusable knowledge."
          },
          {
            step: 2,
            title: "Knowledge Synchronization",
            description: "Keep knowledge current as source documents change."
          },
          {
            step: 3,
            title: "Authenticated Access",
            description: "Apply identity verification and authorization to knowledge access."
          },
          {
            step: 4,
            title: "MCP-Connected AI Assistance",
            description: "Connect approved knowledge to Claude for search and AI-assisted answers."
          }
        ]
      }
    ] as AIIndependentProject[],
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
        id: "recruitment-automation-system",
        title: "Recruitment Automation System — Remote Job Aggregator",
        badge: "Independent Portfolio Project",
        tags: ["n8n", "Remotive API", "Airtable", "Slack API", "REST API"],
        shortDescription: "Scheduled pipeline that pulls remote developer job listings and syncs them into a deduplicated Airtable database.",
        fullDescription: "Built an independent n8n workflow that polls the Remotive public job board API on a daily schedule, validates and flattens the response, then upserts each listing into an Airtable 'Job Openings' table using the external job ID as an idempotency key to prevent duplicates. Empty or malformed API responses are automatically routed to a Slack alert instead of failing silently.",
        problem: "Manually checking remote job boards for new developer openings is repetitive and easy to miss postings, with no single source of truth for tracking title, company, location, salary, and posting date.",
        solution: "Automated a scheduled n8n workflow that fetches listings from the Remotive API, validates the payload, flattens each job into a normalized record, and upserts it into Airtable keyed on External Job ID so records update in place instead of duplicating.",
        techDetails: "Configured HTTP Request retries with exponential backoff (max 3 attempts) to gracefully handle 429/5xx responses from the Remotive API. Used an If node to short-circuit on an empty jobs payload, routing that path to a Slack notification via OAuth2 instead of the database write. The Airtable upsert matches on 'External Job ID' across a defined field schema (Title, Status, Salary, Location, Date Posted, Job URL).",
        timeSavings: "Replaces manual daily job-board checking with a fully automated, deduplicated feed that runs unattended on a daily schedule.",
        image: "/images/projects/n8n-recruitment-automation-system.png",
        flowSteps: [
          {
            step: 1,
            title: "Scheduled Trigger",
            description: "Runs daily (with manual trigger support) to keep the job database current with the latest market listings."
          },
          {
            step: 2,
            title: "Remotive API Extraction",
            description: "Polls the Remotive REST API for developer roles, with exponential backoff retries on rate limits or server errors."
          },
          {
            step: 3,
            title: "Validate & Flatten",
            description: "Checks the response contains a non-empty jobs array, then splits the nested payload into individual job records."
          },
          {
            step: 4,
            title: "Airtable Upsert",
            description: "Maps each record to the Airtable schema and upserts by External Job ID, guaranteeing zero duplicate entries."
          },
          {
            step: 5,
            title: "Error Alerting",
            description: "Empty or invalid payloads are routed to a Slack channel alert instead of silently failing the pipeline."
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
      id: "taraai-make",
      title: "No Code Automation with Make.com",
      issuer: "TaraAI",
      date: "2026",
      url: "https://my-certificates.com/certificates/6a5216d083f03b163af9fa8e",
      image: "/images/certificates/taraai-make.jpg",
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
      title: "Data Engineering Pathway",
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
      id: "project-sparta-data-visualization",
      title: "Data Visualization Fundamentals",
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
    }
  ] as Certification[]
};
