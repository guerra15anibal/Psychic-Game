//Variables//
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","z"]
var wins = 0;
var losses = 0;
var chances = 10;
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

//Winning//
if(userGuess === randoLetters){
    wins++
    chances = 10;
    usedLetters =[];
}
//Winning//

//Using 1 chance every letter pressed//
Rando();
if (userGuess !== randoLetters){
    chances--;
}
//Using 1 chance every letter pressed//

//Losing//
if(chances ==0){
    losses++
    usedLetters= []
    chances = 10;
}
//Losing//

//Assighs variables to IDs//
if (usedLetters.indexOf(userGuess) >= 0) {

} else {
      usedLetters.push(userGuess);
      document.getElementById("Letters Guessed").innerHTML = usedLetters;
      console.log(usedLetters);
}

document.getElementById("Wins").innerHTML = wins;
document.getElementById("Losses").innerHTML = losses;
document.getElementById("Guesses Remaining").innerHTML = chances;
//Assighs variables to IDs//





}