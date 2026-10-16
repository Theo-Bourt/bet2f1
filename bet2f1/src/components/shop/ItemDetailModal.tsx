import styles from './ItemDetailModal.module.css';

// Responsable : personne 1 (socle, joueur, boutique)
// Rôle : Détail d'un objet dans une Modal, avec achat / équipement.
// Props prévues : item: ShopItem | null, onClose: () => void

export function ItemDetailModal() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">ItemDetailModal</span>
      <p className="muted">À faire — Détail d'un objet dans une Modal, avec achat / équipement.</p>
    </div>
  );
}
