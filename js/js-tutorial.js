// Переменные и типы примитивов
// const и let
// let x = 5; если еще будем менять x

// Логирование с методом console.log()
// Уникальность идентификатора

//* ++++++++++++++++++++++++++++++++++++++++++++

// const age = 10;
// const totalPrice = 200.74;
// const userName = 'Chelsey';
// const message = 'Welcome';
// const isOpen = true;
// const shouldConfirm = false;

// console.log('Price:', totalPrice)
//* ++++++++++++++++++++++++++++++++++++++++++++

//  Оператот typeof (проверка типа)

// const type = typeof 'hgjhg';
// console.log(type);

//* ++++++++++++++++++++++++++++++++++++++++++++

// Kak window.alert() блокирует интерпретацию

// console.log('До');
// alert('THIS IS ALERT');
// console.log('После');

//* ++++++++++++++++++++++++++++++++++++++++++++
// Ввод пользователя
// Методы window.confirm() и window.prompt():

// const shouldRenew = confirm('Хотите продлить подписку?');
// console.log(shouldRenew);

// Oк= true, Cancel= falce

// const quantity = prompt('Введите количество товаров');
// console.log(quantity);
// // Oк= inserted info, Cancel= null
// console.log(typeof quantity);

// let quantity = prompt('Введите количество товаров');
// quantity = Number(quantity)
// console.log(quantity);
// console.log(typeof quantity);

//* ++++++++++++++++++++++++++++++++++++++++++++
// 0,48 - 1,34

//* ++++++++++++++++++++++++++++++++++++++++++++

const firstName = 'Chelsy';
const lastName = 'Emerald';
const fullName = firstName + ' ' + lastName;

const room = 716;
const type = 'VIP'

// const welcomeMsg = 'Гость ' + firstName + ' ' + lastName + ' поселяется в ' + type + ' номер ' + room;
// console.log(welcomeMsg);
// ИЛИ
const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`
console.log(welcomeMsg);
//* ++++++++++++++++++++++++++++++++++++++++++++

//Що буде виведено в консоль?:
console.log(0 || ('0' && {}));
// Вірна відповідь: {} 

//* ++++++++++++++++++++++++++++++++++++++++++++
// //Що буде виведено в консоль?:
// let a = 6; 
// let b = false; 
// let c = "12"; 
// let d = 1; 
// let result = a + d + c + b; 
// console.log(result);


//* ++++++++++++++++++++++++++++++++++++++++++++

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

//* ++++++++++++++++++++++++++++++++++++++++++++
// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//   // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//   // про успіх і робимо break, щоб далі не шукати
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

//   // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"

//* ++++++++++++++++++++++++++++++++++++++++++++

let counter = 0;

while (counter < 50) {
  console.log("counter: ", counter + 10);
  counter += 5;
}

//* ++++++++++++++++++++++++++++++++++++++++++++
let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}
//* ++++++++++++++++++++++++++++++++++++++++++++

// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

//* ++++++++++++++++++++++++++++++++++++++++++++

// for (let i = 2; i <= 20; i += 5) {
//   console.log(i);
// }
//* ++++++++++++++++++++++++++++++++++++++++++++

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);
//* ++++++++++++++++++++++++++++++++++++++++++++

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }
//* ++++++++++++++++++++++++++++++++++++++++++++

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
// }
//* ++++++++++++++++++++++++++++++++++++++++++++

// Общая сумма зарплат работников:
// 1. сделать вары:
const minSalary = 500;
const maxSalary = 5000;
const employees = 9;
let totalSalary = 0;

// 2. перебрать работнков в цикле:
// for (let i = 1; i <= employees; i += 1) { 
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary,);
//     console.log(`ЗП работника номер ${i} - ${salary}`);
//     totalSalary += salary;
//         // console.log(`totalSalary: `, totalSalary);

// }
//     console.log(`totalSalary: `, totalSalary);

// 3. сгенерить случайную зп

// 4. лог
 
//* ++++++++++++++++++++++++++++++++++++++++++++
// Сумма четных чисел
// 1. сделать вары:
const min = 6;
const max = 13;
let total = 0;

// 2. for from min to max, с шагом в 1
// for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) {
//         // console.log(`Не четное: `, i);
//         continue;
//     }
//     console.log(`четное: `, i);
//     total += i;
// }
// console.log(`total: `, total);
// 3. проверяем остатки от деления

// 4. пишем в сумму / лог



//* ++++++++++++++++++++++++++++++++++++++++++++

// Заказ в магазине:
let balance = 10000;
const payment = 2000;


console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем баланс.`)

