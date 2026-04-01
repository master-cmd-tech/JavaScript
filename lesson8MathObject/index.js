// Math = built-in object that provides a 
//        collection of properties and methods

console.log(Math.PI);
console.log(Math.E);

let x = 3.99;
let y = 2;
let z1;
let z2;
let z3 = 3.21;
let z4 = 3.21;

z1= Math.round(x);
z2= Math.floor(x);
z3= Math.ceil(z3);
z4= Math.trunc(z4);

console.log(z1);
console.log(z2);
console.log(z3);
console.log(z4);


let a1;
let a2;
let a3;

a1= Math.pow(x, y);
a2= Math.sqrt(y);
a3= Math.log(x);

console.log(a1);
console.log(a2);
console.log(a3);

let b1 = 45;
let b2, b3;

b1= Math.sin(b1);
b2= Math.cos(b1);
b3= Math.tan(b1);

console.log(b1);
console.log(b2);
console.log(b3);

let c1 = -3.21;
let c2 = -3.21;

c1 = Math.abs(c1);
c2 = Math.sign(c2);

console.log(c1);
console.log(c2);

let g = 1, h = 2, j = 3;
let max = Math.max(g,h,j);
let min = Math.min(g,h,j);

console.log(max);
console.log(min);