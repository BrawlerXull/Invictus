const url = "https://invictus-backend.vercel.app/";
// const url = "http://localhost:5100/";
const isLoggedIn = localStorage.getItem("isLoggedIn");
console.log(isLoggedIn);
if (isLoggedIn === "false") {
  window.location.href = "../auth/index.html";
}

const nameElement = document.getElementById("name");

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
    nameElement.innerHTML = json.user.name;
    console.log(json);
  });

function signOut() {
  localStorage.setItem("isLoggedIn", "false");
  localStorage.setItem("email", "");
  window.location.href = "../auth/index.html";
}
