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

export async function addData() {

}

export async function removeData() {}

