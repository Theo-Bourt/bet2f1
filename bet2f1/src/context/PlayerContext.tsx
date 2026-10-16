// Joueur connecté, points, inventaire, équipement, paris.
// Responsable : personne 1.
import { createContext, useContext, useEffect, useReducer, type ReactNode } from 'react';
import { playerReducer, type PlayerAction, type PlayerState } from '../reducers/playerReducer';
import type { Player } from '../types/player';

const STORAGE_KEY = 'pitwager.player';
const WELCOME_POINTS = 5000;

interface PlayerContextValue {
  player: PlayerState;
  dispatch: React.Dispatch<PlayerAction>;
  login: (email: string) => void;
  logout: () => void;
}

const PlayerContext = createContext<PlayerContextValue | null>(null);

function loadPlayer(): PlayerState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? (JSON.parse(saved) as Player) : null;
  } catch {
    return null;
  }
}

/** Connexion simulée : crée un joueur à partir de l'email. */
function createPlayer(email: string): Player {
  const username = email.split('@')[0] || 'Rookie';
  return {
    id: crypto.randomUUID(),
    username,
    email,
    initials: username.slice(0, 2).toUpperCase(),
    points: WELCOME_POINTS,
    level: 1,
    xp: 0,
    xpToNextLevel: 1000,
    inventory: [],
    loadout: {},
    bets: [],
  };
}

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [player, dispatch] = useReducer(playerReducer, null, loadPlayer);

  // Sauvegarde à chaque changement
  useEffect(() => {
    try {
      if (player) localStorage.setItem(STORAGE_KEY, JSON.stringify(player));
      else localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, [player]);

  const value: PlayerContextValue = {
    player,
    dispatch,
    login: (email) => dispatch({ type: 'LOGIN', player: loadPlayer() ?? createPlayer(email) }),
    logout: () => dispatch({ type: 'LOGOUT' }),
  };

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}

// Hook d'accès au contexte (exporté avec le Provider : avertissement Fast Refresh sans conséquence)
// eslint-disable-next-line react/only-export-components
export function usePlayer() {
  const context = useContext(PlayerContext);
  if (!context) throw new Error('usePlayer doit être utilisé dans un PlayerProvider');
  return context;
}
