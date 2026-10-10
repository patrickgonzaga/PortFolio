import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Server,
  Database,
  Workflow,
  Bot,
  Cpu,
  Layers,
  Zap,
  Activity,
  Cloud,
  ChevronRight,
  Brain,
  FileText,
  RefreshCw,
  ShieldCheck,
  Send,
  Sparkles,
  type LucideIcon
} from 'lucide-react';

type ArchitectureMode = 'brain' | 'cloud' | 'automation';

interface NodeItem {
  id: string;
  name: string;
  category: string;
  tech: string;
  icon: LucideIcon;
  status: string;
  metric: string;
  details: string;
  x: number; // percentage in diagram
  y: number; // percentage in diagram
  connections: string[]; // target node ids
}

const BRAIN_NODES: NodeItem[] = [
  {
    id: 'gdrive',
    name: 'Google Drive Docs',
    category: 'Source Knowledge Ingestion',
    tech: 'Google Drive API v3',
    icon: FileText,
    status: 'SYNCHRONIZED',
    metric: 'Real-time watcher',
    details: 'Monitors client workspace folders for newly created, updated, or deleted documentation without full re-scans.',
    x: 12,
    y: 50,
    connections: ['nodesync']
  },
  {
    id: 'nodesync',
    name: 'Node.js Markdown Engine',
    category: 'Ingestion & Chunking',
    tech: 'Node.js / Markdown Parser',
    icon: RefreshCw,
    status: 'OPTIMIZED',
    metric: 'Incremental diffing',
    details: 'Extracts formatted text and tables into versionable Markdown chunks, updating only modified documents for compact context.',
    x: 36,
    y: 30,
    connections: ['auth']
  },
  {
    id: 'auth',
    name: 'Google OAuth & RBAC',
    category: 'Perimeter Security',
    tech: 'Google Sign-In / Allowlist',
    icon: ShieldCheck,
    status: 'PROTECTED',
    metric: 'Domain allowlist',
    details: 'Enforces strict enterprise perimeter access, allowing only verified internal staff accounts to reach knowledge base content.',
    x: 60,
    y: 70,
    connections: ['claude']
  },
  {
    id: 'claude',
    name: 'Claude AI Reasoning Core',
    category: 'LLM Intelligence',
    tech: 'Anthropic Claude API',
    icon: Sparkles,
    status: 'ACTIVE',
    metric: 'Context-injected',
    details: 'Leverages synced Markdown documentation to answer complex staff questions with high accuracy and source citations.',
    x: 74,
    y: 30,
    connections: ['staff']
  },
  {
    id: 'staff',
    name: 'Staff Response & Bots',
    category: 'Multi-Channel Delivery',
    tech: 'Web UI & Telegram (OpenClaw)',
    icon: Send,
    status: 'DELIVERED',
    metric: '< 1.4s response',
    details: 'Serves answers behind Google sign-in and delivers conversational automated bots over Telegram using OpenClaw integration.',
    x: 92,
    y: 52,
    connections: []
  }
];

const CLOUD_NODES: NodeItem[] = [
  {
    id: 'gateway',
    name: 'API Gateway',
    category: 'Ingress & Security',
    tech: 'ASP.NET Core 8 / REST',
    icon: Server,
    status: 'ACTIVE',
    metric: '< 18ms latency',
    details: 'JWT bearer auth, rate limiting, request validation, and zero-trust perimeter routing.',
    x: 12,
    y: 48,
    connections: ['servicebus', 'redis']
  },
  {
    id: 'servicebus',
    name: 'Azure Service Bus',
    category: 'Async Event Bus',
    tech: 'Azure Messaging / Queues',
    icon: Cloud,
    status: 'OPTIMAL',
    metric: '99.99% delivery',
    details: 'Decoupled pub/sub event pipeline with dead-letter queueing and Polly retry resilience.',
    x: 42,
    y: 28,
    connections: ['worker', 'insights']
  },
  {
    id: 'redis',
    name: 'Azure Cache',
    category: 'In-Memory Store',
    tech: 'Azure Redis / Cache',
    icon: Zap,
    status: 'CACHED',
    metric: '98% hit ratio',
    details: 'Distributed response cache for high-throughput Deals & WikiCamps APIs.',
    x: 42,
    y: 72,
    connections: ['worker', 'sql']
  },
  {
    id: 'worker',
    name: '.NET Worker Services',
    category: 'Compute & Logic',
    tech: 'C# / EF Core / Clean Arch',
    icon: Cpu,
    status: 'PROCESSING',
    metric: 'Zero-drop guarantee',
    details: 'Background event consumers, booking synchronization, and poka-yoke validation engines.',
    x: 72,
    y: 38,
    connections: ['sql', 'insights']
  },
  {
    id: 'sql',
    name: 'Enterprise SQL Server',
    category: 'Persistence Layer',
    tech: 'SQL Server / Oracle MES',
    icon: Database,
    status: 'SYNCHRONIZED',
    metric: 'ACID compliant',
    details: 'High-availability relational store with optimized indexing, views, and automated backups.',
    x: 72,
    y: 78,
    connections: []
  },
  {
    id: 'insights',
    name: 'Observability & APM',
    category: 'Telemetry & Sentry',
    tech: 'App Insights / SonarQube',
    icon: Activity,
    status: 'HEALTHY',
    metric: 'Live traces',
    details: 'Distributed telemetry, real-time error logging, AI-assisted stack trace diagnostics.',
    x: 92,
    y: 38,
    connections: []
  }
];

