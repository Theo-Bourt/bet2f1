// Règlement des paris à partir du résultat de la course. Logique pure, sans React.
// Responsable : personne 2.
import type { PlacedBet } from '../types/bet';
import type { RaceResult } from '../types/race';
import { potentialReturn } from './odds';

/** Le pari est-il gagnant pour ce résultat ? */
export function isWinningBet(bet: PlacedBet, result: RaceResult): boolean {
  const position = result.classification.indexOf(bet.driverId) + 1; // 0 si absent

  switch (bet.market) {
    case 'winner':
      return position === 1;
    case 'podium':
      return position >= 1 && position <= 3;
    case 'top10':
      return position >= 1 && position <= 10;
    case 'fastestLap':
      return result.fastestLapDriverId === bet.driverId;
  }
}

/** Règle un pari : statut gagné / perdu et gain brut. */
export function settleBet(bet: PlacedBet, result: RaceResult): PlacedBet {
  if (bet.raceId !== result.raceId || bet.status !== 'open') return bet;

  const won = isWinningBet(bet, result);
  return {
    ...bet,
    status: won ? 'won' : 'lost',
    payout: won ? potentialReturn(bet.stake, bet.multiplier) : 0,
  };
}

/** Règle tous les paris ouverts et renvoie le total des gains à créditer. */
export function settleBets(bets: PlacedBet[], result: RaceResult) {
  const settled = bets.map((bet) => settleBet(bet, result));
  const totalPayout = settled
    .filter((bet, i) => bets[i].status === 'open' && bet.status === 'won')
    .reduce((sum, bet) => sum + bet.payout, 0);

  return { settled, totalPayout };
}
