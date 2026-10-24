import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu/UserMenu';
import styles from './Navigation.module.css';

function Navigation() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink className={styles.logo} to="/">
          ◈ CloudBook
        </NavLink>

        <div className={styles.links}>
          {isLoggedIn ? (
            <>
              <NavLink to="/contacts">Contacts</NavLink>
              <UserMenu />
            </>
          ) : (
            <>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/login">Login</NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navigation;