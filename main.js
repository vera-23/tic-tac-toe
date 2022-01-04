//Function onclick
function myfunc() {

	//  DOM 
	var feld1, feld2, feld3, feld4, feld5, feld6, feld7, feld8, feld9;
	feld1 = document.getElementById("feld1").value;
	feld2 = document.getElementById("feld2").value;
	feld3 = document.getElementById("feld3").value;
	feld4 = document.getElementById("feld4").value;
	feld5 = document.getElementById("feld5").value;
	feld6 = document.getElementById("feld6").value;
	feld7 = document.getElementById("feld7").value;
	feld8 = document.getElementById("feld8").value;
	feld9 = document.getElementById("feld9").value;


	// Spieler X gewonnen? -> übrige Felder deaktivieren
	if ((feld1 == 'x' || feld1 == 'X') && (feld2 == 'x' ||
		feld2 == 'X') && (feld3 == 'x' || feld3 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Spieler X hat gewonnen!";
		document.getElementById("feld4").disabled = true;
		document.getElementById("feld5").disabled = true;
		document.getElementById("feld6").disabled = true;
		document.getElementById("feld7").disabled = true;
		document.getElementById("feld8").disabled = true;
		document.getElementById("feld9").disabled = true;
		window.alert('Spieler X hat gewonnen!');
	}
	else if ((feld1 == 'x' || feld1 == 'X') && (feld4 == 'x' ||
		feld4 == 'X') && (feld7 == 'x' || feld7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Spieler X hat gewonnen!";
		document.getElementById("feld2").disabled = true;
		document.getElementById("feld3").disabled = true;
		document.getElementById("feld5").disabled = true;
		document.getElementById("feld6").disabled = true;
		document.getElementById("feld8").disabled = true;
		document.getElementById("feld9").disabled = true;

		window.alert('Spieler X hat gewonnen!');
	}
	else if ((feld7 == 'x' || feld7 == 'X') && (feld8 == 'x' ||
		feld8 == 'X') && (feld9 == 'x' || feld9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Spieler X hat gewonnen!";
		document.getElementById("feld1").disabled = true;
		document.getElementById("feld2").disabled = true;
		document.getElementById("feld3").disabled = true;
		document.getElementById("feld4").disabled = true;
		document.getElementById("feld5").disabled = true;
		document.getElementById("feld6").disabled = true;
		window.alert('Spieler X hat gewonnen!');
	}
	else if ((feld3 == 'x' || feld3 == 'X') && (feld6 == 'x' ||
		feld6 == 'X') && (feld9 == 'x' || feld9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Spieler X hat gewonnen!";
		document.getElementById("feld1").disabled = true;
		document.getElementById("feld2").disabled = true;
		document.getElementById("feld4").disabled = true;
		document.getElementById("feld5").disabled = true;
		document.getElementById("feld7").disabled = true;
		document.getElementById("feld8").disabled = true;
		window.alert('Spieler X hat gewonnen!');
	}
	else if ((feld1 == 'x' || feld1 == 'X') && (feld5 == 'x' ||
		feld5 == 'X') && (feld9 == 'x' || feld9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Spieler X hat gewonnen!";
		document.getElementById("feld2").disabled = true;
		document.getElementById("feld3").disabled = true;
		document.getElementById("feld4").disabled = true;
		document.getElementById("feld6").disabled = true;
		document.getElementById("feld7").disabled = true;
		document.getElementById("feld8").disabled = true;
		window.alert('Spieler X hat gewonnen!');
	}
	else if ((feld3 == 'x' || feld3 == 'X') && (feld5 == 'x' ||
		feld5 == 'X') && (feld7 == 'x' || feld7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Spieler X hat gewonnen!";
		document.getElementById("feld1").disabled = true;
		document.getElementById("feld2").disabled = true;
		document.getElementById("feld4").disabled = true;
		document.getElementById("feld6").disabled = true;
		document.getElementById("feld8").disabled = true;
		document.getElementById("feld9").disabled = true;
		window.alert('Spieler X hat gewonnen!');
	}
	else if ((feld2 == 'x' || feld2 == 'X') && (feld5 == 'x' ||
		feld5 == 'X') && (feld8 == 'x' || feld8 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Spieler X hat gewonnen!";
		document.getElementById("feld1").disabled = true;
		document.getElementById("feld3").disabled = true;
		document.getElementById("feld4").disabled = true;
		document.getElementById("feld6").disabled = true;
		document.getElementById("feld7").disabled = true;
		document.getElementById("feld9").disabled = true;
		window.alert('Spieler X hat gewonnen!');
	}
	else if ((feld4 == 'x' || feld4 == 'X') && (feld5 == 'x' ||
		feld5 == 'X') && (feld6 == 'x' || feld6 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Spieler X hat gewonnen!";
		document.getElementById("feld1").disabled = true;
		document.getElementById("feld2").disabled = true;
		document.getElementById("feld3").disabled = true;
		document.getElementById("feld7").disabled = true;
		document.getElementById("feld8").disabled = true;
		document.getElementById("feld9").disabled = true;
		window.alert('Spieler X hat gewonnen!');
	}



	// Spieler O gewonnen? -> übrige Felder deaktivieren
	else if ((feld1 == '0' || feld1 == '0') && (feld2 == '0' ||
		feld2 == '0') && (feld3 == '0' || feld3 == '0')) {
		document.getElementById('print')
			.innerHTML = "Spieler 0 hat gewonnen!";
		document.getElementById("feld4").disabled = true;
		document.getElementById("feld5").disabled = true;
		document.getElementById("feld6").disabled = true;
		document.getElementById("feld7").disabled = true;
		document.getElementById("feld8").disabled = true;
		document.getElementById("feld9").disabled = true;
		window.alert('Spieler 0 hat gewonnen!');
	}
	else if ((feld1 == '0' || feld1 == '0') && (feld4 == '0' ||
		feld4 == '0') && (feld7 == '0' || feld7 == '0')) {
		document.getElementById('print')
			.innerHTML = "Spieler 0 hat gewonnen!";
		document.getElementById("feld2").disabled = true;
		document.getElementById("feld3").disabled = true;
		document.getElementById("feld5").disabled = true;
		document.getElementById("feld6").disabled = true;
		document.getElementById("feld8").disabled = true;
		document.getElementById("feld9").disabled = true;
		window.alert('Spieler 0 hat gewonnen!');
	}
	else if ((feld7 == '0' || feld7 == '0') && (feld8 == '0' ||
		feld8 == '0') && (feld9 == '0' || feld9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Spieler 0 hat gewonnen!";
		document.getElementById("feld1").disabled = true;
		document.getElementById("feld2").disabled = true;
		document.getElementById("feld3").disabled = true;
		document.getElementById("feld4").disabled = true;
		document.getElementById("feld5").disabled = true;
		document.getElementById("feld6").disabled = true;
		window.alert('Spieler 0 hat gewonnen!');
	}
	else if ((feld3 == '0' || feld3 == '0') && (feld6 == '0' ||
		feld6 == '0') && (feld9 == '0' || feld9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Spieler 0 hat gewonnen!";
		document.getElementById("feld1").disabled = true;
		document.getElementById("feld2").disabled = true;
		document.getElementById("feld4").disabled = true;
		document.getElementById("feld5").disabled = true;
		document.getElementById("feld7").disabled = true;
		document.getElementById("feld8").disabled = true;
		window.alert('Spieler 0 hat gewonnen!');
	}
	else if ((feld1 == '0' || feld1 == '0') && (feld5 == '0' ||
		feld5 == '0') && (feld9 == '0' || feld9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Spieler 0 hat gewonnen!";
		document.getElementById("feld2").disabled = true;
		document.getElementById("feld3").disabled = true;
		document.getElementById("feld4").disabled = true;
		document.getElementById("feld6").disabled = true;
		document.getElementById("feld7").disabled = true;
		document.getElementById("feld8").disabled = true;
		window.alert('Spieler 0 hat gewonnen!');
	}
	else if ((feld3 == '0' || feld3 == '0') && (feld5 == '0' ||
		feld5 == '0') && (feld7 == '0' || feld7 == '0')) {
		document.getElementById('print')
			.innerHTML = "Spieler 0 hat gewonnen!";
		document.getElementById("feld1").disabled = true;
		document.getElementById("feld2").disabled = true;
		document.getElementById("feld4").disabled = true;
		document.getElementById("feld6").disabled = true;
		document.getElementById("feld8").disabled = true;
		document.getElementById("feld9").disabled = true;
		window.alert('Spieler 0 hat gewonnen!');
	}
	else if ((feld2 == '0' || feld2 == '0') && (feld5 == '0' ||
		feld5 == '0') && (feld8 == '0' || feld8 == '0')) {
		document.getElementById('print')
			.innerHTML = "Spieler 0 hat gewonnen!";
		document.getElementById("feld1").disabled = true;
		document.getElementById("feld3").disabled = true;
		document.getElementById("feld4").disabled = true;
		document.getElementById("feld6").disabled = true;
		document.getElementById("feld7").disabled = true;
		document.getElementById("feld9").disabled = true;
		window.alert('Spieler 0 hat gewonnen!');
	}
	else if ((feld4 == '0' || feld4 == '0') && (feld5 == '0' ||
		feld5 == '0') && (feld6 == '0' || feld6 == '0')) {
		document.getElementById('print')
			.innerHTML = "Spieler 0 hat gewonnen!";
		document.getElementById("feld1").disabled = true;
		document.getElementById("feld2").disabled = true;
		document.getElementById("feld3").disabled = true;
		document.getElementById("feld7").disabled = true;
		document.getElementById("feld8").disabled = true;
		document.getElementById("feld9").disabled = true;
		window.alert('Spieler 0 hat gewonnen!');
	}


	// Check ob unentschieden
	else if ((feld1 == 'X' || feld1 == '0') && (feld2 == 'X'
		|| feld2 == '0') && (feld3 == 'X' || feld3 == '0') &&
		(feld4 == 'X' || feld4 == '0') && (feld5 == 'X' ||
			feld5 == '0') && (feld6 == 'X' || feld6 == '0') &&
		(feld7 == 'X' || feld7 == '0') && (feld8 == 'X' ||
			feld8 == '0') && (feld9 == 'X' || feld9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Unentschieden!";
		window.alert('Unentscheiden!');
	}
	else {

		// Wer ist dran?
		if (flag == 1) {
			document.getElementById('print')
				.innerHTML = "Spieler X ist dran!";
		}
		else {
			document.getElementById('print')
				.innerHTML = "Spieler O am Zug!";
		}
	}
}

// Function reset
function reset() {
	location.reload();
	document.getElementById('feld1').value = '';
	document.getElementById("feld2").value = '';
	document.getElementById("feld3").value = '';
	document.getElementById("feld4").value = '';
	document.getElementById("feld5").value = '';
	document.getElementById("feld6").value = '';
	document.getElementById("feld7").value = '';
	document.getElementById("feld8").value = '';
	document.getElementById("feld9").value = '';

}


flag = 1;
function wer_ist_dran1() {
	if (flag == 1) {
		document.getElementById("feld1").value = "X";
		document.getElementById("feld1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("feld1").value = "0";
		document.getElementById("feld1").disabled = true;
		flag = 1;
	}
}

function wer_ist_dran2() {
	if (flag == 1) {
		document.getElementById("feld2").value = "X";
		document.getElementById("feld2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("feld2").value = "0";
		document.getElementById("feld2").disabled = true;
		flag = 1;
	}
}

function wer_ist_dran3() {
	if (flag == 1) {
		document.getElementById("feld3").value = "X";
		document.getElementById("feld3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("feld3").value = "0";
		document.getElementById("feld3").disabled = true;
		flag = 1;
	}
}

function wer_ist_dran4() {
	if (flag == 1) {
		document.getElementById("feld4").value = "X";
		document.getElementById("feld4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("feld4").value = "0";
		document.getElementById("feld4").disabled = true;
		flag = 1;
	}
}

function wer_ist_dran5() {
	if (flag == 1) {
		document.getElementById("feld5").value = "X";
		document.getElementById("feld5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("feld5").value = "0";
		document.getElementById("feld5").disabled = true;
		flag = 1;
	}
}

function wer_ist_dran6() {
	if (flag == 1) {
		document.getElementById("feld6").value = "X";
		document.getElementById("feld6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("feld6").value = "0";
		document.getElementById("feld6").disabled = true;
		flag = 1;
	}
}

function wer_ist_dran7() {
	if (flag == 1) {
		document.getElementById("feld7").value = "X";
		document.getElementById("feld7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("feld7").value = "0";
		document.getElementById("feld7").disabled = true;
		flag = 1;
	}
}

function wer_ist_dran8() {
	if (flag == 1) {
		document.getElementById("feld8").value = "X";
		document.getElementById("feld8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("feld8").value = "0";
		document.getElementById("feld8").disabled = true;
		flag = 1;
	}
}

function wer_ist_dran9() {
	if (flag == 1) {
		document.getElementById("feld9").value = "X";
		document.getElementById("feld9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("feld9").value = "0";
		document.getElementById("feld9").disabled = true;
		flag = 1;
	}
}
