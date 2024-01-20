

const url = "https://invictus-backend.vercel.app/";
// const url = "http://localhost:5100/";
const isLoggedIn = localStorage.getItem("isLoggedIn");
console.log(isLoggedIn);
if (isLoggedIn === "false") {
  window.location.href = "../auth/index.html";
}


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

var data;

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
    data = json.user;
    console.log(json);
  });

function signOut() {
  localStorage.setItem("isLoggedIn", "false");
  localStorage.setItem("email", "");
  window.location.href = "../auth/index.html";
}

function dropdown(fruits) {
  var selectElement = document.getElementById("productSelection");
  for (var i = 0; i < fruits.length; i++) {
    var option = document.createElement("option");
    option.text = fruits[i].name;
    selectElement.add(option);
    console.log(fruits[i]);
  }
}


const productNameElement = document.getElementById("product-name");
const productSelection = document.getElementById("productSelection");
const availableQuantity = document.getElementById("available-quantity");
const priceDiv = document.getElementById("product-price");
const newInput1 = document.getElementById("items-input");
const productRight = document.getElementById("product-right");





productSelection.addEventListener("change", function () {
  productRight.style.display = "block";
    console.log(productSelection)
    var selectedProduct = productSelection.value;
    console.log(data.products[productSelection.selectedIndex].quantity)
    availableQuantity.innerText = data.products[productSelection.selectedIndex].quantity
    priceDiv.innerText = data.products[productSelection.selectedIndex].price
    productNameElement.innerHTML = "Selected Product: " + selectedProduct;
});



function updateQuantities(){
  console.log("sdfa")
  const inputValue1 = newInput1.value;
  data.products[productSelection.selectedIndex].quantity = inputValue1;
  newInput1.value = ""
  updateInDB(data.products)
  console.log(inputValue1)
  console.log(data.products[productSelection.selectedIndex])
  availableQuantity.innerText = data.products[productSelection.selectedIndex].quantity
  priceDiv.innerText = data.products[productSelection.selectedIndex].price
}

function updateInDB(updatedData){
  console.log("update",updatedData)
  fetch(url + "updateproducts", {
    method: "POST",
    body: JSON.stringify({
      email: userEmail,
      products : updatedData
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((resp) => resp.json())
    .then((json) => {
      console.log(updatedData)
      console.log(json);
    });
}

const newInput2 = document.getElementById("items-input-price");
function updatePrice(){
  console.log("pricekoclick")
  const inputValue2 = newInput2.value;
  console.log("dfa", data.products[productSelection.selectedIndex])
  data.products[productSelection.selectedIndex].price = inputValue2;
  inputValue2.value = "";
  updateInDB(data.products)
  priceDiv.innerText = data.products[productSelection.selectedIndex].price
  availableQuantity.innerText = data.products[productSelection.selectedIndex].quantity
  console.log(inputValue2)

}