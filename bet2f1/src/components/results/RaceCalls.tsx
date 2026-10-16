import styles from './RaceCalls.module.css';

// Responsable : personne 2 (paris, résultats)
// Rôle : Tes paris de la course : gagné / perdu.
// Props prévues : bets: PlacedBet[]

export function RaceCalls() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">RaceCalls</span>
      <p className="muted">À faire — Tes paris de la course : gagné / perdu.</p>
    </div>
  );
}
