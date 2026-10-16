import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { usePlayer } from '../../context/PlayerContext';

/** Redirige vers /login si personne n'est connecté. */
export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { player } = usePlayer();
  if (!player) return <Navigate to="/login" replace />;
  return children;
}
