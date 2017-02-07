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


// objs
let pokedex = {
	nullInfo: [0,0],
	Bulbasaur: [45, 45]
}

let pokeballs = {
	nullInfo: ['nullball', 0],
	poke: ['Poke Ball', 1]
}

// get elements
let lvls = document.getElementById('lvls');
let pokes = document.getElementById('pokes');
let remHP = document.getElementById('remHP');
let pBalls = document.getElementById('pBalls');
let catchRate = document.getElementById('catchRate');
let statusBonus = document.getElementById('statusBonus');

window.onload = function() {
	// init select boxes
	pokes.innerHTML = '<option value="nullInfo">Target Pokemon</option>';
	pBalls.innerHTML = '<option value="nullInfo">Poke Balls</option>';
	lvls.innerHTML = '<option value="nullInfo">Target Pokemon\'s Level</option>';
	remHP.innerHTML = '<option value="nullInfo">Target Pokemon\'s Remaining HP</option>'

	// add values to those boxes
	for(var i in pokedex) {
		if(i != 'nullInfo') {
			pokes.innerHTML += '<option value="' + i + '">' + i + '</option>';
		}
	}

	for(var i in pokeballs) {
		if(i != 'nullInfo') {
			pBalls.innerHTML += '<option value="' + i + '">' + pokeballs[i][0] + '</option>';
		}
	}

	for(i=1; i!=101; i++) {
		lvls.innerHTML += '<option value="' + i + '">' + i + '</option>';
	}

	for(i=5; i<105; i+= 5) {
		remHP.innerHTML += '<option value="' + i + '">~' + i + '%</option>';
	}
}

function calculate(cr, bhp, pbb, l, rhp, sb) {
	l = parseInt(l);
	rhp = parseInt(rhp);

	let thp = bhp + 7;
	thp = thp * 2;
	thp = thp * l;
	thp = thp / 100;
	thp += 10;
	thp += l;

	let nhp = thp * (rhp / 100);
	let rm = cr * pbb;

	let a = 3 * thp;
	let b = 2 * nhp;
	let c = 0;

	if (thp*3 > 255) {
		a = a / 4;
		b = b / 4;
	}

	if(sb) {c=10;}

	let final = (((a - b) * rm) / (a)) + c;

	catchRate.innerHTML = final;
}

setInterval(function() {
	calculate(
		pokedex[pokes.value][0],
		pokedex[pokes.value][1],
		pokeballs[pBalls.value][1],
		lvls.value,
		remHP.value,
		statusBonus.checked
	);
}, 1000);
