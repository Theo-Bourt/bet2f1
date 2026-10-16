import styles from './Loadout.module.css';

// Responsable : personne 1 (socle, joueur, boutique)
// Rôle : Objets équipés par emplacement.
// Props prévues : loadout: Loadout

export function Loadout() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">Loadout</span>
      <p className="muted">À faire — Objets équipés par emplacement.</p>
    </div>
  );
}
