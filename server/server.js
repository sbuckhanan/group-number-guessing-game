const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
const players = require('./modules/players.js');

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({ extended: true }));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here

app.get('/player-data', (req, res) => {
	// on the url /player-data, send the player data
	console.log(players);
	res.send(players);
});

app.post('/player-data', (req, res) => {
	// the quote
	console.log(req.body);

	// send back response
	res.sendStatus(201);
});

// generate random number function
// if conditional to check each guess to the random number
// store previous guess
// store each player as an array with an object
// get data from client

app.listen(PORT, function () {
	console.log('SERVER RUNNING ON PORT', PORT);
});
