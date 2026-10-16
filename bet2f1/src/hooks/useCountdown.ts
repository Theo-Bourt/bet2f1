import { useEffect, useState } from 'react';

/** Temps restant avant une date, mis à jour chaque seconde. */
export function useCountdown(targetDate: string) {
  const target = new Date(targetDate).getTime();
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id); // nettoyage quand le composant disparaît
  }, []);

  const remaining = Math.max(0, target - now);

  return {
    days: Math.floor(remaining / 86_400_000),
    hours: Math.floor((remaining / 3_600_000) % 24),
    minutes: Math.floor((remaining / 60_000) % 60),
    seconds: Math.floor((remaining / 1000) % 60),
    isOver: remaining === 0,
  };
}
