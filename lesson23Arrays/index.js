// array = a variable like structure that hold
//         more that 1 value

let fruits = ["apple", "orange", "banana"];

fruits[3] = "coconut";
fruits.push("pineapple");
fruits.push("no");
fruits.pop();
fruits.unshift("mango"); // add element to position 0
fruits.shift();          // delete element at position 0

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);
console.log(fruits[5]);
console.log(fruits[6]);

let numOfFruits = fruits.length;
console.log(numOfFruits);

let index= fruits.indexOf("apple"); 
console.log(index);

let index1= fruits.indexOf("mango"); 
console.log(index1);

for(let i = fruits.length - 1; i >= 0 ; i--) {
    console.log(fruits[i]);
}
console.log("Sort method");
// fruits.sort(); // by alphabet
fruits.sort().reverse();

for(let fruit of fruits) {
    console.log(fruit);
}
