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
    console.log(json);
  });

function signOut() {
  localStorage.setItem("isLoggedIn", "false");
  localStorage.setItem("email", "");
  window.location.href = "../auth/index.html";
}

const queryInput = document.getElementById('query');
async function sendQuery(){
  // console.log(queryInput.value)
  console.log("query sent")

  fetch(url + "query", {
    method: "POST",
    body: JSON.stringify({
      email: userEmail,
      query : queryInput.value
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((resp) => resp.json())
    .then((json) => {
      queryInput.value = "";
      console.log(json);
    });
}


function sendTo(url1) {
  console.log(url1);
  window.location.href = `../${url1}/index.html`;
}
