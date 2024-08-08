async function addData(newContact) {
  body = JSON.stringify({ 
    requestType: "addContact", 
    name: newContact.name,
    number: newContact.number,
  })
  POST(body)
}

async function removeData(idToRemove) {
  body = JSON.stringify({ 
    requestType: "removeContact", 
    id: idToRemove, 
  })
  POST(body)
}

async function POST(requestBody) {
  const request1 = new Request("http://localhost:8080/contatos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: requestBody,
  });

  const response1 = await fetch(request1);
  console.log(response1.status);
}

const contact = { id: 0, name: "Matt", number: "12345678" }

addData(contact)

removeData(contact)
