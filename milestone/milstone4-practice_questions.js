//* 1. Real Project-Based Problem Solving

// //* Form Validation:
// Write a function validateEmail(email) that checks if an email is valid(must contain @and.).
// 👉 Used in login / signup forms.

function validateEmail(email) {
  if (email.includes("@") && email.includes(".")) {
    return "Valid Email";
  } else {
    return "Invalid Email";
  }
}

let validateEmailResult = validateEmail("shfj@okfoas.com");
console.log(validateEmailResult);


// //* Search Filter:
// You have an array of product names:
// ["Apple", "Banana", "Mango", "Orange"]
// Write a function where a user types "an" and it returns ["Banana", "Mango", "Orange"].
// 👉 Used in e-commerce product searches.

let productsName = ["Apple", "Banana", "Mango", "Orange"];

function searchProd(productsName) {

  let names = [];
  for (let name of productsName) {
    if (name.includes("an")) {
      names.push(name);
    }
  }

  return names;
}

let searchProdResult = searchProd(productsName);
console.log(searchProdResult);


//* Password Strength Checker
// A function checkPasswordStrength(password) that checks if a password has:
// At least 8 characters
// At least one uppercase, one lowercase, one number, one special character
// 👉 Used in sign-up systems.

function checkPasswordStrength(password) {

  let characterRegex = /[^a-zA-Z0-9]/;
  let upperCaseRegex = /[A-Z]/;
  let lowerCaseRegex = /[a-z]/;
  let numberRegex = /[0-9]/;

  // 8 Characters
  if (password.length < 8) {
    return "Password must be at least 8 characters";
  }
  // Special Character
  if (characterRegex.test(password) === false) {
    return "Special caracter not used";
  }
  // UpperCase
  if (upperCaseRegex.test(password) === false) {
    return "Upper case letter not used";
  }
  // LowerCase
  if (lowerCaseRegex.test(password) === false) {
    return "Lower case letter not used";
  }
  // Number
  if (numberRegex.test(password) === false) {
    return "Number not used";
  }

  return "Password Valid";
}

let checkPasswordStrengthResult = checkPasswordStrength("Aa1>asas");
console.log(checkPasswordStrengthResult);


//* Cart Total Calculator:
// Array of objects:
const cart = [
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 800, quantity: 2 },
  { name: "Keyboard", price: 1200, quantity: 1 }
];

// Write a function that calculates the total cart value.
// 👉 Used in online stores.

function totalCartVal(cart) {
  //   // return cart;

  //? FUNCTION + FOR OF LOOP
  // let totalPrice = 0;
  //   for (let values of cart) {
  //     totalPrice += values.price * values.quantity;
  //   }
  // return totalPrice;

  //? FOR EACH METHOD + ARROW FUNCTION
  // let totalPrice = 0;
  // cart.forEach((values) => {
  //   totalPrice += values.price * values.quantity;
  // })
  // return totalPrice;

}

let totalCartValResult = totalCartVal(cart);
console.log("Total cart value: " + totalCartValResult);