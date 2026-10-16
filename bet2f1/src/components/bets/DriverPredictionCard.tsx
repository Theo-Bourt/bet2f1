import styles from './DriverPredictionCard.module.css';

// Responsable : personne 2 (paris, résultats)
// Rôle : Carte d'un pilote : numéro, multiplicateur, nom, écurie, bouton « Add to slip ».
// Props prévues : driver: Driver, multiplier: number, isSelected: boolean, onToggle: () => void

export function DriverPredictionCard() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">DriverPredictionCard</span>
      <p className="muted">À faire — Carte d'un pilote : numéro, multiplicateur, nom, écurie, bouton « Add to slip ».</p>
    </div>
  );
}
