import styles from './StatsGrid.module.css';

// Responsable : personne 1 (socle, joueur, boutique)
// Rôle : 4 statistiques : paris, victoires, taux de réussite, gains.
// Props prévues : bets: PlacedBet[]

export function StatsGrid() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">StatsGrid</span>
      <p className="muted">À faire — 4 statistiques : paris, victoires, taux de réussite, gains.</p>
    </div>
  );
}
