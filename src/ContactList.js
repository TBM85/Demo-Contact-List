import React, { Component } from 'react';
import SimpleMenu from './SimpleMenu';

class ContactList extends Component {
  render() {
    const { contacts, removeContact } = this.props;

    return(
      <section id="contacts">
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