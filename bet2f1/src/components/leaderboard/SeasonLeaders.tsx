import styles from './SeasonLeaders.module.css';

// Responsable : personne 3 (course en direct, classement)
// Rôle : Top 3 de la saison (couronne au centre).
// Props prévues : leaders: LeaderboardEntry[]

export function SeasonLeaders() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">SeasonLeaders</span>
      <p className="muted">À faire — Top 3 de la saison (couronne au centre).</p>
    </div>
  );
}
