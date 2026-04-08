// IF STATEMENTS = if a condition is true, execute some code 
//                 if not, do something else
    
let age1 = 25;
if(age1 >= 18){
    console.log("You are old enough to enter to this site");
} else {
        console.log("You must be 18+ to enter this site");
}

let time = 9;
if(time < 12){
    console.log("Good mornning!");
} else {
    console.log("Good afternoon!")
}

let isStudent = false;
if (isStudent) {
    console.log("Yes, isStundent true");
} else {
    console.log("No, isStudent false");
}

let age2 = 25;
let hasLicense = true;

if(age2 >= 16) {
    console.log("You are old enough to get license");

    if(hasLicense) {
        console.log("You have your license");
    } else {
        console.log("You do not have your license");
    }
} else {
    console.log("You must be 16+ to have a license");
}

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElemente = document.getElementById("resultElement");
let age;
mySubmit.onclick = function() {

    age = myText.value;
    age = Number(age);

    if(age >= 100)  {
        resultElemente.textContent = `You are TOO old to enter this site`;
    } else if(age >= 18) {
        resultElemente.textContent = `You are old enough to enter to this site`;
    } else if(age == 0) {
        resultElemente.textContent = `You can't enter. You were just born`;
    } else if(age <  0) {
        resultElemente.textContent = `You age can not be below 0`;
    } else  {
        resultElemente.textContent = `You must be 18+ to enter this site`;
    }
}