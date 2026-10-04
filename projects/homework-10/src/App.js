import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  Container,
  Title,
  Subtitle,
} from './components/Styled/Styled';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // addContact = (name, number) => {
  //   const { contacts } = this.state;

  //   const normalizedName = name.toLowerCase();

  //   const isDuplicate = contacts.some(
  //     contact => contact.name.toLowerCase() === normalizedName
  //   );

  //   if (isDuplicate) {
  //     alert(`${name} is already in contacts.`);
  //     return;
  //   }

  //   const newContact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, newContact],
  //   }));
  // };

  addContact = (name, number) => {
    const { contacts } = this.state;

    const isDuplicate = contacts.some(
      contact => contact.name === name
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== contactId
      ),
    }));
  };

  changeFilter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => {
      const nameMatch = contact.name
        .toLowerCase()
        .includes(normalizedFilter);

      const numberMatch = contact.number.includes(filter);

      return nameMatch || numberMatch;
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <Title>📞 Phonebook</Title>

        <ContactForm onSubmit={this.addContact} />

        <Subtitle>Contacts</Subtitle>

        <Filter
          value={filter}
          onChange={this.changeFilter}
        />

        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;