let wrapper = document.querySelector(".wrapper"),
  signUpLink = document.querySelector(".link .signup-link"),
  signInLink = document.querySelector(".link .signin-link");

signUpLink.addEventListener("click", () => {
  wrapper.classList.add("animated-signin");
  wrapper.classList.remove("animated-signup");
});

signInLink.addEventListener("click", () => {
  wrapper.classList.add("animated-signup");
  wrapper.classList.remove("animated-signin");
});

async function loginUp() {
  const x = document.getElementById("userLog").querySelector("input").value;
  const y = document.getElementById("passLog").querySelector("input").value;
  const url = "http://localhost:5100/";

  fetch(url + "login", {
    method: "POST",
    body: JSON.stringify({
      email :x,
      password : y
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

async function signUp() {
  const x = document.getElementById("userSign").querySelector("input").value;
  const y = document.getElementById("passSign").querySelector("input").value;
  const url = "http://localhost:5100/";

  fetch(url + "sign", {
    method: "POST",
    body: JSON.stringify({
      email :x,
      password : y
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
