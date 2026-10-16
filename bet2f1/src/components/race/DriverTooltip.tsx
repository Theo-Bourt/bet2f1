import styles from './DriverTooltip.module.css';

// Responsable : personne 3 (course en direct, classement)
// Rôle : Info-bulle au survol : pilote, position, dernier tour, vitesse, DRS.
// Props prévues : car: LiveCarState, driver: Driver

export function DriverTooltip() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">DriverTooltip</span>
      <p className="muted">À faire — Info-bulle au survol : pilote, position, dernier tour, vitesse, DRS.</p>
    </div>
  );
}
