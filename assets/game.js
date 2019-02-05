



var correct= 0;
var incorrect= 0;
var guesses= 0;
var attempt= 0;

var numGuesses= 7;
var guessChoices= [];
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(computerGuess);

document.onkeyup = function(event) {

var userGuess = event.key;




if (computerChoices.indexOf(userGuess) > -1) {

   if (userGuess === computerGuess) {
       wins++;
       numGuesses = 7;
       guessChoices = [];
   }

   if (userGuess != computerGuess) {
       numGuesses--;
       guessChoices.push(userGuess);
   }

   if (numGuesses === 0) {

   numGuesses = 9;
   losses ++;
   guessChoices = [];

   
}

}


}