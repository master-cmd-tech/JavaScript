// .map() = accepts a callback and applies that function 
//          to each element of an array, then return a new array

// EXAMPLE 1
const numbers = [1,2,3,4,5];

const squares = numbers.map(square);
const cubes = numbers.map(cube);

function square(element) {
    return Math.pow(element,2);
}

function cube(element) {
    return Math.pow(element,3);
}

console.log(cubes);

// EXAMPLE 2

const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];

const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

function upperCase(element) {
    return element.toUpperCase();
}
function lowerCase(element) {
    return element.toLowerCase();
}

console.log(studentsLower);

// EXAMPLE 3

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates)

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}