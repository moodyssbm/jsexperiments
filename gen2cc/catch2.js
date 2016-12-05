// |---------------------------------------------------------------------------------|
// | Capture method calculation:                                                     |
// | a = (3 x HPmax - 2 x HPcurrent) x RATEmodified / ((3 x HPmax), 1) + BONUSstatus |
// |                                                                                 |
// | HPmax        = the total number of hit points a pokemon has                     |
// | HPcurrent    = the number of hit points the pokemon has at the moment           |
// | RATEmodified = the catch rate of the pokemon modified by the ball used. It can  |
// |                no less than 1 and no more than 255                              |
// | BONUSstatus  = 10 for sleep or freeze                                           |
// |                                                                                 |
// | If 3 x HPmax > 255                                                              |
// |---------------------------------------------------------------------------------|


// constants
let pokedex = {
	nullinfo: [0,0],				// [Base HP stat, Catch rate stat]
	bulbasaur: [45, 45]
};


let balls = {
	nullInfo: 0
};

let smolDex = [
	'Bulbasaur',
];

let listOfBalls = [
	'Poke Ball',
	'Great Ball',
	'Ultra Ball',
	'Level Ball'
];

let chance = document.getElementById('catchRate');

let genPokes = document.getElementById('pokes');
let genBalls = document.getElementById('pBalls');
let genLvls = document.getElementById('lvls');
let genRemHP = document.getElementById('remHP');
let genBallOpts = document.getElementById('ballOpts');



// variables
var modRate = 0;

// main code
function calculate() {
	let getPoke = document.getElementById('pokes').value;
	let makeItLower = getPoke.toLowerCase();

	chance.innerHTML = pokedex[makeItLower][1];
}

function ballEff(ball) {
	if(ball == 'Poke Ball') {
		return 1.0;
	} else if (ball == 'Great Ball') {
		return 1.5;
	} else if (ball == 'Ultra Ball') {
		return 2.0;
	} else if (ball == 'Level Ball') {
		return getBallOpts.value;
	}
}

function changeBallOpts() {
	let currentBall = document.getElementById('pBalls').value;
	if(currentBall == 'Poke Ball' || currentBall == 'Great Ball' || currentBall == 'Ultra Ball') {
		genBallOpts.innerHTML = "";
	} else if(currentBall == 'Level Ball') {
		modRate = ballEff(currentBall);
		genBallOpts.innerHTML = 'What is your Pokemon\'s Level in relation to the target Pokemon?<br><select name="genBallOpts" id="theBallOpts">';
		genBallOpts.innerHTML += '<option value="1">0.1x ~ 1.0x   ';
		genBallOpts.innerHTML += '<option value="2">1.1x ~ 1.9x   ';
		genBallOpts.innerHTML += '<option value="4">2.0x ~ 3.9x   ';
		genBallOpts.innerHTML += '<option value="8">4.0x +</select>';
		let getBallOpts = document.getElementById('theBallOpts');
	}
	modRate = pokedex[genPokes.value.toLowerCase()][1] * ballEff(currentBall);
}

// onload
window.onload = function() {
	genPokes.innerHTML = '<option value="nullInfo">Pokemon</option>';
	for(i=0; i!=smolDex.length; i++) {
		genPokes.innerHTML += '<option value="' + smolDex[i] + '">' + smolDex[i] + '</option>';
	}

	genBalls.innerHTML = '<option value="nullInfo">Pokeballs</option>';
	for(i=0; i!=listOfBalls.length; i++) {
		genBalls.innerHTML += '<option value="' + listOfBalls[i] + '">' + listOfBalls[i] + '</option>';
	}

	genLvls.innerHTML = '<option value="nullInfo">Target\'s Level</option>';
	for(i=1; i!=101; i++) {
		genLvls.innerHTML += '<option value="' + i + '">' + i + '</optin>';
	}

	genRemHP.innerHTML = '<option value="nullinfo">Target\'s Remaining HP</option>';
	for(i=10; i!=110; i+=10) {
		genRemHP.innerHTML += '<option value="' + i + '">~' + i + '%</option>';
	}
}

setInterval(calculate, 1000);
