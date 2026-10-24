import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectVisibleContacts,
} from '../../redux/selectors';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <div>
      <div className={styles.summary}>
        <span>Saved contacts</span>
        <strong>{contacts.length}</strong>
      </div>

      {contacts.length === 0 ? (
        <p className={styles.empty}>No contacts yet.</p>
      ) : visibleContacts.length === 0 ? (
        <p className={styles.empty}>No matching contacts found.</p>
      ) : (
        <ul className={styles.list}>
          {visibleContacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;