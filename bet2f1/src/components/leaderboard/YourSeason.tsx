import styles from './YourSeason.module.css';

// Responsable : personne 3 (course en direct, classement)
// Rôle : Ta saison : rang, points, forme récente.
// Props prévues : player: Player

export function YourSeason() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">YourSeason</span>
      <p className="muted">À faire — Ta saison : rang, points, forme récente.</p>
    </div>
  );
}
