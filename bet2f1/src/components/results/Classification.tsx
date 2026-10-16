import styles from './Classification.module.css';

// Responsable : personne 2 (paris, résultats)
// Rôle : Classement final des 20 pilotes.
// Props prévues : result: RaceResult

export function Classification() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">Classification</span>
      <p className="muted">À faire — Classement final des 20 pilotes.</p>
    </div>
  );
}
