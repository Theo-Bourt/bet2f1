import styles from './Podium.module.css';

// Responsable : personne 2 (paris, résultats)
// Rôle : Podium des 3 premiers.
// Props prévues : classification: string[]

export function Podium() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">Podium</span>
      <p className="muted">À faire — Podium des 3 premiers.</p>
    </div>
  );
}
