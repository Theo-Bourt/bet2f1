import styles from './ShopItemCard.module.css';

// Responsable : personne 1 (socle, joueur, boutique)
// Rôle : Carte d'un objet : visuel, nom, prix, état d'achat.
// Props prévues : item: ShopItem, state: PurchaseState, onClick: () => void

export function ShopItemCard() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">ShopItemCard</span>
      <p className="muted">À faire — Carte d'un objet : visuel, nom, prix, état d'achat.</p>
    </div>
  );
}
