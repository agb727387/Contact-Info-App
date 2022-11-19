import React from 'react'
import ContactInfoCard from './ContactInfoCard';

const ContactListOne = (props) => {
  const deleteContact = (id) => {
    props.getContactId(id);
  }
  return (
    <div className="ui celled list">
       {props.contacts.map(contact => <ContactInfoCard key={contact.id} contact={contact}
       clickHandler={deleteContact} />)}
    </div>
  )
}

export default ContactListOne