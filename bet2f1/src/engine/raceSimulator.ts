// Simulateur de course. Logique pure, sans React : on lui donne un état,
// il renvoie l'état suivant. Le hook useRaceSimulation l'appelle à intervalle régulier.
// Responsable : personne 3.
import type { Driver } from '../types/driver';
import type { LiveCarState, LiveRaceState, Race, RaceResult } from '../types/race';

const BASE_LAP_TIME = 100; // secondes, environ 1:40

/** Temps au tour d'un pilote : plus il est fort, plus il est rapide, avec un peu d'aléatoire. */
function lapTimeFor(driver: Driver): number {
  const skillBonus = (100 - driver.skill) * 0.05;
  const randomness = Math.random() * 0.8;
  return BASE_LAP_TIME + skillBonus + randomness;
}

/** État au départ : voitures dans l'ordre de la grille. */
export function createInitialRaceState(race: Race, drivers: Driver[]): LiveRaceState {
  const cars: LiveCarState[] = drivers.map((driver, index) => ({
    driverId: driver.id,
    position: index + 1,
    lapProgress: 0,
    gapToLeader: index * 0.3,
    lastLapTime: 0,
    bestLapTime: Infinity,
    tire: 'M',
    lapsOnTire: 0,
    drsAvailable: false,
  }));

  return {
    raceId: race.id,
    currentLap: 0,
    totalLaps: race.totalLaps,
    flag: 'green',
    cars,
    events: [],
    isFinished: false,
  };
}

/**
 * Simule un tour complet et renvoie le nouvel état (sans modifier l'ancien).
 * TODO (personne 3) : dépassements, arrêts aux stands, DRS, événements du fil de course,
 * et une progression plus fine que "un tour d'un coup" pour animer les voitures.
 */
export function simulateLap(state: LiveRaceState, drivers: Driver[]): LiveRaceState {
  if (state.isFinished) return state;

  const totals = state.cars.map((car) => {
    const driver = drivers.find((d) => d.id === car.driverId);
    const lapTime = driver ? lapTimeFor(driver) : BASE_LAP_TIME;
    return { car, lapTime, total: car.gapToLeader + lapTime };
  });

  totals.sort((a, b) => a.total - b.total);
  const leaderTotal = totals[0].total;

  const cars: LiveCarState[] = totals.map(({ car, lapTime, total }, index) => ({
    ...car,
    position: index + 1,
    gapToLeader: Math.round((total - leaderTotal) * 1000) / 1000,
    lastLapTime: lapTime,
    bestLapTime: Math.min(car.bestLapTime, lapTime),
    lapsOnTire: car.lapsOnTire + 1,
    drsAvailable: index > 0 && total - totals[index - 1].total < 1,
  }));

  const currentLap = state.currentLap + 1;
  const isFinished = currentLap >= state.totalLaps;

  return {
    ...state,
    currentLap,
    cars,
    isFinished,
    flag: isFinished ? 'chequered' : state.flag,
  };
}

/** Transforme l'état final en RaceResult (contrat utilisé par settleBets). */
export function toRaceResult(state: LiveRaceState): RaceResult {
  const ordered = [...state.cars].sort((a, b) => a.position - b.position);
  const fastest = [...state.cars].sort((a, b) => a.bestLapTime - b.bestLapTime)[0];

  return {
    raceId: state.raceId,
    classification: ordered.map((car) => car.driverId),
    fastestLapDriverId: fastest.driverId,
    fastestLapTime: fastest.bestLapTime,
    winnerTime: BASE_LAP_TIME * state.totalLaps,
    gaps: Object.fromEntries(ordered.map((car) => [car.driverId, car.gapToLeader])),
  };
}
