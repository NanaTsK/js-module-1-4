//* ЗАВДАННЯ 1

// const productName = 'Droid';
// console.log(productName);
// // 'Droid'

// const pricePerItem = 2000;
// console.log(pricePerItem);
// // 2000

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 2

// let productName = "Droid";
// let pricePerItem = 2000;

// productName = "Repair droid";
//   console.log(productName)
// pricePerItem = 2000 + 1500;
//   console.log(pricePerItem);

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 3

const topSpeed = 160;
const distance = 617.54;
const login = "mango935";
const isOnline = true;
const isAdmin = false;

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 4

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// const totalPrice = pricePerItem * orderedQuantity;

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 5

// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`
// console.log(message)

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 6

const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 7

function sayHi() {console.log("Hello, this is my first function!")};
sayHi();

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 8

function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
}
add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 9

function add(a, b, c) {
return a + b + c
}
add(2, 5, 8); // 15
console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));


//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 10

function makeMessage (name, price) {
   const message = `You picked ${name}, price per item is ${price} credits`;
  return message;
};


//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 11

function calculateTotalPrice (orderedQuantity, pricePerItem) {
  const totalPrice = orderedQuantity * pricePerItem;
  return totalPrice;
};
calculateTotalPrice(5, 100);


//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 12

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`
  return message;
}


//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 13

function isAdult(age) {
  const passed = age >= 18;
  return passed;
}

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 14

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  const isMatch = SAVED_PASSWORD === password;
  return isMatch;
}

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 15

function checkAge(age) {
  let message;
  if (age >= 18) { 
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }
  return message;
}

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 16

function checkStorage(available, ordered) {
  let message;
  if (available < ordered) { 
    message = 'Not enough goods in stock!';
  } else {
    message = 'Order is processed, our manager will contact you.';
  }
  return message;
}

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 17

let a = 5;
let b = 10;
let c = 15;
let d = 20;
a += 2;
b -= 4;
c *= 3;
d /= 10;

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 18

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
const totalPrice = pricePerDroid * orderedQuantity
 if (totalPrice > customerCredits) { 
    message = 'Insufficient funds!';
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
  }
  
  return message;
}


//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 19

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password == null) { 
    message =  'Canceled by user!';
  } else if (password == ADMIN_PASSWORD) { 
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 20

function checkStorage(available, ordered) {
  let message;
  if (ordered == 0) {message = "There are no products in the order!";}
      else if (available < ordered) {message = "Your order is too large, there are not enough items in stock!";}
      else {message = "The order is accepted, our manager will contact you";}

    return message;
}

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 21

function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end; 
  return isInRange;
}

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 22

function checkIfCanAccessContent(subType) {
  const canAccessContent =(subType === "pro" || subType === "vip"); 

  return canAccessContent;
}


//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 23

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; 
  return isNotInRange;
}

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 24

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;

  if (totalSpent >= 50000) {discount = GOLD_DISCOUNT;}
  else if (totalSpent >= 20000 && totalSpent < 50000) {discount = SILVER_DISCOUNT;}
  else if (totalSpent >= 5000 && totalSpent < 20000) {discount = BRONZE_DISCOUNT;}
  else {discount = BASE_DISCOUNT;}

  return discount;
}

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 25

function checkStorage(available, ordered) {
  let message;
   message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";

  return message;
}

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 26

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
  return message;
}

function checkStorage(available, ordered) {
    let message;
    
   message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";

  return message;
}

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 27

function getSubscriptionPrice(type) {
  let price;

 switch (type) { 
    case "starter": 
      price = 0; 
      break;

    case "professional": 
      price = 20; 
      break;

    case "organization": 
      price = 50; 
      break;
  }

  return price;
}


//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 28

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
switch (password) {
  case null: message = "Canceled by user!"; break;
  case ADMIN_PASSWORD: message = "Welcome!"; break;
  default: message = "Access denied, wrong password!";}
  
    return message;

}

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 29

function getShippingCost(country) {
  let message;
switch (country) {
  case "China": message = "Shipping to China will cost 100 credits"; break;
  case "Chile": message = "Shipping to Chile will cost 250 credits"; break;
  case "Australia": message = "Shipping to Australia will cost 170 credits"; break;
  case "Jamaica": message = "Shipping to Jamaica will cost 120 credits"; break;

  default: message = "Sorry, there is no delivery to your country";}
  return message;
}

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 30

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; 

  return message;
}


//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 31

const courseTopic = "JavaScript essentials";
const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];


//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 32

function getSubstring(string, length) {
  const substring = string.slice(0, length);
console.log(substring);

  return substring;
}

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 33

function formatMessage(message, maxLength) {
  let result;
result = message.length <= maxLength ? message : message.slice (0, maxLength)+`...`;
  return result;
}

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 34

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); 

  return normalizedInput;
}

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 35

function checkForName(fullName, name) {
 const result = fullName.includes(name); 
  return result;
}

//* ++++++++++++++++++++++++++++++++++++++++++++

//* ЗАВДАННЯ 36

function checkForSpam(message) {
  let result;
result = message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale")
  return result;
}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));

