import styles from './LapHeader.module.css';

// Responsable : personne 3 (course en direct, classement)
// Rôle : Bandeau : tour actuel / total, drapeau, météo.
// Props prévues : currentLap: number, totalLaps: number, flag: Flag, weather: string

export function LapHeader() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">LapHeader</span>
      <p className="muted">À faire — Bandeau : tour actuel / total, drapeau, météo.</p>
    </div>
  );
}
