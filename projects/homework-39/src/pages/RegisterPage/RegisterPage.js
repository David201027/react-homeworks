import AuthForm from '../../components/AuthForm/AuthForm';
import styles from './RegisterPage.module.css';

function RegisterPage() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <h1>Create account</h1>
        <p>Start organizing your contacts in the cloud.</p>
        <AuthForm mode="register" />
      </section>
    </main>
  );
}

export default RegisterPage;