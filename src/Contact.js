import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serializeForm from 'form-serialize';
import ImageInput from './ImageInput';

class Contact extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
  
    const values = serializeForm(e.target, { hash: true });
    if(this.props.createContact)
      this.props.createContact(values)
  }

  render() {
    return(
      <div id="page-contact">
        <Link className="page-contact-back" to="/">Close</Link>
        <form className="page-contact-form" onSubmit={this.handleSubmit}>
          <ImageInput
            className="page-contact-avatar"
            name="avatar"
            maxHeight={64}
          />
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