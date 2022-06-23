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

	$.ajax({
		type: 'POST',
		url: '/player-data',
		data: { name: playerOneName, currentGuess: playerOneGuess },
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
