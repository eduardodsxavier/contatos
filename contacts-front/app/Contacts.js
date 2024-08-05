let contacts = []

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

export function RemoveContact(keyToRemove, PrevContacts) {
  PrevContacts = PrevContacts.filter(contact => contact.key !== keyToRemove)
  return PrevContacts
}

export function AddContact(key, PrevContacts) {
  const name = prompt("name: ")
  const number = prompt("phone: ")
  PrevContacts = [...PrevContacts, {key, name, number}]
  return PrevContacts
}

export default contacts.sort(compareNames)
