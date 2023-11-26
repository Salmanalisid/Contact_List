import React, { useState } from 'react';
import './App.css';
import {v4 as uuid} from "uuid";
// import {uuid} from "uuidv4"
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  // making key for localstorage
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState(() => {
    const contactRetr = localStorage.getItem(LOCAL_STORAGE_KEY);

    console.log("data in LS", JSON.parse(contactRetr));
    return contactRetr ? JSON.parse(contactRetr) : [];
  });

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  
  console.log("contacts outside ", contacts);
  const addContactHandler = (contact) => {
    if(!validateEmail(contact.email)){
      alert("Invalid email");
      return;
    }
    if(!contact.name){
      alert("Please Enter Name"); 
      return;
    }
    let existingContact = contacts.find((e)=>e.email == contact.email) ; 
    if(existingContact){
      alert('email already exists'); return 
    }
    
    setContacts([...contacts, {id:uuid(), ...contact}]);

    console.log("contacts in add func after set ", contacts);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...contacts, contact]));


    console.log("Logged", localStorage.getItem(LOCAL_STORAGE_KEY));

  };

  // useEffect(()=>{
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   console.log("result" ,retriveContacts);
  //   if(retriveContacts)setContacts(retriveContacts);
  // },[]);


  // useEffect(()=>{
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // },[contacts]);
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;
    });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...newContactList]));
    setContacts(newContactList);
  }
  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      {/* we are using props to pass contacts array to ContactList component */}
      <ContactList contacts={contacts} getContactId = {removeContactHandler}/>
    </div>
  );
}

export default App;
