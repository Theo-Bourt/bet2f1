import styles from './SpeedControl.module.css';

// Responsable : personne 3 (course en direct, classement)
// Rôle : Boutons ×1 / ×2 / ×4.
// Props prévues : speed: SimulationSpeed, onChange: (speed: SimulationSpeed) => void

export function SpeedControl() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">SpeedControl</span>
      <p className="muted">À faire — Boutons ×1 / ×2 / ×4.</p>
    </div>
  );
}
