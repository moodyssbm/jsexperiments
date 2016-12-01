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
// | If 3 x HPmax > 255|
// |---------------------------------------------------------------------------------|


// constants
let pokedex = {
	nullInfo: [0,0,0,0],
	bulbasaur: [45, , 14, 45]
};


let balls = {
	nullInfo: 0
};

let smolDex = [
	'Bulbasaur',
];

let listOfBalls = [
	'Poke Ball',
	'Level Ball'
];

let chance = document.getElementById('catchRate');

let genPokes = document.getElementById('pokes');
let genBalls = document.getElementById('pBalls');
let genLvls = document.getElementById('lvls'); 

// variables


// main code
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
}

function calculate(form) {
	chance.innerHTML = form.pokes.value;
}

function ballEff(ball) {
	// stuff
}