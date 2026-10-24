import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';
import styles from './ContactForm.module.css';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedNumber = number.trim();

    if (!trimmedName || !trimmedNumber) {
      setMessage('Please fill in all fields.');
      return;
    }

    const exists = contacts.some(
      contact =>
        contact.name.toLowerCase() === trimmedName.toLowerCase()
    );

    if (exists) {
      setMessage(`${trimmedName} is already in contacts.`);
      return;
    }

    setSubmitting(true);
    setMessage('');

    try {
      await dispatch(
        addContact({ name: trimmedName, number: trimmedNumber })
      ).unwrap();

      setName('');
      setNumber('');
    } catch (error) {
      setMessage(`Could not save contact: ${error}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={event => setName(event.target.value)}
          placeholder="John Smith"
          required
        />
      </label>

      <label className={styles.label}>
        Phone number
        <input
          className={styles.input}
          type="tel"
          name="number"
          value={number}
          onChange={event => setNumber(event.target.value)}
          placeholder="+1 555 123 4567"
          required
        />
      </label>

      {message && (
        <p className={styles.message} role="alert">
          {message}
        </p>
      )}

      <button
        className={styles.button}
        type="submit"
        disabled={submitting}
      >
        {submitting ? 'Saving...' : '+ Add contact'}
      </button>
    </form>
  );
}

export default ContactForm;