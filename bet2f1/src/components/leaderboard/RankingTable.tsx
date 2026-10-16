import styles from './RankingTable.module.css';

// Responsable : personne 3 (course en direct, classement)
// Rôle : Classement global.
// Props prévues : entries: LeaderboardEntry[]

export function RankingTable() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">RankingTable</span>
      <p className="muted">À faire — Classement global.</p>
    </div>
  );
}
