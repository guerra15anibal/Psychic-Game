//Variables//
var letters = ["abcdefghijklmnopqrstuvwz"]
var wins = 0;
var losses = 0;
var chances = 9;
var usedLetters = [];
var randoLetters = randoLetters;
//Variables//

//Choosing rando letter//
randoLetters = letters[Math.floor(Math.random() * letters.length)];
console.log(randoLetters)
//Choosing rando letter//

//Making rando letter a function//
function Rando() {
    randoLetters = letters[Math.floor(Math.random() * letters.length)];
    console.log(randoLetters)
}
//Making rando letter a function//

//.On elements//
document.onkeyup = function (press) {
    var userGuess = event.key
//.On elements//

//Winning if//
if(userGuess === randoLetters){
    wins++
    chances = 9;
    usedLetters =[];
}
//Winning if//

//Using 1 chance every letter pressed//
Rando();
if (userGuess !== randoLetters){
    chances--;
}
//Using 1 chance every letter pressed//




}