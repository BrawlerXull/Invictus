const url = "https://invictus-backend.vercel.app/";
// const url = "http://localhost:5100/";

const isLoggedIn = localStorage.getItem('isLoggedIn');
console.log(isLoggedIn)
if (isLoggedIn === 'true') {
  window.location.href = '../home/index.html';
}

function showAlert(message) {
  alert(message);
}

async function loginUser() {
  showLoadingSpinner();

  const x = document.getElementById("email-login").querySelector("input").value;
  const y = document.getElementById("password-login").querySelector("input").value;

  fetch(url + "login", {
    method: "POST",
    body: JSON.stringify({
      email: x,
      password: y,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      hideLoadingSpinner();

      console.log("Status code:", response.status);
      if (response.ok) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('email', x);
        window.location.href = '../home/index.html';
      } else {
        showAlert("Login failed.\n Check username or password");
      }
      return response.json();
    })
    .then((json) => console.log(json));
}

async function signUpUser() {
  showLoadingSpinner();

  const x = document.getElementById("email-signin").querySelector("input").value;
  const address = document.getElementById("address-signin").querySelector("input").value;
  const y = document.getElementById("password-signin").querySelector("input").value;
  const z = document.getElementById("username-signin").querySelector("input").value;
  const coowner1 = document.getElementById("co-username1-signin").querySelector("input").value;
  const coowner2 = document.getElementById("co-username2-signin").querySelector("input").value;

  fetch(url + "sign", {
    method: "POST",
    body: JSON.stringify({
      email: x,
      password: y,
      name : z,
      address : address,
      coowner1 : coowner1,
      coowner2:coowner2
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      hideLoadingSpinner();

      console.log("Status code:", response.status);
      if (response.ok) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('email', x);
        window.location.href = '../home/index.html';
      } else {
        showAlert("SignUp failed.\n User already exists");
      }
      return response.json();
    })
    .then((json) => console.log(json));
}


























// DONT TOUCH BELOW LOGIC
const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });

    function showLoadingSpinner() {
      const loadingSpinner = document.querySelector(".loading-spinner");
      const beingProcessed = document.querySelector(".being-process");
      loadingSpinner.style.display = "block";
      beingProcessed.style.display = "block";
    }
    
    // Function to hide the loading spinner
    function hideLoadingSpinner() {
      const loadingSpinner = document.querySelector(".loading-spinner");
      const beingProcessed = document.querySelector(".being-process");
      loadingSpinner.style.display = "none";
      beingProcessed.style.display = "none";
    }