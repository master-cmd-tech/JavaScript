// .reduce() = reduce the elements of an array
//             to a single value

// example 2

const price = [5,30,10,25,15,20];

const total = price.reduce(sum);

console.log(total);

function sum(previous, next) {
    return previous + next;
}

// example 2

const grades = [75,50,90,80,65,95];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator,element){
    return Math.max(accumulator,element);
}
function getMin(accumulator,element){
    return Math.min(accumulator,element);
}