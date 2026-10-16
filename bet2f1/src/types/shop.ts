// Types liés à la boutique.

export type Rarity = 'common' | 'rare' | 'epic' | 'legendary';

/** Catégories = onglets de la boutique et emplacements d'équipement. */
export type ItemCategory = 'helmet' | 'livery' | 'background' | 'badge' | 'avatarFrame';

export interface ShopItem {
  id: string;
  name: string;          // "Vortex Carbon"
  description: string;
  category: ItemCategory;
  rarity: Rarity;
  price: number;         // en points
  image: string;         // chemin dans public/images
  featured?: boolean;
}

/** État d'un objet du point de vue du joueur (bouton affiché sur la carte). */
export type PurchaseState = 'buyable' | 'owned' | 'equipped' | 'insufficient';
