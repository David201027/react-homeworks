import styled from 'styled-components';
import Contact from '../Contact/Contact';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin: 20px 0 0;
  padding: 0;

  list-style: none;
`;

const EmptyMessage = styled.p`
  margin-top: 25px;

  color: #888;
  text-align: center;
`;

function ContactList({ contacts, onDeleteContact }) {
  if (contacts.length === 0) {
    return <EmptyMessage>No contacts found</EmptyMessage>;
  }

  return (
    <List>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </List>
  );
}

export default ContactList;