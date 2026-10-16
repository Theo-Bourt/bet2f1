import type { ShopItem } from '../types/shop';

// Images à déposer dans public/images/shop/.
export const shopItems: ShopItem[] = [
  { id: 'helmet-vortex-carbon', name: 'Vortex Carbon', description: 'Casque carbone mat, liseré cyan télémétrie.', category: 'helmet', rarity: 'legendary', price: 12000, image: '/images/shop/vortex-carbon.png', featured: true },
  { id: 'helmet-night-sprint', name: 'Night Sprint', description: 'Édition Marina Bay, reflets néon.', category: 'helmet', rarity: 'epic', price: 2400, image: '/images/shop/night-sprint.png' },
  { id: 'helmet-pit-lane', name: 'Pit Lane', description: 'Casque classique rouge course.', category: 'helmet', rarity: 'common', price: 600, image: '/images/shop/pit-lane.png' },
  { id: 'helmet-chequered', name: 'Chequered', description: 'Damier noir et blanc.', category: 'helmet', rarity: 'rare', price: 1200, image: '/images/shop/chequered.png' },
  { id: 'livery-apex-orange', name: 'Apex Orange', description: 'Livrée orange papaye.', category: 'livery', rarity: 'rare', price: 1200, image: '/images/shop/apex-orange.png' },
  { id: 'livery-ghost', name: 'Ghost', description: 'Livrée blanche minimaliste.', category: 'livery', rarity: 'common', price: 600, image: '/images/shop/ghost.png' },
  { id: 'bg-marina-night', name: 'Marina Night', description: 'Fond de profil, skyline de nuit.', category: 'background', rarity: 'epic', price: 2400, image: '/images/shop/marina-night.png' },
  { id: 'bg-grid', name: 'Starting Grid', description: 'Fond de profil, grille de départ.', category: 'background', rarity: 'common', price: 600, image: '/images/shop/starting-grid.png' },
  { id: 'badge-lights-out', name: 'Lights Out', description: 'Badge de profil.', category: 'badge', rarity: 'rare', price: 1200, image: '/images/shop/lights-out.png' },
  { id: 'frame-gold', name: 'Gold Frame', description: "Cadre d'avatar doré.", category: 'avatarFrame', rarity: 'legendary', price: 12000, image: '/images/shop/gold-frame.png' },
];

export function getShopItemById(id: string): ShopItem | undefined {
  return shopItems.find((item) => item.id === id);
}
