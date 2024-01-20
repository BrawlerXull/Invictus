const url = "https://invictus-backend.vercel.app/";

console.log('ok')
const email = localStorage.getItem('email');

const comapnyDiv = document.getElementById('company-name');

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
    console.log(json)
  });