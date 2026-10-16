// Sélections en cours dans le bet slip (avant confirmation).
// Responsable : personne 2.
import { createContext, useContext, useState, type ReactNode } from 'react';
import { potentialReturn } from '../engine/odds';
import type { BetSelection } from '../types/bet';

interface BetSlipContextValue {
  selections: BetSelection[];
  addSelection: (selection: BetSelection) => void;
  removeSelection: (driverId: string, market: BetSelection['market']) => void;
  setStake: (driverId: string, market: BetSelection['market'], stake: number) => void;
  setAllStakes: (stake: number) => void;
  clear: () => void;
  totalStake: number;
  totalPotentialReturn: number;
}

const BetSlipContext = createContext<BetSlipContextValue | null>(null);

const sameSelection = (s: BetSelection, driverId: string, market: BetSelection['market']) =>
  s.driverId === driverId && s.market === market;

export function BetSlipProvider({ children }: { children: ReactNode }) {
  const [selections, setSelections] = useState<BetSelection[]>([]);

  const value: BetSlipContextValue = {
    selections,
    addSelection: (selection) =>
      setSelections((prev) =>
        prev.some((s) => sameSelection(s, selection.driverId, selection.market))
          ? prev
          : [...prev, selection],
      ),
    removeSelection: (driverId, market) =>
      setSelections((prev) => prev.filter((s) => !sameSelection(s, driverId, market))),
    setStake: (driverId, market, stake) =>
      setSelections((prev) =>
        prev.map((s) => (sameSelection(s, driverId, market) ? { ...s, stake } : s)),
      ),
    setAllStakes: (stake) => setSelections((prev) => prev.map((s) => ({ ...s, stake }))),
    clear: () => setSelections([]),
    totalStake: selections.reduce((sum, s) => sum + s.stake, 0),
    totalPotentialReturn: selections.reduce(
      (sum, s) => sum + potentialReturn(s.stake, s.multiplier),
      0,
    ),
  };

  return <BetSlipContext.Provider value={value}>{children}</BetSlipContext.Provider>;
}

// Hook d'accès au contexte (exporté avec le Provider : avertissement Fast Refresh sans conséquence)
// eslint-disable-next-line react/only-export-components
export function useBetSlip() {
  const context = useContext(BetSlipContext);
  if (!context) throw new Error('useBetSlip doit être utilisé dans un BetSlipProvider');
  return context;
}
