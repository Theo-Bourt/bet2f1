import type { ReactNode } from 'react';
import styles from './StatusBadge.module.css';

export type BadgeTone = 'cyan' | 'red' | 'gold' | 'success' | 'danger' | 'neutral'
  | 'common' | 'rare' | 'epic' | 'legendary';

interface StatusBadgeProps {
  tone?: BadgeTone;
  children: ReactNode;
}

/** Petite étiquette en majuscules ("SIMULATED RACE", "WON", "LEGENDARY"…). */
export function StatusBadge({ tone = 'cyan', children }: StatusBadgeProps) {
  return <span className={`${styles.badge} ${styles[tone]}`}>{children}</span>;
}
