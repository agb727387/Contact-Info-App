import './App.css';
import HeaderOne from './components/HeaderOne';
import CreateContact from './components/CreateContact';
import ContactListOne from './components/ContactListOne';
import { useState, useEffect } from 'react';

function App() {
  const localStorageKey = "contacts";
  const [contacts, setContacts] = useState([]); 

  const createContactHandler = contact => {
    console.log(contact);
    setContacts([...contacts, contact]);
  }

  useEffect(() => {
    const retrievedContacts = JSON.parse(localStorage.getItem(localStorageKey));
    if(retrievedContacts) setContacts(retrievedContacts);
  }, [])

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts])

  const removeContact = id => {
    const newContactList = contacts.filter(contact => contact.id !== id);
    setContacts(newContactList);
  }

  return (
    <div className="ui container">
      <HeaderOne />
      <CreateContact createContactHandler={createContactHandler} />
      <ContactListOne contacts={contacts} getContactId={removeContact}/>
    </div>
  );
}

export default App;
