// Calcul des multiplicateurs (cotes) par pilote. Logique pure, sans React.
// Responsable : personne 2.
import type { Driver } from '../types/driver';
import type { BetMarket, Odds } from '../types/bet';

/** Plus le marché est facile à gagner, plus le multiplicateur est bas. */
const MARKET_FACTOR: Record<BetMarket, number> = {
  winner: 1,
  fastestLap: 0.8,
  podium: 0.4,
  top10: 0.15,
};

/**
 * Calcule la cote de chaque pilote pour un marché.
 * TODO (personne 2) : affiner la formule si besoin.
 */
export function computeOdds(drivers: Driver[], market: BetMarket): Odds[] {
  const sorted = [...drivers].sort((a, b) => b.skill - a.skill);

  return sorted.map((driver, index) => {
    const base = 1.8 + index * 0.9; // le favori ≈ 1.8×, le dernier ≈ 19×
    const multiplier = Math.max(1.05, 1 + (base - 1) * MARKET_FACTOR[market]);
    return {
      driverId: driver.id,
      market,
      multiplier: Math.round(multiplier * 100) / 100,
    };
  });
}

/** Gain brut potentiel : mise × multiplicateur (mise comprise). */
export function potentialReturn(stake: number, multiplier: number): number {
  return Math.round(stake * multiplier);
}
