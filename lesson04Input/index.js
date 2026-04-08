// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

//  let username;
//  username = window.prompt("What is your name?");
//  console.log(username);

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myH1").textContent = `Hello ${username}`;
}