const url = "https://invictus-backend.vercel.app/";
// const url = "http://localhost:5100/";
const isLoggedIn = localStorage.getItem("isLoggedIn");
console.log(isLoggedIn);
if (isLoggedIn === "false") {
  window.location.href = "../auth/index.html";
}

var fruits = ["Apple", "Banana", "Orange", "Grape", "Strawberry"];

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(
    '[data-collapse-toggle="navbar-default"]'
  );
  const menu = document.getElementById("navbar-default");

  button.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });
});

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
    companyElement.innerHTML = json.user.company;
    dropdown(json.user.products);
    console.log(json);
  });

function signOut() {
  localStorage.setItem("isLoggedIn", "false");
  localStorage.setItem("email", "");
  window.location.href = "../auth/index.html";
}

function dropdown(fruits) {
  var selectElement = document.getElementById("fruitSelection");
  for (var i = 0; i < fruits.length; i++) {
    var option = document.createElement("option");
    option.value = fruits[i];
    option.text = fruits[i].name;
    selectElement.add(option);
    console.log(fruits[i]);
  }
}
