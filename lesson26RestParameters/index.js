// rest parameters = (...rest) allow a function work with a variable
//                   number of arguments by bundling them into a array

//                   spread = expands an array into seperate elements 
//                   rest = bundles seperate elements into an array

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

// openFringe(food1,food2,food3,food4,food5);

function openFringe(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}

getFood(food1,food2,food3,food4,food5);

function sum(...numbers){
    
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

const total = sum(1,2,3,4,5,6);

console.log(`Your total is ${total}`);

function getAverage(...numbers){
    
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}
const average = getAverage(1,2,3,4,5,6);

console.log(`Your average is ${average}`);

// example with string

function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Mr.","Spongebob","Squarepants","III");
console.log(`Your full name is ${fullName}`);