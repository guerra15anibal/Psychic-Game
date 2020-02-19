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

