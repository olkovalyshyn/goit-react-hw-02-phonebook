// import React, { Component } from "react";

const ContactListTpl = ({ id, name, number, onDelete }) => {
  return (
    <li key={id}>
      {name}: {number} <button onClick={() => onDelete(id)}></button>
    </li>
  );
};

const ContactList = ({ contacts, onDelete }) => {
  if (contacts.length === 0) return null;

  <ul>
    {contacts.map((contact) => {
      return <ContactListTpl {...contact} onDelete={onDelete} />;
    })}
  </ul>;
};

export default ContactList;
