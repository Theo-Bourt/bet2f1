import styles from './RaceFeed.module.css';

// Responsable : personne 3 (course en direct, classement)
// Rôle : Fil de course : dépassements, arrêts, meilleurs tours.
// Props prévues : events: RaceEvent[]

export function RaceFeed() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">RaceFeed</span>
      <p className="muted">À faire — Fil de course : dépassements, arrêts, meilleurs tours.</p>
    </div>
  );
}
