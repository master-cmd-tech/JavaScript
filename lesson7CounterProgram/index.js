// COUNTER PROGRAM

const decreaseB = document.getElementById("decreaseB");
const resetB = document.getElementById("resetB");
const increaseB = document.getElementById("increaseB");
const counterLabel = document.getElementById("counterLabel");
let count = 0;

increaseB.onclick = function(){
    count++;
    counterLabel.textContent = count;
}
decreaseB.onclick = function(){
    count--;
    counterLabel.textContent = count;
}
resetB.onclick = function(){
    count = 0;
    counterLabel.textContent = count;
}
