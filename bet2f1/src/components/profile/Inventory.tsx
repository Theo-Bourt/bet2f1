import styles from './Inventory.module.css';

// Responsable : personne 1 (socle, joueur, boutique)
// Rôle : Objets possédés, filtrés par onglet de catégorie.
// Props prévues : inventory: Inventory, loadout: Loadout

export function Inventory() {
  return (
    <div className={styles.root}>
      <span className="eyebrow">Inventory</span>
      <p className="muted">À faire — Objets possédés, filtrés par onglet de catégorie.</p>
    </div>
  );
}
