const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
const players = require('./modules/players.js');

let dataHolder;
let randomNumber;

let playerOneHistory = [];
let playerTwoHistory = [];
let playerThreeHistory = [];
let playerFourHistory = [];
let playerFiveHistory = [];
getRandomNumber();

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({ extended: true }));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here

app.get('/player-data', (req, res) => {
	// on the url /player-data, send the player data
	// console.log(players);
	res.send(players);
});

app.post('/player-data', (req, res) => {
	// the quote is here
	dataHolder = req.body;
	// save the response
	if (players.length > 0) {
		//? Update player One
		players[0].playerOne.guess = dataHolder.playerOne.guess;
		playerOneHistory.push(dataHolder.playerOne.guess);
		//? Update player Two
		players[0].playerTwo.guess = dataHolder.playerTwo.guess;
		playerTwoHistory.push(dataHolder.playerTwo.guess);
		//? Update player Three
		players[0].playerThree.guess = dataHolder.playerThree.guess;
		playerThreeHistory.push(dataHolder.playerThree.guess);
		//? Update player Four
		players[0].playerFour.guess = dataHolder.playerFour.guess;
		playerFourHistory.push(dataHolder.playerFour.guess);
		//? Update player Five
		players[0].playerFive.guess = dataHolder.playerFive.guess;
		playerFiveHistory.push(dataHolder.playerFive.guess);
	} else {
		//? establish player One
		playerOneHistory.push(dataHolder.playerOne.guess);
		dataHolder.playerOne.history = playerOneHistory;
		//? establish player Two
		playerTwoHistory.push(dataHolder.playerTwo.guess);
		dataHolder.playerTwo.history = playerTwoHistory;
		//? establish player Three
		playerThreeHistory.push(dataHolder.playerThree.guess);
		dataHolder.playerThree.history = playerThreeHistory;
		//? establish player Four
		playerFourHistory.push(dataHolder.playerFour.guess);
		dataHolder.playerFour.history = playerFourHistory;
		//? establish player Five
		playerFiveHistory.push(dataHolder.playerFive.guess);
		dataHolder.playerFive.history = playerFiveHistory;
		players.push(dataHolder);
	}
	//? player one guess check to random number
	if (Number(dataHolder.playerOne.guess) > randomNumber) {
		players[0].playerOne.message = 'You were high!';
	} else if (Number(dataHolder.playerOne.guess) < randomNumber) {
		players[0].playerOne.message = 'You were Low!';
	}
	//? player Two guess check to random number
	if (Number(dataHolder.playerTwo.guess) > randomNumber) {
		players[0].playerTwo.message = 'You were high!';
	} else if (Number(dataHolder.playerTwo.guess) < randomNumber) {
		players[0].playerTwo.message = 'You were Low!';
	}
	//? player Three guess check to random number
	if (Number(dataHolder.playerThree.guess) > randomNumber) {
		players[0].playerThree.message = 'You were high!';
	} else if (Number(dataHolder.playerThree.guess) < randomNumber) {
		players[0].playerThree.message = 'You were Low!';
	}
	//? player Four guess check to random number
	if (Number(dataHolder.playerFour.guess) > randomNumber) {
		players[0].playerFour.message = 'You were high!';
	} else if (Number(dataHolder.playerFour.guess) < randomNumber) {
		players[0].playerFour.message = 'You were Low!';
	}
	//? player five guess check to random number
	if (Number(dataHolder.playerFive.guess) > randomNumber) {
		players[0].playerFive.message = 'You were high!';
	} else if (Number(dataHolder.playerFive.guess) < randomNumber) {
		players[0].playerFive.message = 'You were Low!';
	}

	//? player one guess check to random number
	if (Number(dataHolder.playerOne.guess) === randomNumber) {
		players[0].playerOne.message = 'YOU WIN!';
		getRandomNumber();
	} else if (Number(dataHolder.playerTwo.guess) === randomNumber) {
		players[0].playerTwo.message = 'YOU WIN!';
		getRandomNumber();
	} else if (Number(dataHolder.playerTwo.guess) === randomNumber) {
		players[0].playerTwo.message = 'YOU WIN!';
		getRandomNumber();
	} else if (Number(dataHolder.playerFour.guess) === randomNumber) {
		players[0].playerFour.message = 'YOU WIN!';
		getRandomNumber();
	} else if (Number(dataHolder.playerFive.guess) === randomNumber) {
		players[0].playerFive.message = 'YOU WIN!';
		getRandomNumber();
	}
	console.log(players);
	console.log(randomNumber);
	// send back response
	res.sendStatus(201);
});

function getRandomNumber() {
	randomNumber = Math.round(Math.random() * (25 - 1) + 1);
	return randomNumber;
}

// generate random number function
// if conditional to check each guess to the random number
// store previous guess
// store each player as an array with an object
// get data from client

app.listen(PORT, function () {
	console.log('SERVER RUNNING ON PORT', PORT);
});
