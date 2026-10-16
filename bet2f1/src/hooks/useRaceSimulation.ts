import { useEffect, useState } from 'react';
import { drivers } from '../data/drivers';
import { createInitialRaceState, simulateLap } from '../engine/raceSimulator';
import type { LiveRaceState, Race, SimulationSpeed } from '../types/race';

/** Durée réelle d'un tour à vitesse ×1, en millisecondes. */
const LAP_DURATION_MS = 3000;

/**
 * Fait avancer la course à intervalle régulier.
 * Responsable : personne 3.
 */
export function useRaceSimulation(race: Race) {
  const [state, setState] = useState<LiveRaceState>(() => createInitialRaceState(race, drivers));
  const [speed, setSpeed] = useState<SimulationSpeed>(1);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || state.isFinished) return;

    const id = setInterval(() => {
      setState((previous) => simulateLap(previous, drivers));
    }, LAP_DURATION_MS / speed);

    return () => clearInterval(id); // relancé à chaque changement de vitesse
  }, [isRunning, speed, state.isFinished]);

  return {
    state,
    speed,
    setSpeed,
    isRunning,
    start: () => setIsRunning(true),
    pause: () => setIsRunning(false),
    reset: () => {
      setIsRunning(false);
      setState(createInitialRaceState(race, drivers));
    },
  };
}
