import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { StatusBadge } from '../components/ui/StatusBadge';
import { usePlayer } from '../context/PlayerContext';
import { getNextRace } from '../data/races';
import { useCountdown } from '../hooks/useCountdown';

// Responsable : personne 2
export function HomePage() {
  const { player } = usePlayer();
  const race = getNextRace();
  const countdown = useCountdown(race?.startsAt ?? '1970-01-01T00:00:00Z');

  return (
    <div className="page">
      <span className="eyebrow">Welcome back, {player?.username}</span>
      <h1>Next race, next call.</h1>

      {race && (
        <Card>
          <StatusBadge>Round {race.round} · Simulated race</StatusBadge>
          <h2>{race.name}</h2>
          <p className="muted">{race.circuit} · {race.country} · {race.totalLaps} laps</p>
          <p>
            Lights out in {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
          </p>
          <Link to="/bets">
            <Button>Place your bets</Button>
          </Link>
        </Card>
      )}
    </div>
  );
}
