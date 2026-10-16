import styles from './BetSlip.module.css';

// Responsable : personne 2 (paris, résultats)
// Rôle : Bet slip complet : sélections, mises, total, gain potentiel, confirmation.
// Props prévues : aucune (lit useBetSlip et usePlayer)

export function BetSlip() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">BetSlip</span>
      <p className="muted">À faire — Bet slip complet : sélections, mises, total, gain potentiel, confirmation.</p>
    </div>
  );
}
