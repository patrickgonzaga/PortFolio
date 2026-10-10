import { useSyncExternalStore } from 'react';

type Connection = EventTarget & { saveData?: boolean; effectiveType?: string };
const connection = (navigator as Navigator & { connection?: Connection }).connection;
const query = window.matchMedia('(max-width: 767px), (pointer: coarse), (prefers-reduced-motion: reduce)');

function subscribe(callback: () => void) {
  query.addEventListener('change', callback);
  connection?.addEventListener('change', callback);
  return () => {
    query.removeEventListener('change', callback);
    connection?.removeEventListener('change', callback);
  };
}

export function useLightweightMode() {
  return useSyncExternalStore(subscribe, () => query.matches || !!connection?.saveData || ['slow-2g', '2g'].includes(connection?.effectiveType ?? ''), () => true);
}
