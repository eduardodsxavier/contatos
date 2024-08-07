import { getData, addData, removeData } from './JsonCommunicator'

function compareNames(contact1, contact2) {
  if(contact1.name < contact2.name) {
    return -1
  }
  else if (contact1.name === contact2.name) {
    return 0
  }
  else {
    return 1
  }
}

export default async function ShowContactList() { 
  const Data = await getData()
  const contacts = [...Data].sort(compareNames)
  return (
    contacts.map(contact =>( 
      <li key={contact.id}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
        <button>Remove</button>
      </li>
    ))
  )
}


