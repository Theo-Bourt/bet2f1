import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from './navItems';
import styles from './MobileNav.module.css';

/** Barre de navigation fixée en bas de l'écran, visible uniquement sur mobile. */
export function MobileNav() {
  return (
    <nav className={styles.mobileNav}>
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === '/'}
          className={({ isActive }) => (isActive ? `${styles.item} ${styles.active}` : styles.item)}
        >
          <span aria-hidden="true">{item.icon}</span>
          <span className={styles.label}>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
