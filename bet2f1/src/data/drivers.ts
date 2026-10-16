import type { Driver } from '../types/driver';
import { teams } from './teams';

// Les 20 pilotes fictifs du Figma.
// `skill` (0-100) sert au simulateur et au calcul des cotes.
const rawDrivers: Omit<Driver, 'color'>[] = [
  { id: 'moretti', number: 4, firstName: 'Luca', lastName: 'Moretti', teamId: 'apex', skill: 95 },
  { id: 'voss', number: 1, firstName: 'Max', lastName: 'Voss', teamId: 'orion', skill: 96 },
  { id: 'renard', number: 16, firstName: 'Charles', lastName: 'Renard', teamId: 'rosso', skill: 92 },
  { id: 'reid', number: 81, firstName: 'Oscar', lastName: 'Reid', teamId: 'apex', skill: 91 },
  { id: 'ellis', number: 63, firstName: 'George', lastName: 'Ellis', teamId: 'silverline', skill: 89 },
  { id: 'king', number: 44, firstName: 'Lewis', lastName: 'King', teamId: 'rosso', skill: 90 },
  { id: 'costa', number: 12, firstName: 'Andrea', lastName: 'Costa', teamId: 'silverline', skill: 85 },
  { id: 'cruz', number: 14, firstName: 'Fernando', lastName: 'Cruz', teamId: 'verdant', skill: 84 },
  { id: 'laurent', number: 10, firstName: 'Pierre', lastName: 'Laurent', teamId: 'alpine-blue', skill: 82 },
  { id: 'chen', number: 23, firstName: 'Alex', lastName: 'Chen', teamId: 'velocity', skill: 81 },
  { id: 'vega', number: 55, firstName: 'Carlos', lastName: 'Vega', teamId: 'velocity', skill: 83 },
  { id: 'hart', number: 30, firstName: 'Liam', lastName: 'Hart', teamId: 'orion', skill: 78 },
  { id: 'march', number: 31, firstName: 'Esteban', lastName: 'March', teamId: 'ironworks', skill: 79 },
  { id: 'walker', number: 18, firstName: 'Lance', lastName: 'Walker', teamId: 'verdant', skill: 76 },
  { id: 'sato', number: 22, firstName: 'Yuki', lastName: 'Sato', teamId: 'pulse', skill: 80 },
  { id: 'bauer', number: 27, firstName: 'Nico', lastName: 'Bauer', teamId: 'nova', skill: 79 },
  { id: 'lind', number: 6, firstName: 'Isak', lastName: 'Lind', teamId: 'pulse', skill: 75 },
  { id: 'brooks', number: 87, firstName: 'Oliver', lastName: 'Brooks', teamId: 'ironworks', skill: 74 },
  { id: 'silva', number: 5, firstName: 'Gabriel', lastName: 'Silva', teamId: 'nova', skill: 75 },
  { id: 'rios', number: 43, firstName: 'Franco', lastName: 'Rios', teamId: 'alpine-blue', skill: 73 },
];

// La couleur du marqueur est celle de l'écurie.
export const drivers: Driver[] = rawDrivers.map((driver) => ({
  ...driver,
  color: teams.find((team) => team.id === driver.teamId)?.color ?? '#FFFFFF',
}));

export function getDriverById(id: string): Driver | undefined {
  return drivers.find((driver) => driver.id === id);
}
