let verbs, nouns = [];
let uWin, uLose, draw;

// message pools
verbs = [
	'obliterated',
	'annihilated',
	"f'd up",
	'destroyed',
	'killed'
	'straight up murdered',
	'incinerated'
]

nouns = [
	'weenies',
	'losers',
	'jokers',
	'dweebs',
	'morons'
]

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

	verbs = shuffle(verbs);
	nouns = shuffle(nouns);

	for (i=0; i != 84; i++) {
		aiPool.push('rock','paper','scissors');
	}

	var aiPool = shuffle(aiPool);

	// hehe Project M memes
	aiSel = aiPool[47];

	uWin = 'Your ' + playerSel + ' ' + verbs[0] + " the opponent's " + aiSel + '.'
	uLose = 'Your ' + playerSel + ' was ' + verbs[0] + " by the opponent's " + aiSel + '.'
	draw = 'You ' + nouns[0] + ' ended it in a tie. -_-'

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
