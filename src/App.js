import React, { Component } from "react";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

import "./App.css";

class App extends Component {
  state = {
    contacts: [],
  };

  addContact = (newContact) =>
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));

  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };
  render() {
    const { contacts } = this.state;

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />

        <h2>Contacts</h2>
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.handleDeleteContact}
        />
      </>
    );
  }
}

export default App;
