// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
const asnwer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attemps = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number betweeen ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    } else if(guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid number");
    } else {
        attemps++;
        if(guess < asnwer){
            window.alert("Too low! Try again!");
        } else if(guess > asnwer){
            window.alert("Too high! Try again!");
        } else{
            window.alert(`Correct! The answer was ${asnwer}. It took you ${attemps} attemps`);
            running = false;
        }
    }
}