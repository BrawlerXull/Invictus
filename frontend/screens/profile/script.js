const url = "https://invictus-backend.vercel.app/";

console.log('ok')
const email = localStorage.getItem('email');

const comapnyDiv = document.getElementById('company-name');
const ownerDiv = document.getElementById('owner');
const coowner1Div = document.getElementById('coowner1');
const coowner2Div = document.getElementById('coowner2');
const addressDiv = document.getElementById('address');
const phoneDiv = document.getElementById('phone');

fetch(url + 'getuser' ,{
    method: "POST",
    body: JSON.stringify({
      email: email,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
  .then((response) => {
    console.log("Status code:", response.status);
    return response.json();
  })
  .then((json) => {
    comapnyDiv.innerText = json.user.company
    ownerDiv.innerText = json.user.ownerDiv
    coowner1Div.innerText = json.user.coowner1Div
    coowner2Div.innerText = json.user.coowner2Div
    addressDiv.innerText = json.user.address
    phoneDiv.innerText = json.user.phone
    console.log(json)
  });