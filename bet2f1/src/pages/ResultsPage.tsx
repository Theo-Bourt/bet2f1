import { Classification } from '../components/results/Classification';
import { NextRace } from '../components/results/NextRace';
import { PayoutCard } from '../components/results/PayoutCard';
import { Podium } from '../components/results/Podium';
import { RaceCalls } from '../components/results/RaceCalls';
import { RaceWallet } from '../components/results/RaceWallet';
import { useRace } from '../context/RaceContext';
import styles from './ResultsPage.module.css';

// Responsable : personne 2
export function ResultsPage() {
  const { race, result } = useRace();

  if (!result) {
    return (
      <div className="page">
        <span className="eyebrow">Round {race.round}</span>
        <h1>Race not finished yet.</h1>
        <p className="muted">Results appear here once the chequered flag falls.</p>
      </div>
    );
  }

  return (
    <div className="page">
      <span className="eyebrow">Round {race.round} / Simulation complete</span>
      <h1>The night belongs to the winner.</h1>

      <div className={styles.top}>
        <Podium />
        <PayoutCard />
      </div>
      <RaceWallet />
      <div className={styles.bottom}>
        <Classification />
        <div className={styles.side}>
          <RaceCalls />
          <NextRace />
        </div>
      </div>
    </div>
  );
}
