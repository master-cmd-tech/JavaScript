// string methods = allow you to manipulate and work with text(strings)


let userName = "Master Piece";
console.log(userName.charAt(0));             // show character of string
console.log(userName.indexOf("e"));          // show index of character/string
console.log(userName.lastIndexOf("a"));      // show last index 
console.log(userName.length); 
console.log(userName.trim());                // delete all space before and after string
console.log(userName.toUpperCase()); 
console.log(userName.toLowerCase()); 
console.log(userName.repeat(3)); 

let result1 = userName.startsWith(" ");      // false
let result2 = userName.endsWith(" ");        // false
let result3 = userName.includes(" ");
console.log(result1, result2, result3);

let phoneNumber = "123-456-7890";
let phoneNumber1 = phoneNumber.replaceAll("-","");
let phoneNumber2 = phoneNumber.padStart(15,"0");
let phoneNumber3 = phoneNumber.padEnd(15,"0");
console.log(phoneNumber1, phoneNumber2, phoneNumber3);



