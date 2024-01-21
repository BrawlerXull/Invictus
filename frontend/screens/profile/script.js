const url = "https://invictus-backend.vercel.app/";
// const url = "http://localhost:5100/";
const isLoggedIn = localStorage.getItem("isLoggedIn");

console.log(isLoggedIn);
if (isLoggedIn === "false") {
  window.location.href = "../auth/index.html";
}
document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('[data-collapse-toggle="navbar-default"]');
  const menu = document.getElementById('navbar-default');

  button.addEventListener('click', function () {
      menu.classList.toggle('hidden');
  });
});

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
    ownerDiv.innerText = json.user.name
    coowner1Div.innerText = json.user.coowner1
    coowner2Div.innerText = json.user.coowner2
    addressDiv.innerText = json.user.address
    phoneDiv.innerText = json.user.phone
    console.log(json)
  });


function sendTo(url1) {
  console.log(url1);
  window.location.href = `../${url1}/index.html`;
}

function signOut(){
  localStorage.setItem('isLoggedIn', 'false');
  window.location.href = '../auth/index.html';
}



const editProfile = document.getElementById('edit-profile')

function edit(){
  console.log("dfasd")
  // if(editProfile.style.display == "none"){
  // }else {
  //   editProfile.style.display = "none";
  // }


  const inputCoowner1 = document.getElementById('items-input-coowner1')
  const inputCoowner2 = document.getElementById('items-input-coowner2')

  const inputAddress = document.getElementById('items-input-address')
  const inputPhone = document.getElementById('items-input-phone')

  

  if(inputAddress.value == "" || inputCoowner1.value == "" || inputCoowner2.value == "" || inputPhone.value == ""){
    return alert("Please fill all values");
  }

  fetch(url + 'updateuser' ,{
    method: "POST",
    body: JSON.stringify({
      email: email,
      coowner1 : inputCoowner1.value,
      coowner2 : inputCoowner2.value,
      phone : inputPhone.value,
      address : inputAddress.value
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
    inputCoowner1.value = ""
    inputCoowner2.value = ""
    inputPhone.value = ""
    inputAddress.value = ""
    location.reload()
    console.log(json)
  });

  console.log(inputCoowner1.value)
  console.log(inputCoowner2.value)
  console.log(inputPhone.value)
  console.log(inputAddress.value)
}

function show(){
  editProfile.style.display = "block";
  
}