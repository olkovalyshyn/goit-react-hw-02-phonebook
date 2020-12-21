import React, { Component } from "react";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  state = {
    contacts: [],
  };

  addContact = (newContact) =>
    this.setState((contacts) => ({ contacts: [...contacts, newContact] }));

  handleDeleteContact = (id) =>
    this.setState((contacts) => {
      contacts: contacts.filter((contact) => contact.id !== id);
    });
  // addTodo = (text) => {
  //   const todo = {
  //     // id: shortid.generate(),
  //     name: text,
  //   };

  // this.setState((prevState) => ({
  //   contacts: [todo, ...prevState.name],
  // }));
  // };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />

        <h2>Contacts</h2>
        <ContactList contacts={contacts} onDelete={this.handleDeleteContact} />
      </>
    );
  }
}

export default App;
