// Fonctions de formatage utilisées dans tout le site.

/** 9000 → "9 000 pts" */
export function formatPoints(points: number): string {
  return `${points.toLocaleString('fr-FR')} pts`;
}

/** 100.268 → "1:40.268" */
export function formatLapTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds <= 0) return '—';
  const minutes = Math.floor(seconds / 60);
  const rest = (seconds % 60).toFixed(3).padStart(6, '0');
  return `${minutes}:${rest}`;
}

/** 3.126 → "+3.126", 0 → "LEADER" */
export function formatGap(gap: number): string {
  return gap === 0 ? 'LEADER' : `+${gap.toFixed(3)}`;
}

/** 5 → "5.00×" */
export function formatMultiplier(multiplier: number): string {
  return `${multiplier.toFixed(2)}×`;
}

/** 4 → "04" (positions du classement) */
export function formatPosition(position: number): string {
  return String(position).padStart(2, '0');
}
