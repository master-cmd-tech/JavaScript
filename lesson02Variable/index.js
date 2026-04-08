// variable = A container that store a values.
//            Behaves as if it were the value it contains.

// 1. declaration  let x;
// 2. assignment   x = 100;

let y = 100;
// OR
let x;
x = 100;

let age = 25;
let price = 10.99;
let gpa = 3.1;

console.log(typeof age);
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`You gpa is ${gpa}`);

let firstName = "Bro";
let favoriteFood = "pizza";
let email = "Bro123@gmail.com";

console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`Your favorite food is ${favoriteFood}`);
console.log(`Your gmail is ${email}`);

let online = false;
let forSale = true;
let isStudent = true;

console.log(typeof online);
console.log(`Bro is online: ${online}`);
console.log(`Is this home for sale: ${forSale}`);
console.log(`Enrolled: ${isStudent}`);

//

let fullName = "Bro Code";
let myAge = 19;
let student = true;

document.getElementById("p1").textContent = `Your full name is ${fullName}`;
document.getElementById("p2").textContent = `Your age is ${myAge}`;
document.getElementById("p3").textContent = `Enrolled: ${student}`;