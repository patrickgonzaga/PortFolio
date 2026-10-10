export type PlatformStatus = 'LIVE' | 'BUILT BUT OFF' | 'PLANNED';

export const aiPlatform = {
  users: ['Staff', 'Brokers / advisers', 'Admin / client service', 'Developers / operators'],
  channels: [
    { name: 'Claude connector', status: 'LIVE', description: 'Claude web, desktop and mobile connect to the knowledge base through a custom connector and Google sign-in.' },
    { name: 'Claude Code', status: 'LIVE', description: 'Connects to the same knowledge service as an MCP server.' },
    { name: 'Web notes viewer', status: 'LIVE', description: 'Read-only knowledge browsing in the browser.' },
    { name: 'Claude menu', status: 'LIVE', description: 'Start here, Make a document, Save what we learned, and project / playbook entries loaded from the knowledge base.' },
    { name: 'Workflow administration', status: 'LIVE', description: 'Workflow administration and secure operational access for the platform team only.' },
    { name: 'Teams approvals', status: 'PLANNED', description: 'Brokers review checklists using Approve / Edit actions.' },
    { name: 'Status board', status: 'PLANNED', description: 'Read-only visibility of open files for admin staff.' },
    { name: 'Gmail drafts', status: 'PLANNED', description: 'Follow-ups and chase-ups remain drafts until a person sends them.' },
    { name: 'Telegram assistant', status: 'PLANNED', description: 'AI assistance through chat, restricted to approved users.' },
  ] as { name: string; status: PlatformStatus; description: string }[],
  gate: 'Google sign-in + approved-user access, checked on every web / Claude request.',
  services: [
    { name: 'Secure front door', detail: 'HTTPS reverse proxy and access controls' },
    { name: 'MCP knowledge service', detail: 'Search · read · list · save' },
    { name: 'Versioned knowledge vault', detail: 'Markdown / Obsidian; authoritative knowledge and records ranked ahead of raw sources' },
    { name: 'Automation engine', detail: 'n8n workflows + Node.js scripts' },
    { name: 'Audit & secrets', detail: 'Request audit trail and protected credentials' },
    { name: 'Backup & lifecycle', detail: 'Scheduled backups and shutdown controls' },
    { name: 'Code & CI', detail: 'Version control and automated tests' },
    { name: 'Controlled deployment', detail: 'Manual releases; health checks trigger automatic rollback' },
  ],
  lanes: [
    {
      name: 'Knowledge base', status: 'LIVE', summary: 'Shared knowledge, ingestion and AI-assisted retrieval.',
      trigger: 'Connected documents, manual imports and saved conversations.',
      inputs: [
        { name: 'Document / past Claude project and chat imports', status: 'LIVE' },
        { name: 'Save from a Claude conversation', status: 'LIVE' },
        { name: 'Google Drive auto-sync', status: 'BUILT BUT OFF' },
      ],
      steps: ['List sources', 'Compare stored files', 'Download batch', 'Convert documents', 'Write knowledge notes', 'Delete temporary copies'],
      formats: 'Word, PDF, PowerPoint, Excel, CSV, HTML, text and legacy Office formats.',
      controls: 'Secrets are refused; protective sync stops guard against unexpected source loss; verified backups precede changes; the live knowledge vault is protected from reset.',
      outputs: ['Answers in Claude', 'Read-only notes viewer'],
    },
    {
      name: 'Meeting & call workflow', status: 'PLANNED', summary: 'Turn transcripts into useful notes and reviewed follow-ups.',
      trigger: 'Scheduled checks for transcripts in a shared folder.',
      steps: ['Transcript arrives', 'Save to knowledge base', 'AI summary / adviser notes / coaching', 'Save generated notes', 'Gmail draft + CRM notes'],
      controls: 'Follow-up emails stay as drafts for a person to send.',
      outputs: ['Notes through Claude', 'Gmail follow-up draft', 'CRM record notes'],
    },
    {
      name: 'Document & credit agent', status: 'PLANNED', summary: 'Organize documents and identify checklist gaps.',
      trigger: 'A new file arrives in an incoming-documents folder.',
      steps: ['Incoming document', 'AI classification', 'File into correct folder', 'Compare document checklist', 'Identify missing items', 'Gmail chase-up draft'],
      controls: 'Chase-up emails stay as drafts for a person to send.',
      outputs: ['Organized folders', 'Missing-document list', 'Gmail chase-up draft'],
    },
    {
      name: 'Client onboarding', status: 'PLANNED', summary: 'Visibility first: intake, checklists, approval and status.',
      trigger: 'Read-only checks of an onboarding mailbox.',
      steps: ['Read-only intake', 'Rules + CRM deal matching', 'Applicant checklists', 'Teams Approve / Edit', 'Read-only status board', 'Monitoring + alerts'],
      controls: 'Unrecognized messages go to an admin queue; duplicates are skipped. Broker-provided checklists take precedence. Reconciliation, test runs and heartbeats support reliability, with alerts after prolonged silence. No client messages are sent in the first stage.',
      outputs: ['Broker-approved checklists', 'Admin review queue', 'Open-file status'],
      later: ['Human-approved sending', 'Email reminders', 'Automatic document classification'],
    },
    {
      name: 'AI technical assistant', status: 'PLANNED', summary: 'Approved staff request agent-assisted work through Telegram.',
      trigger: 'An approved user sends a Telegram message.',
      steps: ['Staff message', 'Approved-user check', 'Task routing', 'Claude Code execution', 'Delegate to agents', 'Status + Telegram reply'],
      controls: 'Subscription-authenticated Claude Code execution; no pay-per-use API-key execution.',
      outputs: ['Task status', 'Telegram response'],
    },
  ] as {
    name: string; status: PlatformStatus; summary: string; trigger: string;
    inputs?: { name: string; status: PlatformStatus }[]; steps: string[];
    formats?: string; controls: string; outputs: string[]; later?: string[];
  }[],
};
