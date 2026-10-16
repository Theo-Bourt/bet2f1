import { formatPoints } from '../../utils/format';
import styles from './PointsBalance.module.css';

interface PointsBalanceProps {
  points: number;
  size?: 'small' | 'medium' | 'large';
}

/** Solde de points virtuels avec l'icône de pièces dorée. */
export function PointsBalance({ points, size = 'medium' }: PointsBalanceProps) {
  return (
    <span className={`${styles.balance} ${styles[size]}`}>
      <span className={styles.coin} aria-hidden="true">●</span>
      {formatPoints(points)}
    </span>
  );
}
