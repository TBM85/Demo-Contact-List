import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contact extends Component {
  render() {
    return(
      <div id="page-contact">
        <Link className="page-contact-back" to="/">Close</Link>
        <form className="page-contact-form">
          <img className="page-contact-avatar" name="avatar" />
          <div className="page-contact-details">
            <input className="page-contact-input" type="text" name="name" placeholder="Name" ref="name" />
            <input className="page-contact-input" type="number" name="phone" placeholder="Phone" ref="phone" />
            <input className="page-contact-input" type="text" name="email" placeholder="Email" ref="email" />
            <button className="page-contact-btn">Add Contact</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;