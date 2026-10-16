import { useState } from 'react';
import { BetSlip } from '../components/bets/BetSlip';
import { DriverMarket } from '../components/bets/DriverMarket';
import { RestOfGrid } from '../components/bets/RestOfGrid';
import { Tabs } from '../components/ui/Tabs';
import type { BetMarket } from '../types/bet';
import styles from './BetsPage.module.css';

// Responsable : personne 2
const MARKETS: { value: BetMarket; label: string }[] = [
  { value: 'winner', label: 'Winner' },
  { value: 'podium', label: 'Podium' },
  { value: 'top10', label: 'Top 10' },
  { value: 'fastestLap', label: 'Fastest Lap' },
];

export function BetsPage() {
  const [market, setMarket] = useState<BetMarket>('winner');

  return (
    <div className="page">
      <span className="eyebrow">Pre-race market</span>
      <h1>Make your call.</h1>

      <Tabs options={MARKETS} value={market} onChange={setMarket} />

      <div className={styles.layout}>
        <div className={styles.market}>
          <DriverMarket />
          <RestOfGrid />
        </div>
        <aside className={styles.slip}>
          <BetSlip />
        </aside>
      </div>
    </div>
  );
}
