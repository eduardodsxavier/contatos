const URL = "http://localhost:8080/contatos";

export async function getData() {
  let json
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    json = await response.json();
  } catch (error) {
    console.error(error.message);
  }
  return json 
}

export async function addData(newContact) {
  body = JSON.stringify({ 
    requestType: "addContact", 
    name: newContact.name,
    number: newContact.number,
  })
  POST(body)
}

export async function removeData(idToRemove) {
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
