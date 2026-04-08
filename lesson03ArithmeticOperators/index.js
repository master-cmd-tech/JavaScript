// arithmetic operators = operands (values, varible, etc)
//                        operators (+ - * /)
//                        ex. 11 = x + 5;

let students = 30;

students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;
students = students ** 2;
students = Math.sqrt(students);
let remains = students % 2;

students += 1;
students -= 1;
students *= 2;
students /= 2;
students **= 2;
students = Math.sqrt(students);
remains %= 2;

students++;
students--;

console.log(students);

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtracation 
*/

let result = 1 + 2 * 3 + 4 ** 2;

console.log(result);