$(handleReady);

function handleReady() {
	console.log('jquery is loaded!');

	$('.submitBtn').on('click', handleSubmitBtn);
	// getPlayerData();
}

function handleSubmitBtn() {
	// console.log('in handleSubmitBtn');
	let playerOneName = $('#playerOneName').val();
	let playerOneGuess = $('#playerOneGuess').val();

	$.ajax({
		type: 'POST',
		url: '/player-data',
		data: { name: playerOneName, currentGuess: playerOneGuess },
	})
		.then((response) => {
			console.log(response);
			playerTwo();
		})
		.catch((error) => {
			console.log(error);
		});
}

function playerTwo() {
	let playerTwoName = $('#playerTwoName').val();
	let playerTwoGuess = $('#playerTwoGuess').val();
	$.ajax({
		type: 'POST',
		url: '/player-data',
		data: { name: playerTwoName, currentGuess: playerTwoGuess },
	})
		.then((response) => {
			console.log(response);
			playerThree();
		})
		.catch((error) => {
			console.log(error);
		});
}

function playerThree() {
	let playerThreeName = $('#playerThreeName').val();
	let playerThreeGuess = $('#playerThreeGuess').val();
	$.ajax({
		type: 'POST',
		url: '/player-data',
		data: { name: playerThreeName, currentGuess: playerThreeGuess },
	})
		.then((response) => {
			console.log(response);
			playerFour();
		})
		.catch((error) => {
			console.log(error);
		});
}

function playerFour() {
	let playerFourName = $('#playerFourName').val();
	let playerFourGuess = $('#playerFourGuess').val();
	$.ajax({
		type: 'POST',
		url: '/player-data',
		data: { name: playerFourName, currentGuess: playerFourGuess },
	})
		.then((response) => {
			console.log(response);
			playerFive();
		})
		.catch((error) => {
			console.log(error);
		});
}

function playerFive() {
	let playerFiveName = $('#playerFiveName').val();
	let playerFiveGuess = $('#playerFiveGuess').val();
	$.ajax({
		type: 'POST',
		url: '/player-data',
		data: { name: playerFiveName, currentGuess: playerFiveGuess },
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
