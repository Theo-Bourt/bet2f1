import { useState } from 'react';
import { FairPlayNotice } from '../components/shop/FairPlayNotice';
import { FeaturedCollection } from '../components/shop/FeaturedCollection';
import { ItemDetailModal } from '../components/shop/ItemDetailModal';
import { ShopItemCard } from '../components/shop/ShopItemCard';
import { PointsBalance } from '../components/ui/PointsBalance';
import { Tabs } from '../components/ui/Tabs';
import { usePlayer } from '../context/PlayerContext';
import { shopItems } from '../data/shopItems';
import type { ItemCategory } from '../types/shop';
import styles from './ShopPage.module.css';

// Responsable : personne 1
const CATEGORIES: { value: ItemCategory; label: string }[] = [
  { value: 'helmet', label: 'Helmets' },
  { value: 'livery', label: 'Liveries' },
  { value: 'background', label: 'Backgrounds' },
  { value: 'badge', label: 'Badges' },
  { value: 'avatarFrame', label: 'Avatar frames' },
];

export function ShopPage() {
  const { player } = usePlayer();
  const [category, setCategory] = useState<ItemCategory>('helmet');
  const items = shopItems.filter((item) => item.category === category);

  return (
    <div className="page">
      <span className="eyebrow">Cosmetics only</span>
      <h1>Paddock shop.</h1>
      {player && <PointsBalance points={player.points} size="large" />}

      <FeaturedCollection />
      <Tabs options={CATEGORIES} value={category} onChange={setCategory} />
      <p className="muted">{items.length} items</p>

      <div className={styles.grid}>
        {items.map((item) => (
          <ShopItemCard key={item.id} />
        ))}
      </div>

      <FairPlayNotice />
      <ItemDetailModal />
    </div>
  );
}