const AUTOMATION_NODES: NodeItem[] = [
  {
    id: 'trigger',
    name: 'Ingestion Triggers',
    category: 'Event Ingestion',
    tech: 'Webhooks / Remotive / Gmail',
    icon: Cloud,
    status: 'LISTENING',
    metric: 'Real-time sync',
    details: 'Monitors vendor mailboxes, Google Drive folder edits, and scheduled Cron triggers.',
    x: 12,
    y: 50,
    connections: ['n8n']
  },
  {
    id: 'n8n',
    name: 'n8n Workflow Hub',
    category: 'Pipeline Orchestration',
    tech: 'n8n Node Workflows',
    icon: Workflow,
    status: 'ORCHESTRATING',
    metric: 'Sub-second routing',
    details: 'Visual integration engine with exponential backoff retries and payload deduplication.',
    x: 42,
    y: 50,
    connections: ['ai_agent', 'archive']
  },
  {
    id: 'ai_agent',
    name: 'LLM Reasoning Core',
    category: 'AI Multimodal Extraction',
    tech: 'Claude API / OpenAI GPT-4o',
    icon: Bot,
    status: 'REASONING',
    metric: 'Structured JSON',
    details: 'Zero-shot schema parsing for multi-page PDF invoices, resume scoring, and ticket triage.',
    x: 70,
    y: 30,
    connections: ['destinations']
  },
  {
    id: 'archive',
    name: 'Audit Store & Sheets',
    category: 'Persistent Log',
    tech: 'Google Drive / Airtable / SQL',
    icon: Database,
    status: 'INDEXED',
    metric: 'Idempotent write',
    details: 'Deduplicated record upserting preventing double-billing and missing applicant records.',
    x: 70,
    y: 74,
    connections: ['destinations']
  },
  {
    id: 'destinations',
    name: 'Enterprise Sync & Alerts',
    category: 'Production Actions',
    tech: 'Xero API / Asana / Slack / Telegram',
    icon: Layers,
    status: 'DELIVERED',
    metric: '95%+ time saved',
    details: 'Automatic draft bill creation in Xero, P1 incident triage in Slack, and executive alerts.',
    x: 92,
    y: 50,
    connections: []
  }
];

