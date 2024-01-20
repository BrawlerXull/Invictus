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

const nameElement = document.getElementById("name");
const companyElement = document.getElementById("company-name");

const userEmail = localStorage.getItem("email");
console.log(userEmail);
fetch(url + "getuser", {
  method: "POST",
  body: JSON.stringify({
    email: userEmail,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((resp) => resp.json())
  .then((json) => {
    companyElement.innerHTML = json.user.company
    nameElement.innerHTML = json.user.name;
    console.log(json);
  });

function signOut() {
  localStorage.setItem("isLoggedIn", "false");
  localStorage.setItem("email", "");
  window.location.href = "../auth/index.html";
}

function dropdownmenu() {
  var dropdown = document.getElementById("dropdown-menu");
  dropdown.classList.toggle("hidden");
}

