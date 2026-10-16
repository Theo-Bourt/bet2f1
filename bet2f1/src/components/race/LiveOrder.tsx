import styles from './LiveOrder.module.css';

// Responsable : personne 3 (course en direct, classement)
// Rôle : Classement en direct : position, numéro, nom, écart, pneu.
// Props prévues : cars: LiveCarState[]

export function LiveOrder() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">LiveOrder</span>
      <p className="muted">À faire — Classement en direct : position, numéro, nom, écart, pneu.</p>
    </div>
  );
}
