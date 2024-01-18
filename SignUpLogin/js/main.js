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

function submitForm() {
  console.log("Submit clicked");
  const url = "http://localhost:5020/register";

  const userName = document.getElementById("usernameInput").querySelector("input").value;
  const email = document.getElementById("emailInput").querySelector("input").value;
  const password = document.getElementById("passwordInput").querySelector("input").value;

  const newUser = {
    username: userName,
    email: email,
    password: password,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data received:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
