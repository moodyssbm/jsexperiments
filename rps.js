let verbs, nouns = [];
let uWin, uLose, draw;

// message pools

function shuffle(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array [j];
			array[j] = temp;
	}
	return array;
}

function rps(form, playerSel) {
	var aiPool = [];

	for (i=0; i != 84; i++) {
		aiPool.push('rock','paper','scissors');
	}

	var aiPool = shuffle(aiPool);

	// hehe Project M memes
	aiSel = aiPool[47];

	if (playerSel == 'rock') {
		if (aiSel == 'rock') {
			alert(draw);
		}
		if (aiSel == 'paper') {
			alert(uLose);
		}
		if (aiSel == 'scissors') {
			alert(uWin);
		}
	}

	if (playerSel == 'paper') {
		if (aiSel == 'rock') {
			alert(uWin);
		}
		if (aiSel == 'paper') {
			alert(draw);
		}
		if (aiSel == 'scissors') {
			alert(uLose);
		}
	}

	if (playerSel == 'scissors') {
		if (aiSel == 'rock') {
			alert(uLose);
		}
		if (aiSel == 'paper') {
			alert(uWin);
		}
		if (aiSel == 'scissors') {
			alert(draw);
		}
	}	
}