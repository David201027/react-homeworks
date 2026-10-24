import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './HomePage.module.css';

function HomePage() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <main className={styles.hero}>
      <span className={styles.eyebrow}>YOUR PERSONAL CONTACT SPACE</span>
      <h1>All your contacts. One simple place.</h1>
      <p>
        Create your personal account, save contacts in the cloud,
        and access them whenever you need.
      </p>
      <Link to={isLoggedIn ? '/contacts' : '/register'}>
        {isLoggedIn ? 'Open contacts →' : 'Get started →'}
      </Link>
    </main>
  );
}

export default HomePage;