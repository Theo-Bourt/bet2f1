// État de la course partagé entre Live Race et Results.
// La simulation tourne ici pour continuer même quand on change de page.
// Responsable : personne 3.
import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { getNextRace, races } from '../data/races';
import { toRaceResult } from '../engine/raceSimulator';
import { useRaceSimulation } from '../hooks/useRaceSimulation';
import type { Race, RaceResult } from '../types/race';

type RaceContextValue = ReturnType<typeof useRaceSimulation> & {
  race: Race;
  /** Résultat final, disponible une fois la course terminée. */
  result: RaceResult | null;
};

const RaceContext = createContext<RaceContextValue | null>(null);

export function RaceProvider({ children }: { children: ReactNode }) {
  const race = getNextRace() ?? races[0];
  const simulation = useRaceSimulation(race);

  const result = useMemo(
    () => (simulation.state.isFinished ? toRaceResult(simulation.state) : null),
    [simulation.state],
  );

  return (
    <RaceContext.Provider value={{ ...simulation, race, result }}>{children}</RaceContext.Provider>
  );
}

// Hook d'accès au contexte (exporté avec le Provider : avertissement Fast Refresh sans conséquence)
// eslint-disable-next-line react/only-export-components
export function useRace() {
  const context = useContext(RaceContext);
  if (!context) throw new Error('useRace doit être utilisé dans un RaceProvider');
  return context;
}
