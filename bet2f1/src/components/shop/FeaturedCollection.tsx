import styles from './FeaturedCollection.module.css';

// Responsable : personne 1 (socle, joueur, boutique)
// Rôle : Bannière de la collection mise en avant.
// Props prévues : item: ShopItem

export function FeaturedCollection() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">FeaturedCollection</span>
      <p className="muted">À faire — Bannière de la collection mise en avant.</p>
    </div>
  );
}
