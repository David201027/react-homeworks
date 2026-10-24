import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
          🎬 MovieFinder
        </NavLink>

        <nav className={styles.links}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Movies
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;