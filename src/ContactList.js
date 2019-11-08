import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import SimpleMenu from './SimpleMenu';

class ContactList extends Component {
  state = {
    query: ""
  }

  // Update the contacts that match with the search performed
  updateQuery = (query) => {
    this.setState({
      query: query.trim()
    })
  }

  // Clear the search made and show all contacts in the list
  clearQuery = () => {
    this.setState({
      query: ""
    })
  } 

  render() {
    const { contacts, removeContact } = this.props;
    const { query } = this.state;

    let showContacts;
    const match = new RegExp(escapeRegExp(query), 'i');

    // Filter the contacts in the search box
    (query) ?
      showContacts = contacts.filter((contact) => match.test(contact.name))
    :
      showContacts = contacts

    // Sort the contact list by 'name'
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
          <Link
            to="/create"
            className="contact-add"
          >
            Add Contact
          </Link>
        </div>

        {showContacts.length !== contacts.length && 
          <div className="contact-text">
            <span>{showContacts.length} of {contacts.length} contacts</span>
            <button onClick={this.clearQuery}>All contacts</button>
          </div>
        } 
        { showContacts.length === contacts.length && 
          <div className="contact-text">
            <span>There is {contacts.length} contacts</span>
          </div>
        }

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