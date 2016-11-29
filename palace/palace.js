//constants
let thinking = '<h1>The AI is thinking...</h1>';

// variables
var info = '';
var pVal = 0;
var deck = [];
var play = [];
var pHand = [];
var pPile = [];
var aiHand = [];
var aiPile = [];
var current = '';
var playValue = 0;

function init() {
	info = '';
	deck = [];
	play = [];
	pHand = [];
	pPile = [];
	aiHand = [];
	aiPile = [];
	playValue = 0;

	for(x=0; x<4; x++) {
		for(i=2; i<15; i++) {
			deck.push(i);
		}

		deck = shuffle(deck);
	}

	for(x=0; x<3; x++) {
		pPile.push(deck[0]);
		deck.splice(0,1);
		aiPile.push(deck[0]);
		deck.splice(0,1);
	}

	for(x=0; x<6; x++) {
		pHand.push(deck[0]);
		deck.splice(0,1);
		aiHand.push(deck[0]);
		deck.splice(0,1);
	}

	while(deck[0] == 2 || deck[0] == 10) {
		deck = shuffle(deck);
	}

	play.push(deck[0]);
	deck.splice(0,1);

	pHand = sorted(pHand);

	info = document.getElementById('palace');
	info.innerHTML = 'It is your turn to set up.';

	pSetup();
	
}

function pSetup() {
	info.innerHTML = '<h1>It is your turn to set up.</h1><br>';

	for(i=0; i<pHand.length; i++) {
		info.innerHTML += '<input type="button" value="' + pHand[i] + '" onClick="pSetupStep(' + pHand[i] + ')"> '
	}

	if(pHand.length == 3) {
		aiSetup();
	}
}

function pSetupStep(card) {
	pPile.push(card);
	for(i=0; i<pHand.length; i++) {
		if(pHand[i] == card) {
			pHand.splice(i,1);
			break;
		}
	}

	pSetup();
}

function aiSetup() {
	info.innerHTML = thinking;

	aiHand = sorted(aiHand);

	while(aiHand.length > 3) {
		aiPile.push(aiHand[aiHand.length-1]);
		aiHand.splice(aiHand.length-1, 1);
	}

	playValue = play[play.length-1]
	pTurn();
}

function pTurn() {
	info.innerHTML = '<h1>Your turn!</h1>'
	info.innerHTML += '<h2>The current pile value is: <b>' + playValue + '</b><br>'

	pHand = sorted(pHand);

	for(i=0; i<pHand.length; i++) {
		info.innerHTML += '<input type="button" value="' + pHand[i] + '" onClick="pTurnStep(' + pHand[i] + ')"> ' 
	}
}

function pTurnStep(card) {
	if(card == 10){
		playValue = 0;
		play.push(card);
		for(i=0; i<pHand.length; i++) {
			if(pHand[i] = card) {
				pHand.splice(i,1);
				break;
			}
		}
		pCheck(true);
	} else if(card == 2) {
		for(i=0; i<pHand.length; i++) {
			if(pHand[i] == card) {
				pHand.splice(i,1);
				break;
			}
		}
		play.splice(0,play.length);
		playValue = 0;
		pCheck(true);
	} else if(play.length == 0) {
		play.push(card);
		for(i=0; i<pHand.length; i++) {
			if(pHand[i] = card) {
				pHand.splice(i,1);
				break;
			}
		}
		pCheck(false);
	} else {
		playValue = play[play.length-1];
		if(card >= playValue) {
			play.push(card);
			for(i=0; i<pHand.length; i++) {
				if(pHand[i] = card) {
					pHand.splice(i,1);
					break;
				}
			}
			pCheck(false);
		} else {
			for(i=0; i<play.length; i++) {
				pHand.push(play[i]);
			}
			play.splice(0,play.length);
			aiTurn();
		}
	}
}

function pTurnSpecial(card) {
	info.innerHTML = '<h1>You can play an additional card if you would like.</h1><br>';

	for(i=0; i<pHand.length; i++) {
		if(pHand[i] == play[play.length-1]) {
			info.innerHTML += '<input type="button" value="' + pHand[i] + '" onClick="pTurnStep(' + pHand[i] + ')"> ' 
		}
	}

	info.innerHTML += '<p><input type="button" value="Pass" onClick="aiTurn()"></p>';
}

function pCheck(goAgain) {

	while(pHand.length < 3 && deck.length != 0) {
		pHand.push(deck[0]);
		deck.splice(0,1);
	}

	if(deck.length == 0 && pHand.length == 0) {
		pHand.push(pPile[pPile.length-1]);
		pPile.splice(pPile.length-1, 1);
	}

	if(goAgain) {
		pTurn();
	}

	if(play.length > 0) {
		for(i=0; i<pHand.length; i++) {
			if(pHand[i] == play[play.length-1]) {
				pTurnSpecial(pHand[i]);
			}
		}
	}
}

function aiTurn() {
	console.log('ai turn!');
}

function shuffle(array) {
	for(i=array.length-1; i>0; i--) {
		var j = Math.floor(Math.random()*(i+1))
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	return array;
}

function sorted(array) {
	array.sort(function(a,b){return a-b});
	return array;
}

function sortedInReverse(array) {
	array.sort(function(a,b){return a-b});
	var tmp = [];

	for(i=0; i<array.length; i++){
		tmp.push(array[array.length-1]);
		array.splice(array.length-1, 1);
	}

	return tmp;

}