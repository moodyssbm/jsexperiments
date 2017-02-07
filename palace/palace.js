// constants
let thinking = 'The AI is thinking...';
let message = document.getElementById('message');
let value = document.getElementById('value');
let cards = document.getElementById('palace');

// variables
var deck, play, pPile, pHand, aiPile, aiHand;

function init() {
	// initialize all variables back to 0
	deck = [];
	play = [];
	pPile = [];
	pHand = [];
	aiPile = [];
	aiHand = [];

	// create deck
	for(x=0; x<4; x++) {
		for(y=2; y<15; y++) {
			deck.push(y);
		}
	}

	// shuffle the deck until first card is neither 2 nor 10
	while(deck[0] == 2 || deck[0] == 10) {
		deck = shuffled(deck);
	}

	// initialize play area w/ first card
	play.push(deck[0]);
	deck.splice(0,1);
	value.innerHTML = play[play.length-1];

	// set up pile and hand for both players
	for(i=0; i<3; i++) {
		pPile.push(deck[0]);
		aiPile.push(deck[1]);
		pHand.push(deck[2], deck[3]);
		aiHand.push(deck[4], deck[5]);
		deck.splice(0,6);
	}

	// sort the two players' hands
	pHand = sorted(pHand);
	aiHand = sorted(aiHand);

	// let the player set up
	pSetup();
}

function pSetup() {
	message.innerHTML = 'It is your turn to set up!';

	// clear the cards
	cards.innerHTML = ''

	// display all cards in order, so the player can select
	for(i=0; i<pHand.length; i++) {
		cards.innerHTML += '<input type="button" value="' + pHand[i] + '" onClick="pSetupStep(' + pHand[i] + ')"> '
	}

	// determine if we need to keep setting up
	if(pHand.length == 3) {
		aiSetup();
	}
}

function pSetupStep(card) {
	// move the card we selected to the top of our pile
	pPile.push(card);

	// go back and remove the card from our hand
	for(i=0; i<pHand.length; i++) {
		if (pHand[i] == card) {
			pHand.splice(i,1);
			break;
		}
	}

	pSetup();
}

function aiSetup() {
	message.innerHTML = thinking;
	while(aiHand.length != 3) {
		aiPile.push(aiHand[aiHand.length-1])
		aiHand.splice(aiHand.length-1, 1);
	}
	console.log('all done for today!');
}

// ---------------------------|
// IGNORE THE FUNCTIONS BELOW.|
// ---------------------------|
function shuffled(array) {
	let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

	return array;
}

function sorted(array) {
	array.sort(function(a,b){return a-b});
	return array;
}

function debug() {
	let debugStuff = ['deck', deck, 'play', play, 'pPile', pPile, 'pHand', pHand, 'aiPile', aiPile, 'aiHand', aiHand];
	for(i=0; i<debugStuff.length; i++) {
		console.log(debugStuff[i]);
	}
}
