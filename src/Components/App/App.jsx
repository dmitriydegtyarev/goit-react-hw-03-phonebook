import { Component } from 'react';

import { PageTitle } from 'Components/Title';
import { ContactForm } from 'Components/ContactForm';
import { Filter } from 'Components/Filter';
import { ContactsList } from 'Components/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = newContact =>
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));

  handleCheckUniqueContact = name => {
    const { contacts } = this.state;

    const isExistContact = !!contacts.find(contact => contact.name === name);

    isExistContact && alert('Contact is already exist');

    return !isExistContact;
  };

  handleRemoveContact = id =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));

  handleFilterChange = filter => this.setState({ filter });

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <PageTitle title="Phonebook" />
        <ContactForm
          onAdd={this.handleAddContact}
          onCheckUnique={this.handleCheckUniqueContact}
        />
        <PageTitle title="Contacts List" />
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <ContactsList
          contacts={visibleContacts}
          onRemove={this.handleRemoveContact}
        />
      </>
    );
  }
}
