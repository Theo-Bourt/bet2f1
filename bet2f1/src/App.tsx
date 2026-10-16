import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { ProtectedRoute } from './components/layout/ProtectedRoute';
import { BetSlipProvider } from './context/BetSlipContext';
import { PlayerProvider } from './context/PlayerContext';
import { RaceProvider } from './context/RaceContext';
import { BetsPage } from './pages/BetsPage';
import { HomePage } from './pages/HomePage';
import { LeaderboardPage } from './pages/LeaderboardPage';
import { LiveRacePage } from './pages/LiveRacePage';
import { LoginPage } from './pages/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProfilePage } from './pages/ProfilePage';
import { ResultsPage } from './pages/ResultsPage';
import { ShopPage } from './pages/ShopPage';

export default function App() {
  return (
    <PlayerProvider>
      <RaceProvider>
        <BetSlipProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginPage />} />

              {/* Pages connectées : même layout (navbar, footer…) */}
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="/" element={<HomePage />} />
                <Route path="/bets" element={<BetsPage />} />
                <Route path="/race/live" element={<LiveRacePage />} />
                <Route path="/results" element={<ResultsPage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/leaderboard" element={<LeaderboardPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Route>

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </BetSlipProvider>
      </RaceProvider>
    </PlayerProvider>
  );
}
