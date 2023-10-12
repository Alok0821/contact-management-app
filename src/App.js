// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';
import Header from './Components/Header';
import uuid4 from 'uuid4'
import "bootstrap/dist/css/bootstrap.min.css"



function App() {
  const localStorageKey = "contactLists"
  const [contactLists, setContactLists] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey))
  ||[]})

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contactLists))
  }, [contactLists])

  const addContact = (data) => {
    // console.log(data,"app.js line 09")

    setContactLists([...contactLists, { id: uuid4(), data }])

  }
  const removeContact = (id) => {
    const updatedList = contactLists.filter((value) => {
      return value.id !== id;
    });
    setContactLists(updatedList)

  };

  return (
    <>
    <div className='app-container'>

    <Header />
      <AddContact addContacts={addContact} />
      <ContactList addContactlist={contactLists} removeContact={removeContact} />
    </div>
     

    </>
  );
}

export default App;
