// Types liés aux pilotes et aux écuries.

/** Type de pneu (S = soft, M = medium, H = hard). */
export type Tire = 'S' | 'M' | 'H';

export interface Team {
  id: string;
  name: string;
  /** Couleur officielle de l'écurie, utilisée pour le style dynamique. */
  color: string;
}

export interface Driver {
  id: string;
  number: number;
  firstName: string;
  lastName: string;
  teamId: string;
  /** Couleur du marqueur numéroté sur le circuit. */
  color: string;
  /** Niveau de performance de 0 à 100, utilisé par le simulateur et les cotes. */
  skill: number;
}
