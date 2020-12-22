function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button">Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
