import styles from './BetHistory.module.css';

// Responsable : personne 1 (socle, joueur, boutique)
// Rôle : Historique des paris du joueur.
// Props prévues : bets: PlacedBet[]

export function BetHistory() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">BetHistory</span>
      <p className="muted">À faire — Historique des paris du joueur.</p>
    </div>
  );
}
