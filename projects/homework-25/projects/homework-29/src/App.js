import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import styles from './App.module.css';

function App() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>YOUR PERSONAL DIRECTORY</span>
          <h1>Phonebook</h1>
          <p>Keep your contacts organized in one place.</p>
        </div>

        <div className={styles.layout}>
          <section className={styles.panel}>
            <h2>Add contact</h2>
            <p className={styles.description}>
              Save a name and phone number to your phonebook.
            </p>
            <ContactForm />
          </section>

          <section className={styles.panel}>
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;