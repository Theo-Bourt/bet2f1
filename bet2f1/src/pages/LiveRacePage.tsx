import { LapHeader } from '../components/race/LapHeader';
import { LiveOrder } from '../components/race/LiveOrder';
import { QuickBet } from '../components/race/QuickBet';
import { RaceFeed } from '../components/race/RaceFeed';
import { SpeedControl } from '../components/race/SpeedControl';
import { TrackMap } from '../components/race/TrackMap';
import { Button } from '../components/ui/Button';
import { useRace } from '../context/RaceContext';
import styles from './LiveRacePage.module.css';

// Responsable : personne 3
export function LiveRacePage() {
  const { race, state, isRunning, start, pause } = useRace();

  return (
    <div className="page">
      <span className="eyebrow">Simulation in progress / Round {race.round}</span>
      <h1>Lights out. Heads up.</h1>
      <p className="muted">{race.name} · Fictional drivers & telemetry</p>

      {/* Contrôle provisoire, à remplacer par LapHeader + SpeedControl */}
      <div>
        Lap {state.currentLap} / {state.totalLaps}{' '}
        <Button variant="secondary" onClick={isRunning ? pause : start}>
          {isRunning ? 'Pause' : 'Start'}
        </Button>
      </div>

      <LapHeader />
      <SpeedControl />

      <div className={styles.layout}>
        <TrackMap />
        <LiveOrder />
      </div>

      <div className={styles.bottom}>
        <QuickBet />
        <RaceFeed />
      </div>
    </div>
  );
}
