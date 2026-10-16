// Liens de navigation, partagés par la navbar desktop et la barre mobile.
export const NAV_ITEMS = [
  { to: '/', label: 'Home', icon: '⌂' },
  { to: '/race/live', label: 'Live Race', icon: '⚑' },
  { to: '/bets', label: 'Bets', icon: '🎟' },
  { to: '/shop', label: 'Shop', icon: '🛍' },
  { to: '/leaderboard', label: 'Leaderboard', icon: '🏆' },
  { to: '/profile', label: 'Profile', icon: '◉' },
] as const;
