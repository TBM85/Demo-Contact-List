import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import swal from 'sweetalert';
import Header from './Header';
import ContactList from './ContactList';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';

class App extends Component {
  state = {
    contacts: [
      {
        id: "michael",
        name: "Michael",
        avatar: './images/1.svg',
        phone: "+1 888 200-20-20",
        email: 'michael@gmail.com'
      },
      {
        id: "linda",
        name: "Linda",
        avatar: './images/2.svg',
        phone: "+1 800 656-60-06",
        email: 'linda@gmail.com'
      },
      {
        id: "tyler",
        name: "Tyler",
        avatar: './images/3.svg',
        phone: "+34 911 101-111",
        email: 'tyler@gmail.com'
      },
      {
        id: "lean",
        name: "Lean",
        avatar: './images/21.svg',
        phone: "+34 903 330-220",
        email: 'lean@gmail.com'
      },
      {
        id: "mary",
        name: "Mary",
        avatar: './images/22.svg',
        phone: "+44 203 769-18-80",
        email: 'mary@gmail.com'
      },
      {
        id: "ryan",
        name: "Ryan",
        avatar: './images/23.svg',
        phone: "+1 305 050-05-05",
        email: 'ryan@gmail.com'
      }
    ]
  }

  // This function removes the selected contact and shows a confirmation modal
  removeContact = (contact) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this contact!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    })
    .then((willDelete) => {
      if (willDelete) {
        willDelete = this.setState((state) => ({
          contacts: state.contacts.filter((c) => c.id !== contact.id)
        }))
        swal("Your contact has been deleted!", {
          icon: "success",
        });
      }
    });
  }

  render () {
    const { contacts } = this.state; 

    return(
      <div className="App">
        <Header />
        <Route exact path='/' render={() => (
          <ContactList 
            contacts={contacts}
            removeContact={this.removeContact} 
          />
        )}/>
        <Route exact path='/create' render={() => (
          <Contact />
        )}/>
        <Footer />
      </div>
    );
  }
}

export default App;
