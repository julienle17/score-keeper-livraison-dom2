'use strict'

let scorePlayer1 = document.getElementsByClassName('scoreplayer1')[0].innerHTML;
let scorePlayer2 = document.getElementsByClassName('scoreplayer2')[0].innerHTML;
const buttonPlayer1 = document.getElementsByClassName('buttonplayer1')[0];
const buttonPlayer2 = document.getElementsByClassName('buttonplayer2')[0];
const buttonReset = document.getElementsByClassName('buttonreset');
//let scoreLimitInput = document.getElementsByClassName('scorelimitinput').value = (5);
let scoreLimit = 5;

function incrementScorePlayer1() {
		scorePlayer1++;
		document.getElementsByClassName('scoreplayer1')[0].innerHTML = scorePlayer1;
	if (scorePlayer1 == scoreLimit) {
			freezePlayerButton();
			return;
	} 
}

function incrementScorePlayer2() {
		scorePlayer2++;
		document.getElementsByClassName('scoreplayer2')[0].innerHTML = scorePlayer2;
	if (scorePlayer2 == scoreLimit) {
			freezePlayerButton();
			return;
	} 
}

function freezePlayerButton() {
	buttonPlayer1.disabled = true;
	buttonPlayer2.disabled = true;
}

function resetScoreDisplay() {
	scorePlayer1 = 0;
	document.getElementsByClassName('scoreplayer1')[0].innerHTML = 0;
	scorePlayer2 = 0;
	document.getElementsByClassName('scoreplayer2')[0].innerHTML = 0;
	buttonPlayer1.disabled = false;
	buttonPlayer2.disabled = false;
}
