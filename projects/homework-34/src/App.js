import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { fetchContacts } from './redux/operations';
import { selectError, selectIsLoading } from './redux/selectors';
import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.heading}>
          <span className={styles.eyebrow}>CLOUD CONTACT MANAGER</span>
          <h1>Phonebook</h1>
          <p>Your contacts, saved securely in the cloud.</p>
        </header>

        <div className={styles.layout}>
          <section className={styles.panel}>
            <h2>Add contact</h2>
            <p className={styles.description}>
              Create a new contact and save it to your phonebook.
            </p>
            <ContactForm />
          </section>

          <section className={styles.panel}>
            <h2>Contacts</h2>
            <Filter />

            {isLoading && (
              <p className={styles.loading}>Loading...</p>
            )}

            {error && (
              <p className={styles.error} role="alert">
                Error: {error}
              </p>
            )}

            <ContactList />
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;