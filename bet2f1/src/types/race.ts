// Types liés aux courses : avant, pendant et après.
import type { Tire } from './driver';

export type RaceStatus = 'upcoming' | 'live' | 'finished';
export type Flag = 'green' | 'yellow' | 'safety-car' | 'chequered';
export type SimulationSpeed = 1 | 2 | 4;

export interface Race {
  id: string;
  round: number;
  name: string;          // "Marina Bay Night Sprint"
  circuit: string;       // "Marina Bay"
  country: string;       // "Singapore"
  totalLaps: number;
  startsAt: string;      // date ISO
  status: RaceStatus;
  weather: string;       // "Dry · 29°C · Track 34°C"
}

/** État d'une voiture à un instant de la course en direct. */
export interface LiveCarState {
  driverId: string;
  position: number;
  /** Progression sur le tour, entre 0 et 1 (sert à placer la voiture sur le SVG). */
  lapProgress: number;
  /** Écart avec le leader, en secondes (0 pour le leader). */
  gapToLeader: number;
  lastLapTime: number;   // en secondes
  bestLapTime: number;   // en secondes
  tire: Tire;
  lapsOnTire: number;
  drsAvailable: boolean;
}

export type RaceEventType = 'overtake' | 'pit' | 'fastest-lap' | 'drs' | 'flag';

/** Une ligne du fil de course ("Moretti takes the lead"). */
export interface RaceEvent {
  id: string;
  lap: number;
  type: RaceEventType;
  title: string;
  detail: string;
}

/** État complet de la course en direct, partagé par RaceContext. */
export interface LiveRaceState {
  raceId: string;
  currentLap: number;
  totalLaps: number;
  flag: Flag;
  cars: LiveCarState[];
  events: RaceEvent[];
  isFinished: boolean;
}

/**
 * Résultat final d'une course.
 * CONTRAT entre la personne 3 (qui le produit avec le simulateur)
 * et la personne 2 (qui l'utilise pour régler les paris).
 */
export interface RaceResult {
  raceId: string;
  /** Ids des pilotes dans l'ordre d'arrivée : classification[0] = vainqueur. */
  classification: string[];
  fastestLapDriverId: string;
  fastestLapTime: number;
  /** Temps total du vainqueur, en secondes. */
  winnerTime: number;
  /** Écart de chaque pilote avec le vainqueur, en secondes. */
  gaps: Record<string, number>;
}
