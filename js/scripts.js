/* Init */

var decimals = 3; // Default
var showSettings = false;
var showInfo = false;
updateAll();

/* UI */

/* Settings and info panels */

$("#settings").click(function() {
	if(showSettings === false) {
		if(showInfo === true) {
			$("#infowrapper").animate({right: '-21em'}, 100);
			showInfo = false;
		}
		$("#settingswrapper").animate({right: 0}, 100);
		showSettings = true;
	} else {
		$("#settingswrapper").animate({right: '-16em'}, 100);
		showSettings = false;
	}
});

$("#info").click(function() {
	if(showInfo === false) {
		if(showSettings === true) {
			$("#settingswrapper").animate({right: '-16em'}, 100);
			showSettings = false;
		}
		$("#infowrapper").animate({right: 0}, 100);
		showInfo = true;
	} else {
		$("#infowrapper").animate({right: '-21em'}, 100);
		showInfo = false;
	}
});


/* Calculator */

/* Decimals */

$("#decimals").keyup(function() {
	decimals = $("#decimals").val();
	updateAll();
});

/* Update all answers */

function updateAll() {
	updateCircFromRad();
	updateRadFromCirc();
	updateDiaFromRad();
	updateRadFromDia();
}

/* Circumference from radius */

$("#circFromRadInput").keyup(function() {
	updateCircFromRad();
});

function updateCircFromRad() {
	var input = $("#circFromRadInput").val();
	var output = $("#circFromRadOutput").children("span");
	output.html(circFromRad(input));
}

function circFromRad(rad) {
	var circ = rad * 2 * Math.PI;
	circ = circ.toFixed(decimals);
	return circ;
}

/* Radius from circumference */

$("#radFromCircInput").keyup(function() {
	updateRadFromCirc();
});

function updateRadFromCirc() {
	var input = $("#radFromCircInput").val();
	var output = $("#radFromCircOutput").children("span");
	output.html(radFromCirc(input).toLocaleString());
}

function radFromCirc(circ) {
	var rad = circ / Math.PI / 2;
	rad = rad.toFixed(decimals);
	return rad;
}

/* Diameter from radius */

$("#diaFromRadInput").keyup(function() {
	updateDiaFromRad();
});

function updateDiaFromRad() {
	var input = $("#diaFromRadInput").val();
	var output = $("#diaFromRadOutput").children("span");
	output.html(diaFromRad(input).toLocaleString());
}

function diaFromRad(rad) {
	var dia = rad * 2;
	dia = dia.toFixed(decimals);
	return dia;
}

/* Radius from diameter */

$("#radFromDiaInput").keyup(function() {
	updateRadFromDia();
});

function updateRadFromDia() {
	var input = $("#radFromDiaInput").val();
	var output = $("#radFromDiaOutput").children("span");
	output.html(radFromDia(input).toLocaleString());
}

function radFromDia(dia) {
	var rad = dia / 2;
	rad = rad.toFixed(decimals);
	return rad;
}