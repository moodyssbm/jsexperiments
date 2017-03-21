// point to predefined html objects
let genre = document.getElementById('genre');

// globals
let gameGenres = [
	'Action',
	'Adventure',
	'Casual',
	'Platformer',
	'Racing',
	'RPG',
	'Sports',
	'Strategy'
];

// function for making options
function makeOp(value) {
	let phrase = '';

	phrase += '<option value="';
	phrase += value;
	phrase += '">';
	phrase += value;
	phrase += '</option>';

	return phrase;
}

// setup func
window.onload = function() {
	for(i=0; i!=gameGenres.length; i++) {
		genre.innerHTML += makeOp(gameGenres[i]);
	}
}