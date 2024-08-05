'use client'

import { useState } from 'react'

import importedContacts, { AddContact, RemoveContact } from './Contacts'

let contacts = importedContacts
let key = contacts.length + 1

export default function Home () {
  const [contactList, setContactList] = useState(MakeContactList())

  function Header() {
    return (
      <header>
        <button onClick={() => CallAddContat()}>Add Contact</button>
      </header>
    )
  }

  function MakeContactList() { 
    return (
      contacts.map(contact =>( 
        <li key={contact.id}>
          <p>{contact.name}</p>
          <p>{contact.phone}</p>
          <button onClick={() => CallRemoveContact(contact.id)}>Remove</button>
        </li>
      ))
    )
  }

  function CallRemoveContact(keyToRemove) {
    contacts = RemoveContact(keyToRemove, contacts)
    setContactList(MakeContactList)
  }

  function CallAddContat() {
    contacts = AddContact(key, contacts)
    key++
    setContactList(MakeContactList)
  }

  return (
    <main>
      <Header/>
      <ul>
        {contactList}
      </ul>
    </main>
  )
}
