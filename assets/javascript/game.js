//Variables//
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "z"]
var wins = 0;
var losses = 0;
var chances = 10;
var usedLetters = [];
var randomLetters = randomLetters;

//Choosing rando letter//
randomLetters = letters[Math.floor(Math.random() * letters.length)];
console.log(randomLetters)

//Making rando letter a function//
function Rando() {
    randomLetters = letters[Math.floor(Math.random() * letters.length)];
    console.log(randomLetters)
}

//.On elements//
document.onkeyup = function (press) {
    var userGuess = event.key

    //Winning//
    if (userGuess === randomLetters) {
        wins++
        chances = 10;
        usedLetters = [];
    }

    //Using 1 chance every letter pressed//
    Rando();
    if (userGuess !== randomLetters) {
        chances--;
    }

    //Losing//
    if (chances == 0) {
        losses++
        usedLetters = []
        chances = 10;
    }

    //Assigns variables to IDs//
    if (usedLetters.indexOf(userGuess) >= 0) {

    } else {
        usedLetters.push(userGuess);
        document.getElementById("lettersGuessed").innerHTML = usedLetters;
        console.log(usedLetters);
    }

    document.getElementById("Wins").innerHTML = wins;
    document.getElementById("Losses").innerHTML = losses;
    document.getElementById("guessesRemaining").innerHTML = chances;





}