import { Link, NavLink } from 'react-router-dom';
import { usePlayer } from '../../context/PlayerContext';
import { PointsBalance } from '../ui/PointsBalance';
import { NAV_ITEMS } from './navItems';
import styles from './Navbar.module.css';

/** Barre du haut : logo, liens (desktop), solde et avatar. */
export function Navbar() {
  const { player } = usePlayer();

  return (
    <header className={styles.navbar}>
      <Link to="/" className={styles.brand}>
        <span className={styles.stripes}>///</span> PITWAGER
      </Link>

      <nav className={styles.links}>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      {player && (
        <div className={styles.account}>
          <PointsBalance points={player.points} />
          <Link to="/profile" className={styles.avatar}>{player.initials}</Link>
        </div>
      )}
    </header>
  );
}
