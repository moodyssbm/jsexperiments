function gbi(id) {
	return document.getElementById(id);
}

function ih(obj, dat, overwrite) {
	if(overwrite) {
		obj.innerHTML = dat;
	} else {
		obj.innerHTML += dat;
	}
}

function newEl(tag, id) {
	return '<' + tag + ' id="' + id + '"></' + tag + '>';
}