import styles from './FairPlayNotice.module.css';

// Responsable : personne 1 (socle, joueur, boutique)
// Rôle : Garantie : objets cosmétiques uniquement, aucun avantage.
// Props prévues : aucune

export function FairPlayNotice() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">FairPlayNotice</span>
      <p className="muted">À faire — Garantie : objets cosmétiques uniquement, aucun avantage.</p>
    </div>
  );
}
