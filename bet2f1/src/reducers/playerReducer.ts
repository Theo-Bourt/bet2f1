// Toutes les modifications du joueur passent par ce reducer.
// Chaque action est une fonction claire : facile à montrer à l'oral.
// Responsable : personne 1.
import type { PlacedBet } from '../types/bet';
import type { Player } from '../types/player';
import type { ItemCategory, ShopItem } from '../types/shop';

export type PlayerAction =
  | { type: 'LOGIN'; player: Player }
  | { type: 'LOGOUT' }
  | { type: 'BUY_ITEM'; item: ShopItem }
  | { type: 'EQUIP'; category: ItemCategory; itemId: string }
  | { type: 'PLACE_BETS'; bets: PlacedBet[] }
  | { type: 'SETTLE_BETS'; bets: PlacedBet[]; payout: number }
  | { type: 'CREDIT'; amount: number }
  | { type: 'ADD_XP'; amount: number };

/** L'état est null quand personne n'est connecté. */
export type PlayerState = Player | null;

export function playerReducer(state: PlayerState, action: PlayerAction): PlayerState {
  if (action.type === 'LOGIN') return action.player;
  if (action.type === 'LOGOUT') return null;
  if (!state) return state;

  switch (action.type) {
    case 'BUY_ITEM': {
      const alreadyOwned = state.inventory.includes(action.item.id);
      if (alreadyOwned || state.points < action.item.price) return state;
      return {
        ...state,
        points: state.points - action.item.price,
        inventory: [...state.inventory, action.item.id],
      };
    }

    case 'EQUIP': {
      if (!state.inventory.includes(action.itemId)) return state;
      return { ...state, loadout: { ...state.loadout, [action.category]: action.itemId } };
    }

    case 'PLACE_BETS': {
      const total = action.bets.reduce((sum, bet) => sum + bet.stake, 0);
      if (total > state.points) return state;
      return { ...state, points: state.points - total, bets: [...action.bets, ...state.bets] };
    }

    case 'SETTLE_BETS': {
      const settledById = new Map(action.bets.map((bet) => [bet.id, bet]));
      return {
        ...state,
        points: state.points + action.payout,
        bets: state.bets.map((bet) => settledById.get(bet.id) ?? bet),
      };
    }

    case 'CREDIT':
      return { ...state, points: state.points + action.amount };

    case 'ADD_XP': {
      // TODO (personne 1) : passage de niveau quand xp >= xpToNextLevel
      return { ...state, xp: state.xp + action.amount };
    }

    default:
      return state;
  }
}
