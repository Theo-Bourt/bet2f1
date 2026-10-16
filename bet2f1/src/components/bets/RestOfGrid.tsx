import styles from './RestOfGrid.module.css';

// Responsable : personne 2 (paris, résultats)
// Rôle : Liste compacte des autres pilotes avec leur cote.
// Props prévues : odds: Odds[]

export function RestOfGrid() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">RestOfGrid</span>
      <p className="muted">À faire — Liste compacte des autres pilotes avec leur cote.</p>
    </div>
  );
}
