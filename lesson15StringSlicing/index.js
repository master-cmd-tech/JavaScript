//  string slicing = creating a substring 
//                   from a portion of another string

//                   string.slice(start, end)

let fullName = "Master Piece";

// let firstName = fullName.slice(0,6);
// let lastName = fullName.slice(7,12);

// let firstChar = fullName.slice(0,1);
// let lastChar = fullName.slice(-1);

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);

const email = "master123@gmail.com";
let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@"));
console.log(userName);
console.log(extension);