import styles from './PayoutCard.module.css';

// Responsable : personne 2 (paris, résultats)
// Rôle : Carte « Winner confirmed » : gain total et nouveau solde.
// Props prévues : totalPayout: number, newBalance: number

export function PayoutCard() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">PayoutCard</span>
      <p className="muted">À faire — Carte « Winner confirmed » : gain total et nouveau solde.</p>
    </div>
  );
}