export const ArchitectureVisualizer: React.FC = () => {
  const [mode, setMode] = useState<ArchitectureMode>('brain');
  const [selectedNodeId, setSelectedNodeId] = useState<string>('gdrive');

  const nodes = mode === 'brain' ? BRAIN_NODES : mode === 'cloud' ? CLOUD_NODES : AUTOMATION_NODES;
  const activeNode = nodes.find(n => n.id === selectedNodeId) || nodes[0];

  const handleModeChange = (newMode: ArchitectureMode) => {
    setMode(newMode);
    if (newMode === 'brain') setSelectedNodeId('gdrive');
    else if (newMode === 'cloud') setSelectedNodeId('gateway');
    else setSelectedNodeId('trigger');
  };

  const handleNextNode = () => {
    const currentIndex = nodes.findIndex(n => n.id === activeNode.id);
    const nextNode = nodes[(currentIndex + 1) % nodes.length];
    setSelectedNodeId(nextNode.id);
  };

  return (
    <div className="w-full rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-xl shadow-2xl overflow-hidden font-sans">
      {/* Modern Pipeline Engine Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50/90 dark:bg-slate-900/70">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center">
            {mode === 'brain' ? <Brain size={15} /> : mode === 'cloud' ? <Cloud size={15} /> : <Workflow size={15} />}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-tight text-slate-900 dark:text-white">
                Cloud & AI Architecture Engine
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse hidden sm:inline-block" />
            </div>
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block -mt-0.5">
              Interactive Production Architecture Flows
            </span>
          </div>
        </div>

        {/* Mode Switch Tabs */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-200/70 dark:bg-slate-800/80 border border-slate-300/50 dark:border-slate-700/60 overflow-x-auto">
          <button
            onClick={() => handleModeChange('brain')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
              mode === 'brain'
                ? 'bg-sky-600 text-white shadow-sm font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Brain size={13} />
            AI Knowledge Brain
          </button>
          <button
            onClick={() => handleModeChange('cloud')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
              mode === 'cloud'
                ? 'bg-sky-600 text-white shadow-sm font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Cloud size={13} />
            .NET / Azure Cloud
          </button>
          <button
            onClick={() => handleModeChange('automation')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
              mode === 'automation'
                ? 'bg-sky-600 text-white shadow-sm font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Workflow size={13} />
            n8n Automation
          </button>
        </div>
      </div>

      {/* Main Interactive Diagram Canvas */}
      <div className="relative w-full h-[360px] sm:h-[400px] p-6 blueprint-grid overflow-hidden select-none">
        {/* Visual Pipeline Flow Direction Banner */}
        <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-slate-600 dark:text-slate-400 pointer-events-none z-0">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
            Ingress & Source
          </span>
          <span className="hidden sm:flex items-center gap-1 opacity-70">
            Processing & Validation ➔
          </span>
          <span className="flex items-center gap-1">
            Output & Delivery
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          </span>
        </div>

        {/* SVG Conduits & Flowing Packets */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <linearGradient id="conduit-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {nodes.map(source =>
            source.connections.map(targetId => {
              const target = nodes.find(n => n.id === targetId);
              if (!target) return null;

              const isHighlighted = selectedNodeId === source.id || selectedNodeId === target.id;

              return (
                <g key={`${source.id}-${target.id}`}>
                  {/* Background static line */}
                  <line
                    x1={`${source.x}%`}
                    y1={`${source.y}%`}
                    x2={`${target.x}%`}
                    y2={`${target.y}%`}
                    stroke={isHighlighted ? "#0284c7" : "currentColor"}
                    className={isHighlighted ? "text-sky-500 opacity-60" : "text-slate-300 dark:text-slate-800 opacity-40"}
                    strokeWidth={isHighlighted ? "2.5" : "1.5"}
                  />
                  {/* Animated pulsing data packets */}
                  <line
                    x1={`${source.x}%`}
                    y1={`${source.y}%`}
                    x2={`${target.x}%`}
                    y2={`${target.y}%`}
                    stroke="url(#conduit-grad)"
                    strokeWidth={isHighlighted ? "3" : "2"}
                    className="conduit-line"
                  />
                </g>
              );
            })
          )}
        </svg>

        {/* Nodes Grid */}
        <div className="relative w-full h-full z-10">
          {nodes.map(node => {
            const Icon = node.icon;
            const isSelected = selectedNodeId === node.id;
            const isConnected = activeNode.connections.includes(node.id) || node.connections.includes(activeNode.id);

            return (
              <div
                key={node.id}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                onClick={() => setSelectedNodeId(node.id)}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              >
                <div
                  className={`flex items-center gap-2.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border transition-all duration-300 backdrop-blur-md ${
                    isSelected
                      ? 'bg-sky-600 text-white border-sky-400 shadow-[0_0_25px_rgba(2,132,199,0.5)] scale-105'
                      : isConnected
                      ? 'bg-sky-50 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border-sky-300 dark:border-sky-700/80 shadow-md'
                      : 'bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-sky-400 dark:hover:border-sky-500 shadow-sm'
                  }`}
                >
                  <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-sky-600 dark:text-sky-400'}`}>
                    <Icon size={16} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold leading-tight whitespace-nowrap">
                      {node.name}
                    </span>
                    <span className={`text-[10px] font-mono leading-tight whitespace-nowrap ${isSelected ? 'text-white/80' : 'text-slate-500 dark:text-slate-400'}`}>
                      {node.tech}
                    </span>
                  </div>
                </div>

                {/* Status Dot */}
                <span className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-[#090d16] ${
                  isSelected ? 'bg-white animate-ping' : 'bg-emerald-500'
                }`} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Inspector Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeNode.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/90 dark:bg-[#070b12]/95 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 shrink-0">
              <activeNode.icon size={20} />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  {activeNode.category}
                </span>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  STATUS: {activeNode.status}
                </span>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {activeNode.metric}
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                {activeNode.name} — <span className="font-mono text-xs font-normal text-slate-600 dark:text-slate-400">{activeNode.tech}</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">
                {activeNode.details}
              </p>
            </div>
          </div>

          <button
            onClick={handleNextNode}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-200/80 dark:bg-slate-800 hover:bg-sky-500 hover:text-white dark:hover:bg-sky-600 text-xs font-mono text-slate-700 dark:text-slate-300 transition-colors shrink-0 self-end sm:self-center"
            title="Step to next pipeline node"
          >
            <span>Next Step</span>
            <ChevronRight size={14} />
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ArchitectureVisualizer;
