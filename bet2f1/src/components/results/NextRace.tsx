import styles from './NextRace.module.css';

// Responsable : personne 2 (paris, résultats)
// Rôle : Carte de la prochaine course et bouton retour.
// Props prévues : race: Race

export function NextRace() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">NextRace</span>
      <p className="muted">À faire — Carte de la prochaine course et bouton retour.</p>
    </div>
  );
}
