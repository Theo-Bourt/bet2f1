import styles from './StakePresets.module.css';

// Responsable : personne 2 (paris, résultats)
// Rôle : Boutons 100 / 250 / 500 / 1000.
// Props prévues : value: number, onSelect: (stake: number) => void

export function StakePresets() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">StakePresets</span>
      <p className="muted">À faire — Boutons 100 / 250 / 500 / 1000.</p>
    </div>
  );
}
