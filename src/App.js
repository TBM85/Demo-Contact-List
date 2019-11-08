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
        avatar: './images/21.svg',
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
        avatar: './images/22.svg',
        phone: "+34 911 101-111",
        email: 'tyler@gmail.com'
      },
      {
        id: "lean",
        name: "Lean",
        avatar: './images/1.svg',
        phone: "+34 903 330-220",
        email: 'lean@gmail.com'
      },
      {
        id: "mary",
        name: "Mary",
        avatar: './images/3.svg',
        phone: "+44 203 769-18-80",
        email: 'mary@gmail.com'
      },
      {
        id: "ryan",
        name: "Ryan",
        avatar: './images/23.svg',
        phone: "+1 305 050-05-05",
        email: 'ryan@gmail.com'
      },
      {
        id: "aaron",
        name: "Aaron",
        avatar: './images/16.svg',
        phone: "+1 805 408-88-03",
        email: 'aaron@gmail.com'
      }, 
      {
        id: "carol",
        name: "Carol",
        avatar: './images/15.svg',
        phone: "+34 205 801-27-76",
        email: 'carol@gmail.com'
      },
      {
        id: "hailey",
        name: "Hailey",
        avatar: './images/13.svg',
        phone: "+1 209 300-83-92",
        email: 'hailey@gmail.com'
      }, 
      {
        id: "walter",
        name: "Walter",
        avatar: './images/24.svg',
        phone: "+593 999877653",
        email: 'walter@gmail.com'
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

  // This function adds contact to the contact list
  createContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.concat([ contact ])
    }))
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
        <Route exact path='/create' render={({ history }) => (
          <Contact 
            createContact={(contact) => {
              this.createContact(contact)
              history.push('/')
            }}
          />
        )}/>
        <Footer />
      </div>
    );
  }
}

export default App;
