// Types liés aux paris.

/** Les onglets du marché dans la page Bets. */
export type BetMarket = 'winner' | 'podium' | 'top10' | 'fastestLap';

export type BetStatus = 'open' | 'won' | 'lost';

/** Une sélection dans le bet slip, avant confirmation. */
export interface BetSelection {
  raceId: string;
  market: BetMarket;
  driverId: string;
  /** Multiplicateur décimal (5.00 = gain brut de 5× la mise, mise comprise). */
  multiplier: number;
  stake: number;
}

/** Un pari confirmé, enregistré dans l'historique du joueur. */
export interface PlacedBet extends BetSelection {
  id: string;
  placedAt: string;      // date ISO
  status: BetStatus;
  /** Gain brut une fois le pari réglé (0 si perdu). */
  payout: number;
}

/** Cote d'un pilote pour un marché donné. */
export interface Odds {
  driverId: string;
  market: BetMarket;
  multiplier: number;
}

/** Mises prédéfinies du bet slip. */
export const STAKE_PRESETS = [100, 250, 500, 1000] as const;
