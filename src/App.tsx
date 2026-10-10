import { lazy, Suspense, useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navbar } from './features/Navbar';
import { Hero } from './features/Hero';
import { Footer } from './features/Footer';
import { useLightweightMode } from './hooks/useLightweightMode';

const PortfolioContent = lazy(() => import('./PortfolioContent'));

function DeferredContent() {
  const [ready, setReady] = useState(() => !!window.location.hash);
  useEffect(() => {
    if (ready) return;
    const enable = () => setReady(true);
    window.addEventListener('hashchange', enable);
    const idle = window.requestIdleCallback?.(enable, { timeout: 800 });
    const timer = idle === undefined ? window.setTimeout(enable, 150) : undefined;
    return () => {
      window.removeEventListener('hashchange', enable);
      if (idle !== undefined) window.cancelIdleCallback(idle);
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [ready]);
  const placeholder = <div className="min-h-screen flex items-start justify-center pt-12 text-sm text-slate-500" role="status">Loading selected work…</div>;
  return <Suspense fallback={placeholder}>{ready ? <PortfolioContent /> : placeholder}</Suspense>;
}

function App() {
  const lightweight = useLightweightMode();
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion={lightweight ? 'always' : 'user'}>
        <div className="min-h-screen bg-slate-50 dark:bg-[#080c14] text-slate-900 dark:text-slate-100 font-sans selection:bg-sky-500 selection:text-white transition-colors duration-300">
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <DeferredContent />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
