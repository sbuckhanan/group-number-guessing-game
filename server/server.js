const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
const players = require('./modules/players.js');
const historyArray = require('./modules/guesshistory.js');

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

	players.push(req.body);
	console.log(req.body);

	// send back response
	res.sendStatus(201);
	// console.log(players);
});

// app.get('/guesshistory', (req, res) => {
// 	// on the url /player-data, send the player data
// 	console.log(historyArray);
// 	res.send(historyArray);
// });

// app.post('/guesshistory', (req, res) => {
// 	// the quote is here
// 	console.log(req.body);
// 	for (let i = 0; i < historyArray.length; i++) {
// 		historyArray[i].push(req.body);
// 	}
// 	// save the response
// 	// send back response
// 	res.sendStatus(201);
// });

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