if (balance >= payment) {
    console.log(`ok`);
    balance -= payment;
    console.log(`На счету осталось ${balance} кредитов`);
}

//* ++++++++++++++++++++++++++++++++++++++++++++

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }
//* ++++++++++++++++++++++++++++++++++++++++++++

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }
//* ++++++++++++++++++++++++++++++++++++++++++++

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

//* ++++++++++++++++++++++++++++++++++++++++++++

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//   // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//   // про успіх і робимо break, щоб далі не шукати
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

//   // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"
//* ++++++++++++++++++++++++++++++++++++++++++++

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message = "Клієнт з таким ім'ям відсутній в базі даних!";

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }
//   // Якщо не збігається, то на цій ітерації нічого не робимо
// }

// console.log(message); // Клієнт з таким ім'ям є в базі даних!

//* ++++++++++++++++++++++++++++++++++++++++++++
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

//* ++++++++++++++++++++++++++++++++++++++++++++

// Push

const a = ["Mango"];
// Оскільки a - це масив, в b записується посилання на вже існуючий
// масив в пам'яті. Тепер a і b вказують на той самий масив.
const b = a;
console.log(a); // ["Mango"]
console.log(b); // ["Mango"]

// Змінимо масив, додавши ще один елемент, використовуючи вказівник з a
a.push("Poly");
console.log(a); // ["Mango", "Poly"]

// b також змінилось, тому що b, як і a,
// просто містить посилання на те ж саме місце в пам'яті
console.log(b); // ["Mango", "Poly"]

// Результат повторюється
b.push("Ajax");
console.log(a); // ["Mango", "Poly", "Ajax"]
console.log(b); // ["Mango", "Poly", "Ajax"]

//* ++++++++++++++++++++++++++++++++++++++++++++
// Метод split() 
const name = "Mango";
console.log(name.split("")); // ["M", "a", "n", "g", "o"]

const message = "JavaScript - це цікаво";
console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

//* ++++++++++++++++++++++++++++++++++++++++++++
//  Метод join()
const words = ["JavaScript", "це", "цікаво"];
console.log(words.join("")); // "JavaScriptцецікаво"
console.log(words.join(" ")); // "JavaScript це цікаво"
console.log(words.join("-")); // "JavaScript-це-цікаво"
//* ++++++++++++++++++++++++++++++++++++++++++++
// //  Метод indexOf()
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1
//* ++++++++++++++++++++++++++++++++++++++++++++
// Метод includes()
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false

//* ++++++++++++++++++++++++++++++++++++++++++++
// Перевірка багатьох умов з includes()

// // 1.
// const fruit = "apple";

// if (fruit === "apple" || fruit === "strawberry") {
//   console.log("It is a red fruit!");
// }

// // 2.
// const fruit = "apple";

// if (
//   fruit === "apple" ||
//   fruit === "strawberry" ||
//   fruit === "cherry" ||
//   fruit === "cranberries"
// ) {
//   console.log("It is a red fruit!");
// }

// 3.
// Виносимо варіанти в масив
const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "cherry";
// Перевіряємо присутність елемента
const hasFruit = redFruits.includes(fruit);

if (hasFruit) {
  console.log(`${fruit} is a red fruit!`);
}

