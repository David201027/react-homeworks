import styled from 'styled-components';
import { DeleteButton } from '../Styled/Styled';

const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  padding: 14px 16px;

  background-color: #f7f7f7;
  border-radius: 10px;

  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateX(4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ContactName = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

const ContactNumber = styled.span`
  color: #777;
  font-size: 14px;
`;

function Contact({ id, name, number, onDeleteContact }) {
  return (
    <ContactItem>
      <ContactInfo>
        <ContactName>{name}</ContactName>
        <ContactNumber>{number}</ContactNumber>
      </ContactInfo>

      <DeleteButton
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </DeleteButton>
    </ContactItem>
  );
}

export default Contact;