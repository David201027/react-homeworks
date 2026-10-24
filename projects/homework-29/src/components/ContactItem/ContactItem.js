import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './ContactItem.module.css';

function ContactItem({ contact }) {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <div className={styles.avatar}>
        {contact.name.charAt(0).toUpperCase()}
      </div>

      <div className={styles.info}>
        <strong>{contact.name}</strong>
        <a href={`tel:${contact.number}`}>{contact.number}</a>
      </div>

      <button
        className={styles.delete}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
        aria-label={`Delete ${contact.name}`}
      >
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;