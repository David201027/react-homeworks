import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register, login } from '../../redux/authOperations';
import styles from './AuthForm.module.css';

function AuthForm({ mode }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(state => state.auth.isLoading);
  const error = useSelector(state => state.auth.error);

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = event => {
    setForm(previous => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const credentials =
      mode === 'register'
        ? form
        : { email: form.email, password: form.password };

    try {
      await dispatch(
        mode === 'register'
          ? register(credentials)
          : login(credentials)
      ).unwrap();

      navigate('/contacts', { replace: true });
    } catch (error) {
      return;
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {mode === 'register' && (
        <label>
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            minLength="2"
            required
          />
        </label>
      )}

      <label>
        Email
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Password
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          minLength="7"
          required
        />
      </label>

      {error && <p className={styles.error} role="alert">{error}</p>}

      <button disabled={isLoading} type="submit">
        {isLoading
          ? 'Please wait...'
          : mode === 'register'
            ? 'Create account'
            : 'Sign in'}
      </button>
    </form>
  );
}

AuthForm.propTypes = {
  mode: PropTypes.oneOf(['register', 'login']).isRequired,
};

export default AuthForm;