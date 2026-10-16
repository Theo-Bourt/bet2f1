import styles from './RaceWallet.module.css';

// Responsable : personne 2 (paris, résultats)
// Rôle : Avant course / misé / gain brut / après course.
// Props prévues : before: number, staked: number, grossReturn: number, after: number

export function RaceWallet() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">RaceWallet</span>
      <p className="muted">À faire — Avant course / misé / gain brut / après course.</p>
    </div>
  );
}
