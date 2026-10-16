import { FriendsPreview } from '../components/leaderboard/FriendsPreview';
import { Pagination } from '../components/leaderboard/Pagination';
import { RankingTable } from '../components/leaderboard/RankingTable';
import { SeasonLeaders } from '../components/leaderboard/SeasonLeaders';
import { YourSeason } from '../components/leaderboard/YourSeason';
import styles from './LeaderboardPage.module.css';

// Responsable : personne 3
export function LeaderboardPage() {
  return (
    <div className="page">
      <span className="eyebrow">Season 2026 standings</span>
      <h1>Who reads the race best?</h1>

      <SeasonLeaders />
      <div className={styles.layout}>
        <div>
          <RankingTable />
          <Pagination />
        </div>
        <div className={styles.side}>
          <YourSeason />
          <FriendsPreview />
        </div>
      </div>
    </div>
  );
}
