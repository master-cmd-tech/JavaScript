// .filter() = creates a new array by filtering
//             our elements 

// Example 1
let numbers = [1,2,3,4,5,6,7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums);
console.log(oddNums);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}
// Example 2
const age = [16,17,18,18,19,20,60];
const Adult = age.filter(isAdult);

console.log(Adult);

function isAdult(element){
    return element >= 18;
}

// Example 3
const words = ["apple","orange","banana","kiwi",
              "pomegranate","coconut"];

const shortWords = words.filter(getShortWord);
const longWords = words.filter(getLongWord);

console.log(shortWords);
console.log(longWords);

function getShortWord(element){
    return element.length <= 6;
}
function getLongWord(element){
    return element.length > 6;
}