

async function loginUser() {
  const x = document.getElementById("email-login").querySelector("input").value;
  const y = document.getElementById("password-login").querySelector("input").value;
  console.log(x)
  console.log(y)
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

async function signUpUser() {
  const x = document.getElementById("email-signin").querySelector("input").value;
  const y = document.getElementById("password-signin").querySelector("input").value;
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