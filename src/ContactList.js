import React, { Component } from 'react';
import SimpleMenu from './SimpleMenu';

class ContactList extends Component {
  render() {
    const { contacts, removeContact } = this.props;

    return(
      <section id="contacts">
        <div className="contact-search-add">
          <input
            className="contact-search"
            type="text"
            placeholder="Search contacts"
          />
          <a href="#" className="contact-add">Add Contact</a>
        </div>

        <ol className="contact-list">
          {contacts.map((contact) => (
            <li key={contact.id} className="contact-list-item">
              <div className="contact-avatar" style={{backgroundImage: `url(${contact.avatar}`}} />
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
              </div>

              <SimpleMenu 
                removeContact={removeContact}
                contact={contact}
              />
            </li>
          ))}
        </ol>
      </section>
    );
  }
}

export default ContactList;