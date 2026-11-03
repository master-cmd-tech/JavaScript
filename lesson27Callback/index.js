// callback = a function that is passed as an argument
//            to another function.

//            used to handle asynchronous operations:
//            1. Reading file
//            2. Network request
//            3. Interacting with databases

//            "Hey, when you are done, call this text."

hello(wait);

function hello(callback){
    console.log("Hello!");
    callback();
}

function wait(){
    console.log("Wait!");
}

function leave(){
    console.log("Leave!");
}

function goodbye(){
    console.log("Goodbye!");
}

function sum(callback, x , y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(`Result: ${result}`);
}

sum(DisplayPage, 10, 20);

function DisplayPage(result){
    document.getElementById("myH1").textContent = result;
}
