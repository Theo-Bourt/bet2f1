import type { Team } from '../types/driver';

// Écuries fictives reprises du Figma.
export const teams: Team[] = [
  { id: 'apex', name: 'Apex Racing', color: '#FF8A1F' },
  { id: 'orion', name: 'Orion GP', color: '#5B8CFF' },
  { id: 'rosso', name: 'Scuderia Rosso', color: '#FF3B4E' },
  { id: 'silverline', name: 'Silverline', color: '#2FD5B5' },
  { id: 'verdant', name: 'Verdant', color: '#3DDC84' },
  { id: 'alpine-blue', name: 'Alpine Blue', color: '#4FB3FF' },
  { id: 'velocity', name: 'Velocity', color: '#8C7CFF' },
  { id: 'ironworks', name: 'Ironworks', color: '#E6E6EA' },
  { id: 'pulse', name: 'Pulse', color: '#A77BFF' },
  { id: 'nova', name: 'Nova Motorsport', color: '#C6F432' },
];

export function getTeamById(id: string): Team | undefined {
  return teams.find((team) => team.id === id);
}
