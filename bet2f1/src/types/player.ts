// Types liés au joueur.
import type { PlacedBet } from './bet';
import type { ItemCategory } from './shop';

/** Ids des objets possédés. */
export type Inventory = string[];

/** Objet équipé pour chaque emplacement (casque, livrée…). */
export type Loadout = Partial<Record<ItemCategory, string>>;

export interface Player {
  id: string;
  username: string;
  email: string;
  initials: string;      // "AR" pour l'avatar
  points: number;
  level: number;
  xp: number;
  xpToNextLevel: number;
  inventory: Inventory;
  loadout: Loadout;
  bets: PlacedBet[];
}

/** Une ligne du classement global. */
export interface LeaderboardEntry {
  rank: number;
  playerId: string;
  username: string;
  initials: string;
  points: number;
  isFriend?: boolean;
  /** Forme récente : résultats des derniers paris. */
  recentForm?: ('W' | 'L')[];
}
