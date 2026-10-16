import styles from './TrackMap.module.css';

// Responsable : personne 3 (course en direct, classement)
// Rôle : Circuit SVG (data/track.ts) + voitures placées avec useRef et getPointAtLength().
// Props prévues : cars: LiveCarState[], onHoverCar: (driverId: string | null) => void

export function TrackMap() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">TrackMap</span>
      <p className="muted">À faire — Circuit SVG (data/track.ts) + voitures placées avec useRef et getPointAtLength().</p>
    </div>
  );
}
