const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
const players = require('./modules/players.js');

let playerOneHistory = [];
let dataHere;

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
	// console.log(req.body);

	// save the response
	// for (let i = 0; i < req.body.length; )
	players.push(req.body);
	// console.log(req.body);
	dataHere = req.body;
	console.log(dataHere);
	// pushHistory();
	// send back response
	res.sendStatus(201);
	// console.log(players);
});

function pushHistory() {
	playerOneHistory.push(dataHere[0].currentGuess);
	players[0]['playerHistory'] = playerOneHistory;
	// console.log(players);
}

function getRandomNumber() {
	return Math.round(Math.random() * (25 - 1) + 1);
}

console.log(getRandomNumber());

// generate random number function
// if conditional to check each guess to the random number
// store previous guess
// store each player as an array with an object
// get data from client

app.listen(PORT, function () {
	console.log('SERVER RUNNING ON PORT', PORT);
});
