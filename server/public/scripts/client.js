$(handleReady);

function handleReady() {
	console.log('jquery is loaded!');

	$('.submitBtn').on('click', handleSubmitBtn);
	getPlayerData();
}

let playersArray = [];

function handleSubmitBtn() {
	playersArray = [];
	// console.log('in handleSubmitBtn');
	let playerOneName = $('#playerOneName').val();
	let playerOneGuess = $('#playerOneGuess').val();

	let playerOneObj = {
		name: playerOneName,
		currentGuess: playerOneGuess,
	};

	playersArray.push(playerOneObj);

	playerTwo();

	// $.ajax({
	// 	type: 'POST',
	// 	url: '/player-data',
	// 	data: { name: playerOneName, currentGuess: playerOneGuess, playerHistory: 0 },
	// })
	// 	.then((response) => {
	// 		console.log(response);
	// 		playerTwo();
	// 	})
	// 	.catch((error) => {
	// 		console.log(error);
	// 	});
}

function playerTwo() {
	let playerTwoName = $('#playerTwoName').val();
	let playerTwoGuess = $('#playerTwoGuess').val();

	let playerTwoObj = {
		name: playerTwoName,
		currentGuess: playerTwoGuess,
	};
	playersArray.push(playerTwoObj);
	playerThree();

	// $.ajax({
	// 	type: 'POST',
	// 	url: '/player-data',
	// 	data: { name: playerTwoName, currentGuess: playerTwoGuess },
	// })
	// 	.then((response) => {
	// 		console.log(response);
	// 	})
	// 	.catch((error) => {
	// 		console.log(error);
	// 	});
}

function playerThree() {
	let playerThreeName = $('#playerThreeName').val();
	let playerThreeGuess = $('#playerThreeGuess').val();

	let playerThreeObj = {
		name: playerThreeName,
		currentGuess: playerThreeGuess,
	};
	playersArray.push(playerThreeObj);
	playerFour();

	// $.ajax({
	// 	type: 'POST',
	// 	url: '/player-data',
	// 	data: { name: playerThreeName, currentGuess: playerThreeGuess },
	// })
	// 	.then((response) => {
	// 		console.log(response);
	// 	})
	// 	.catch((error) => {
	// 		console.log(error);
	// 	});
}

function playerFour() {
	let playerFourName = $('#playerFourName').val();
	let playerFourGuess = $('#playerFourGuess').val();

	let playerFourObj = {
		name: playerFourName,
		currentGuess: playerFourGuess,
	};
	playersArray.push(playerFourObj);
	playerFive();

	// $.ajax({
	// 	type: 'POST',
	// 	url: '/player-data',
	// 	data: { name: playerFourName, currentGuess: playerFourGuess },
	// })
	// 	.then((response) => {
	// 		console.log(response);
	// 	})
	// 	.catch((error) => {
	// 		console.log(error);
	// 	});
}

function playerFive() {
	let playerFiveName = $('#playerFiveName').val();
	let playerFiveGuess = $('#playerFiveGuess').val();

	let playerFiveObj = {
		name: playerFiveName,
		currentGuess: playerFiveGuess,
	};
	playersArray.push(playerFiveObj);

	$.ajax({
		type: 'POST',
		url: '/player-data',
		data: playersArray,
	})
		.then((response) => {
			console.log(response);
			getPlayerData();
		})
		.catch((error) => {
			console.log(error);
		});
}

function getPlayerData() {
	console.log('IN GETPLAYERDATA');
	$.ajax({
		type: 'GET',
		url: '/player-data',
	})
		.then((response) => {
			renderToDom(response);
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		});
}

function renderToDom(arrayOfPlayers) {
	console.log('RENDERING TO DOM');
	$('#playerHistory').empty();
	for (let player of arrayOfPlayers) {
		$('#playerHistory').append(`
		<tr>
			<td>${player.name}</td>
			<td>${player.currentGuess}</td>
			<td>${player.guessHistory}</td>
		</tr>
		`);
	}
}
