var myVar = setInterval(function(){ myTimer() }, 1000);

function myTimer() {
	var d = new Date();
	var t = d.toLocaleTimeString();
	var h = d.getHours();
	document.getElementById("current").innerHTML = t;
	if(h != 6) {
		document.getElementById("memes").innerHTML = 'No, Tyler. It is not 6 yet.';
	} else {
		document.getElementById("memes").innerHTML = "Hallelujah! It's friggin 6.";
	}
}