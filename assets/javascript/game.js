

var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;

var guessesSoFar = [];

var geussesMade = null;

var cpuletter = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];



document.onkeyup = function(event) {


	var geussesMade = String.fromCharCode(event.keyCode).toLowerCase();

	
	if (guessesSoFar.indexOf(geussesMade) < 0 && alphabetLetters.indexOf(geussesMade) >= 0) {
		guessesSoFar[guessesSoFar.length]=geussesMade;
	
		guessesLeft--;
	}

	
	if (cpuletter == geussesMade) {
		wins++;
		alert("You Won!")
		guessesLeft = 10;
		guessesSoFar = [];
        cpuletter = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
    }
		


	if (guessesLeft == 0) {
		losses++;
		alert("Sorry,you lost..");
		guessesLeft = 10;
		guessesSoFar = [];
        cpuletter = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
    }
		

	
	var html = "<p><h1>The Psychic-Game</h1></p>" + "<p><h4>Guess what letter I'm thinking of</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";
	
	document.querySelector("#gamelayout").innerHTML = html;


    // Unable to add any boot strap components to the html file; when the page is first rendered, the bootstrap components are visible on the page, however when the first letter is pressed, the components dissapear.
}

