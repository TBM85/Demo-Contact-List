import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import SimpleMenu from './SimpleMenu';

class ContactList extends Component {
  state = {
    query: ""
  }

  updateQuery = (query) => {
    this.setState({
      query: query.trim()
    })
  }

  render() {
    const { contacts, removeContact } = this.props;
    const { query } = this.state;

    let showContacts;
    const match = new RegExp(escapeRegExp(query), 'i');

    (query) ?
      showContacts = contacts.filter((contact) => match.test(contact.name))
    :
      showContacts = contacts

    showContacts.sort(sortBy('name'));

    return(
      <section id="contacts">
        <div className="contact-search-add">
          <input
            className="contact-search"
            type="text"
            placeholder="Search contacts"
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
          <a href="#" className="contact-add">Add Contact</a>
        </div>

        <ol className="contact-list">
          {showContacts.map((contact) => (
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