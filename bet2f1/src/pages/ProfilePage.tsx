import { BetHistory } from '../components/profile/BetHistory';
import { Inventory } from '../components/profile/Inventory';
import { Loadout } from '../components/profile/Loadout';
import { PlayerIdentity } from '../components/profile/PlayerIdentity';
import { StatsGrid } from '../components/profile/StatsGrid';
import { XpBar } from '../components/profile/XpBar';
import { Button } from '../components/ui/Button';
import { usePlayer } from '../context/PlayerContext';
import styles from './ProfilePage.module.css';

// Responsable : personne 1
export function ProfilePage() {
  const { player, logout } = usePlayer();

  return (
    <div className="page">
      <span className="eyebrow">Driver profile</span>
      <h1>{player?.username}</h1>

      <div className={styles.top}>
        <div>
          <PlayerIdentity />
          <XpBar />
        </div>
        <Loadout />
      </div>
      <StatsGrid />
      <Inventory />
      <BetHistory />

      <Button variant="secondary" onClick={logout}>Log out</Button>
    </div>
  );
}
