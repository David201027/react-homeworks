import AuthForm from '../../components/AuthForm/AuthForm';
import styles from './LoginPage.module.css';

function LoginPage() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <h1>Welcome back</h1>
        <p>Sign in to manage your personal contacts.</p>
        <AuthForm mode="login" />
      </section>
    </main>
  );
}

export default LoginPage;