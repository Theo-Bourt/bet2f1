import styles from './CarMarker.module.css';

// Responsable : personne 3 (course en direct, classement)
// Rôle : Une voiture sur le circuit (pastille numérotée en SVG).
// Props prévues : x: number, y: number, driver: Driver

export function CarMarker() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">CarMarker</span>
      <p className="muted">À faire — Une voiture sur le circuit (pastille numérotée en SVG).</p>
    </div>
  );
}