//* ++++++++++++++++++++++++++++++++++++++++++++

// // 1.Метод push()
// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]


// 2.Метод pop()
// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []
//* ++++++++++++++++++++++++++++++++++++++++++++

const nums = [11, 30, 22, 9, 80]
const sum = nums.reduce((acc, cur) => acc + cur);


sum
// или 
console.log(sum)

//* ++++++++++++++++++++++++++++++++++++++++++++

function checkStorage(available, ordered) {

  if (ordered === 0) { 
    return "Your order is empty!"
  }
  if (ordered > available) { 
    "Your order is too large, not enough goods in stock!"
  }
  return "The order is accepted, our manager will contact you";
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));

console.log(checkStorage(200, 20));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0));

//* ++++++++++++++++++++++++++++++++++++++++++++

// Як швидко очистити масив

// const fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];
// fruits.length = 0;
// console.log(fruits);
//* ++++++++++++++++++++++++++++++++++++++++++++

// Як об'єднати більше двох масивів

// const fruits = ['apple', 'banana', 'orange'];
// const meat = ['poultry', 'beef', 'fish'];
// const vegetables = ['potato', 'tomato', 'cucumber'];
// const food = [...fruits, ...meat, ...vegetables];
// console.log(food);


//* ++++++++++++++++++++++++++++++++++++++++++++

// найти самую большую цифру:

const numbers = [51, 76, 89, 93, 29, 50, 7, 9, 62];

let smallestNumber = numbers[0];

for (const number of numbers) { 
  if (number < smallestNumber) { 
    smallestNumber = number;
  }
}
console.log(smallestNumber)

//* ++++++++++++++++++++++++++++++++++++++++++++


// function filterArray(numbers, value) {
//    // Change code below this line

// const newArray = [];

//    for (let i = 0; i < numbers.length; i += 1) {
//      if (numbers[i] > value) { 
//        newArray.push(numbers[i]);
//      }


//    }

//   return newArray


  // Change code above this line
// }

// ____________
// function filterArray(numbers, value) {
//   // Change code below this line
// const newArray = [];
//  for (let i = 0; i < numbers.length; i += 1){
//      if (numbers[i] > value) {
//        newArray.push(numbers[i]);
//      }
//    }
// return newArray;
//  // Change code above this line
// }
// ____________

// console.log(filterArray([1, 2, 3, 4, 5], 3) );
// повертає [4, 5]


//* ++++++++++++++++++++++++++++++++++++++++++++

// Записать масив в рядок, разделить запятой - через For of, или Join

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// let string1 = "";

// for (const client of clients) {
//   string1 += client + ", "
  
// }
// string1 = string1.slice(0, string1.length - 2)
// console.log(string1);

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];

// const string1 = clients.join(", ")
// console.log(string1);


//* ++++++++++++++++++++++++++++++++++++++++++++

//  How to find the common elements between two or more arrays

  function getCommonElements(array1, array2) {
  // Create an empty array to store the common elements
  let commonElements = [];

  // Iterate through each element of the first array
  for (let i = 0; i < array1.length; i++) {
    let currentElement = array1[i];

    // Check if the current element exists in the second array
    if (array2.includes(currentElement)) {
      // Add the common element to the commonElements array
      commonElements.push(currentElement);
    }
  }

  // Return the array containing the common elements
  return commonElements;
}
console.log( getCommonElements([1, 2, 3], [2, 4]) );
// повертає [2]
console.log( getCommonElements([1, 2, 3], [2, 1, 17, 19]) );
// повертає [1, 2]
console.log( getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// повертає [12, 27, 3]
//* ++++++++++++++++++++++++++++++++++++++++++++


//* ++++++++++++++++++++++++++++++++++++++++++++


//* ++++++++++++++++++++++++++++++++++++++++++++

//* ++++++++++++++++++++++++++++++++++++++++++++


