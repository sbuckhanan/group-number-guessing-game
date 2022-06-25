$(handleReady);

function handleReady() {
	console.log('jquery is loaded!');

	$('.submitBtn').on('click', handleSubmitBtn);
	getPlayerData();
}

function handleSubmitBtn() {
	// console.log('in handleSubmitBtn');
	let playerOneName = $('#playerOneName').val();
	let playerOneGuess = $('#playerOneGuess').val();
	let playerTwoName = $('#playerTwoName').val();
	let playerTwoGuess = $('#playerTwoGuess').val();
	let playerThreeName = $('#playerThreeName').val();
	let playerThreeGuess = $('#playerThreeGuess').val();
	let playerFourName = $('#playerFourName').val();
	let playerFourGuess = $('#playerFourGuess').val();
	let playerFiveName = $('#playerFiveName').val();
	let playerFiveGuess = $('#playerFiveGuess').val();

	let gamePlayers = {
		playerOne: {
			name: playerOneName,
			guess: playerOneGuess,
		},
		playerTwo: {
			name: playerTwoName,
			guess: playerTwoGuess,
		},
		playerThree: {
			name: playerThreeName,
			guess: playerThreeGuess,
		},
		playerFour: {
			name: playerFourName,
			guess: playerFourGuess,
		},
		playerFive: {
			name: playerFiveName,
			guess: playerFiveGuess,
		},
	};

	$.ajax({
		type: 'POST',
		url: '/player-data',
		data: gamePlayers,
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

function renderToDom(arr) {
	console.log('RENDERING TO DOM');
	$('#playerHistory').empty();
	$('#playerHistory').append(`
		<tr>
			<td>${arr[0].playerOne.name}</td>
			<td>${arr[0].playerOne.guess}</td>
			<td>${arr[0].playerOne.history}</td>
			<td>${arr[0].playerOne.message}</td>
		</tr>
		<tr>
			<td>${arr[0].playerTwo.name}</td>
			<td>${arr[0].playerTwo.guess}</td>
			<td>${arr[0].playerTwo.history}</td>
			<td>${arr[0].playerTwo.message}</td>
		</tr>
		<tr>
			<td>${arr[0].playerThree.name}</td>
			<td>${arr[0].playerThree.guess}</td>
			<td>${arr[0].playerThree.history}</td>
			<td>${arr[0].playerThree.message}</td>
		</tr>
		<tr>
			<td>${arr[0].playerFour.name}</td>
			<td>${arr[0].playerFour.guess}</td>
			<td>${arr[0].playerFour.history}</td>
			<td>${arr[0].playerFour.message}</td>
		</tr>
		<tr>
			<td>${arr[0].playerFive.name}</td>
			<td>${arr[0].playerFive.guess}</td>
			<td>${arr[0].playerFive.history}</td>
			<td>${arr[0].playerFive.message}</td>
		</tr>
		`);
}
