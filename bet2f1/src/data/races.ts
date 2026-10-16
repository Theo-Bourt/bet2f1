import type { Race } from '../types/race';

export const races: Race[] = [
  {
    id: 'r08-marina-bay',
    round: 8,
    name: 'Marina Bay Night Sprint',
    circuit: 'Marina Bay',
    country: 'Singapore',
    totalLaps: 23,
    startsAt: '2026-10-17T18:00:00Z',
    status: 'upcoming',
    weather: 'Dry · 29°C · Track 34°C',
  },
  {
    id: 'r09-suzuka',
    round: 9,
    name: 'Suzuka Full Send',
    circuit: 'Suzuka',
    country: 'Japan',
    totalLaps: 25,
    startsAt: '2026-10-19T18:00:00Z',
    status: 'upcoming',
    weather: 'Overcast · 21°C · Track 27°C',
  },
];

/** Prochaine course non terminée. */
export function getNextRace(): Race | undefined {
  return races.find((race) => race.status !== 'finished');
}
