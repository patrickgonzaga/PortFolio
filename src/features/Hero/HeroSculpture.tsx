import { Component, Suspense, lazy, useCallback, useEffect, useRef, useState, useSyncExternalStore, type CSSProperties, type ReactNode } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { MoveUpRight, Pause, Play } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLightweightMode } from '../../hooks/useLightweightMode';

const SculptureScene = lazy(() => import('./SculptureScene'));
const dimensions = [
  { name: 'Engineering', color: '#55cfff', lightColor: '#0078ac', material: '#81d6fa', title: 'Built for the real world.', detail: 'C# / .NET / Enterprise systems' },
  { name: 'Cloud', color: '#aa9aff', lightColor: '#7151cf', material: '#b1a4ff', title: 'Room for what comes next.', detail: 'Azure / APIs / Connected platforms' },
  { name: 'AI & Automation', color: '#71e6c0', lightColor: '#087c66', material: '#8ce8cf', title: 'Less repetition. More possibility.', detail: 'AI integrations / n8n / Workflows' },
];

function StaticSculpture() {
  return <img className="sculpture-poster" src="/images/sculpture-poster.webp" width={960} height={558} alt="" decoding="async" aria-hidden="true" />;
}

class SculptureBoundary extends Component<{ children: ReactNode; onUnavailable: () => void }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() { this.props.onUnavailable(); }
  render() { return this.state.failed ? <StaticSculpture /> : this.props.children; }
}

function supportsWebGL() {
  // Renderer initialization is asynchronous, so check support before mounting Canvas.
  try {
    const context = document.createElement('canvas').getContext('webgl2');
    if (!context) return false;
    context.getExtension('WEBGL_lose_context')?.loseContext();
    return true;
  } catch {
    return false;
  }
}

function subscribeVisibility(callback: () => void) {
  document.addEventListener('visibilitychange', callback);
  return () => document.removeEventListener('visibilitychange', callback);
}

export function HeroSculpture() {
  const stage = useRef<HTMLDivElement>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const inView = useInView(stage, { margin: '80px' });
  const reducedMotion = useReducedMotion();
  const lightweight = useLightweightMode();
  const visible = useSyncExternalStore(subscribeVisibility, () => document.visibilityState === 'visible', () => true);
  const { theme } = useTheme();
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const dimension = dimensions[selected];
  const onContextLost = useCallback(() => setUnavailable(true), []);
  const animate = inView && visible && !paused && !reducedMotion;
  const activate = useCallback(() => {
    if (supportsWebGL()) setEnabled(true);
    else setUnavailable(true);
  }, []);

  // Let the introduction paint first. Phones and data-saving connections opt in.
  useEffect(() => {
    if (!inView || lightweight || enabled || unavailable || !visible) return;
    let idle: number | undefined;
    const timer = window.setTimeout(() => {
      if ('requestIdleCallback' in window) idle = window.requestIdleCallback(activate, { timeout: 1500 });
      else activate();
    }, 250);
    return () => {
      window.clearTimeout(timer);
      if (idle !== undefined) window.cancelIdleCallback(idle);
    };
  }, [inView, lightweight, enabled, unavailable, visible, activate]);

  return (
    <div className="hero-art" style={{ '--sculpture-accent': theme === 'dark' ? dimension.color : dimension.lightColor, '--poster-hue': selected === 1 ? '52deg' : selected === 2 ? '-45deg' : '0deg' } as CSSProperties}>
      <div className="sculpture-heading">
        <span><span className="sculpture-marker" /> A different dimension</span>
        <button
          type="button"
          className="sculpture-pause"
          aria-label={reducedMotion || unavailable ? 'Static sculpture' : !enabled ? 'Enable interactive 3D' : paused ? 'Play sculpture animation' : 'Pause sculpture animation'}
          aria-pressed={enabled && !paused}
          onClick={() => { if (!enabled) activate(); else setPaused(!paused); }}
          disabled={!!reducedMotion || unavailable}
          title={reducedMotion ? 'Motion reduced to match your device preference' : !enabled ? 'Enable interactive 3D' : paused ? 'Play animation' : 'Pause animation'}
        >
          {!enabled || paused || reducedMotion || unavailable ? <Play size={14} /> : <Pause size={14} />}
        </button>
      </div>

      <div
        ref={stage}
        className="sculpture-stage"
        role="img"
        aria-label={`Reflective three-dimensional sculpture representing ${dimension.name.toLowerCase()}`}
        onPointerMove={(event) => {
          if (event.pointerType !== 'mouse' || !animate) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          pointer.current.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
          pointer.current.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
        }}
        onPointerLeave={() => { pointer.current = { x: 0, y: 0 }; }}
      >
        <div className="sculpture-halo" aria-hidden="true" />
        <div className="sculpture-guide sculpture-guide-one" aria-hidden="true" />
        <div className="sculpture-guide sculpture-guide-two" aria-hidden="true" />
        <span className="sculpture-coordinate" aria-hidden="true">PG — {String(selected + 1).padStart(2, '0')}</span>
        <div className="sculpture-canvas" aria-hidden="true">
          {enabled && !unavailable ? (
            <SculptureBoundary onUnavailable={onContextLost}>
              <Suspense fallback={<StaticSculpture />}>
                <SculptureScene color={dimension.material} animate={animate} pointer={pointer} onContextLost={onContextLost} />
              </Suspense>
            </SculptureBoundary>
          ) : <StaticSculpture />}
        </div>
        <div className="sculpture-shadow" aria-hidden="true" />
        <span className="sculpture-caption" aria-hidden="true">Precision. Perspective. Possibility.</span>
      </div>

      <div className="sculpture-footer">
        <div className="sculpture-modes" role="group" aria-label="Explore areas of expertise">
          {dimensions.map((item, index) => (
            <button key={item.name} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}>
              <span className="sculpture-mode-number" aria-hidden="true">0{index + 1}</span> {item.name}
            </button>
          ))}
        </div>
        <div className="sculpture-description" aria-live="polite" aria-atomic="true">
          <div><p>{dimension.title}</p><span>{dimension.detail}</span></div>
          <MoveUpRight size={20} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
