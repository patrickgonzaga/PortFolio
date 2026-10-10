import { useId, useState } from 'react';
import { aiPlatform } from '../../data/aiPlatformData';
import './knowledge-brain.css';

const laneLabels = ['Knowledge base', 'Meetings & calls', 'Document & credit', 'Client onboarding', 'AI technical assistant'];
const laneY = [135, 257, 379, 501, 623];
function Node({ x, y, width = 200, title, detail, accent = false }: { x: number; y: number; width?: number; title: string; detail?: string; accent?: boolean }) {
  return <g className={accent ? 'brain-node brain-node-accent' : 'brain-node'}><rect x={x} y={y} width={width} height={detail ? 64 : 44} rx={12} /><text x={x + 14} y={y + 25} className="brain-node-title">{title}</text>{detail && <text x={x + 14} y={y + 46} className="brain-node-detail">{detail}</text>}</g>;
}
export function KnowledgeBrainFlow({ expanded = false }: { expanded?: boolean }) {
  const id = useId().replace(/:/g, '');
  const [selected, setSelected] = useState(0);
  const lane = aiPlatform.lanes[selected];
  return <figure className="knowledge-brain" aria-label="Interconnected AI knowledge and automation platform">
    <div className="brain-heading"><div><p>AI KNOWLEDGE & AUTOMATION</p><h3>Knowledge at the centre. Every workflow connected.</h3></div><span>Explore the connections</span></div>
    <div className="brain-map-scroll" tabIndex={0} aria-label="Platform diagram. Scroll horizontally on smaller screens.">
      <svg className="brain-map" viewBox="0 0 1200 820" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
        <title id={`${id}-title`}>Interconnected AI automation platform</title><desc id={`${id}-desc`}>Staff, brokers, administrators and platform operators connect through Claude, web, Teams, Gmail and Telegram to a shared knowledge and automation core. The core connects knowledge, meeting, document, onboarding and technical assistant workflows.</desc>
        <defs><marker id={`${id}-arrow`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10" fill="currentColor" /></marker></defs>
        <g className="brain-wires" fill="none" markerEnd={`url(#${id}-arrow)`}>
          {[150,244,338,432].map(y => <path key={`user${y}`} d={`M222 ${y} H255`} />)}
          <path d="M255 150 V560" markerEnd="none" />
          {[184,278,372,466,560].map(y => <path key={`channel${y}`} d={`M255 ${y} H285`} />)}
          {[184,278,372,466,560].map(y => <path key={`access${y}`} d={`M465 ${y} C500 ${y},492 385,535 385`} />)}
          {laneY.map(y => <path key={`lane${y}`} d={`M780 385 C833 385,817 ${y + 32},878 ${y + 32}`} />)}
          <path d="M658 490 L658 665" /><path d="M980 687 C980 758,790 758,790 758" />
          <path d="M878 167 C835 167,843 225,780 225" className="brain-wire-return" />
        </g>
        <g className="brain-layer-label"><text x="22" y="80">01 / PEOPLE</text><text x="285" y="80">02 / ACCESS</text><text x="535" y="80">03 / SHARED CORE</text><text x="878" y="80">04 / AUTOMATION</text></g>
        {aiPlatform.users.map((user,i)=><Node key={user} x={22} y={128+i*94} title={user} width={200} />)}
        <Node x={285} y={152} width={180} title="Claude + Claude Code" detail="Connector / MCP / menu" />
        <Node x={285} y={246} width={180} title="Browser" detail="Notes / status board" />
        <Node x={285} y={340} width={180} title="Teams + Gmail" detail="Approvals / email drafts" />
        <Node x={285} y={434} width={180} title="Telegram" detail="Approved-user assistant" />
        <Node x={285} y={528} width={180} title="Platform operations" detail="Workflow administration" />
        <g className="brain-core"><rect x="535" y="170" width="245" height="320" rx="26"/><circle cx="658" cy="228" r="24"/><path d="M649 216 Q639 216 642 227 Q636 239 649 241 M667 216 Q677 216 674 227 Q680 239 667 241 M649 213 L649 244 M667 213 L667 244 M649 226 L657 232 L667 226" fill="none" strokeWidth="2"/><text x="658" y="285" textAnchor="middle" className="brain-core-title">AI Knowledge Brain</text><text x="658" y="311" textAnchor="middle" className="brain-core-caption">ONE SHARED KNOWLEDGE CORE</text><path d="M558 330H757" className="brain-core-divider"/>{['MCP: search / read / list / save','Versioned Markdown knowledge','n8n + Node.js orchestration','Claude-powered assistance'].map((t,i)=><text key={t} x="558" y={357+i*30} className="brain-core-service">{t}</text>)}</g>
        <Node x={878} y={135} width={300} title="Knowledge base" detail="Import / convert / sync / retrieve" accent />
        <Node x={878} y={257} width={300} title="Meetings & calls" detail="Transcript / summary / CRM / draft" accent />
        <Node x={878} y={379} width={300} title="Document & credit" detail="Classify / checklist / chase-up draft" accent />
        <Node x={878} y={501} width={300} title="Client onboarding" detail="Intake / approval / visibility" accent />
        <Node x={878} y={623} width={300} title="AI technical assistant" detail="Route / delegate / report back" accent />
        <g className="brain-foundation"><rect x="22" y="665" width="758" height="133" rx="16"/><text x="44" y="695" className="brain-node-title">Trust & operations run beneath every connection</text><text x="44" y="726" className="brain-node-detail">Google sign-in / allow-list / HTTPS / request auditing / protected secrets</text><text x="44" y="752" className="brain-node-detail">Version control / tested releases / backups / health checks / rollback</text><text x="44" y="777" className="brain-node-detail">Authoritative knowledge / records / raw sources</text></g>
      </svg>
    </div>
    <p className="brain-scroll-hint">On smaller screens, swipe across the diagram to explore.</p>
    {expanded && <div className="brain-details">
      <div className="brain-detail-heading"><h4>Follow a workflow</h4><p>Select a lane to explore its connections.</p></div>
      <div className="brain-lane-tabs" role="group" aria-label="Choose automation flow">{laneLabels.map((name,i)=><button type="button" key={name} aria-pressed={selected===i} onClick={()=>setSelected(i)}>{name}</button>)}</div>
      <div className="brain-flow-diagram" aria-label={`${lane.name} flow diagram`}><div className="brain-flow-source"><span>SOURCE</span>{lane.trigger}</div><div className="brain-flow-arrow" aria-hidden="true">&#8595;</div><ol>{lane.steps.map((step,i)=><li key={step}><span>{String(i+1).padStart(2,'0')}</span>{step}</li>)}</ol><div className="brain-flow-arrow" aria-hidden="true">&#8595;</div><div className="brain-flow-output"><span>OUTPUTS</span>{lane.outputs.join(' / ')}</div></div>
      <div className="brain-detail-copy"><p>{lane.summary}</p>{lane.inputs && <p><strong>Sources: </strong>{lane.inputs.map(input=>input.name).join('; ')}.</p>}{lane.formats && <p><strong>Formats: </strong>{lane.formats}</p>}<p><strong>Controls: </strong>{lane.controls}</p>{lane.later && <p><strong>Later stages: </strong>{lane.later.join('; ')}.</p>}</div>
      <div className="brain-platform-description"><h4>The shared platform</h4><p>{aiPlatform.gate}</p>{aiPlatform.services.map(service=><p key={service.name}><strong>{service.name}: </strong>{service.detail}.</p>)}<h4>Access channels</h4>{aiPlatform.channels.map(channel=><p key={channel.name}><strong>{channel.name}: </strong>{channel.description}</p>)}</div>
    </div>}
    <figcaption>Public architecture overview. Client identities and confidential operational details are omitted.</figcaption>
  </figure>;
}
