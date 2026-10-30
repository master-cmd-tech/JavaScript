// function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call function to execute that code.

function HappyBirthday(username, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy birthday to you!");
    console.log(`You are ${age} years old!`);
}
HappyBirthday("Tom", 18);

function add(x, y){
    return x + y ;
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    return x*y;
}
function divide(x, y){
    return x/y;
}

let answer = add(2,3);
console.log(answer);

console.log(divide(2,3));

function isEven(number){
    // if(number % 2 === 0){
    //     return true;
    // } else {
    //     return false;
    // }
    return number % 2 === 0 ? true : false;
}
console.log(isEven(567));


function isValidEmail(email){
    // if(email.includes('@')){
    //     return true;
    // } else {
    //     return false;
    // }
    return email.includes('@') ? true : false;
}
console.log(isValidEmail("Mas@fake.com"));
