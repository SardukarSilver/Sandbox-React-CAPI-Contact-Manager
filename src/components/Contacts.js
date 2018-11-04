import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Jhon Doe',
        email: 'jd@com.com',
        phone: '111-111-1111',
      },
      {
        id: 2,
        name: 'Rick Martinez',
        email: 'rm@com.com',
        phone: '222-222-2222',
      },
      {
        id: 3,
        name: 'Morti Sanchez',
        email: 'ms@com.com',
        phone: '333-333-3333',
      },
    ]
  }

  
  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact 
            key={contact.id}
            contact={contact}
          />
        ))}
      </React.Fragment>
    )
  }
}

export default Contacts;