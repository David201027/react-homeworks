import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authOperations';
import styles from './UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user.email);
  const error = useSelector(state => state.auth.error);
  const [busy, setBusy] = useState(false);

  const handleLogout = async () => {
    setBusy(true);

    try {
      await dispatch(logout()).unwrap();
    } catch (error) {
      setBusy(false);
    }
  };

  return (
    <div className={styles.menu}>
      <span>{email}</span>
      <button onClick={handleLogout} disabled={busy}>
        {busy ? 'Wait...' : 'Logout'}
      </button>
      {error && <span role="alert">{error}</span>}
    </div>
  );
}

export default UserMenu;