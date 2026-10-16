import styles from './DriverMarket.module.css';

// Responsable : personne 2 (paris, résultats)
// Rôle : Grille des 8 favoris pour le marché sélectionné.
// Props prévues : market: BetMarket, odds: Odds[]

export function DriverMarket() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">DriverMarket</span>
      <p className="muted">À faire — Grille des 8 favoris pour le marché sélectionné.</p>
    </div>
  );
}
