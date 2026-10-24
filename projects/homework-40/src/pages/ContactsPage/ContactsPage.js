import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import { fetchContacts } from '../../redux/operations';
import { selectError, selectIsLoading } from '../../redux/selectors';
import styles from './ContactsPage.module.css';

function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main className={styles.page}>
      <div className={styles.heading}>
        <span>PRIVATE CONTACT DIRECTORY</span>
        <h1>My contacts</h1>
        <p>Your personal contact collection.</p>
      </div>

      <div className={styles.layout}>
        <section className={styles.panel}>
          <h2>Add contact</h2>
          <ContactForm />
        </section>

        <section className={styles.panel}>
          <h2>Saved contacts</h2>
          <Filter />
          {isLoading && <p>Loading...</p>}
          {error && <p className={styles.error} role="alert">{error}</p>}
          <ContactList />
        </section>
      </div>
    </main>
  );
}

export default ContactsPage;