'use strict'

let scorePlayer1 = document.getElementsByClassName('scoreplayer1')[0].innerHTML;
let scorePlayer2 = document.getElementsByClassName('scoreplayer2')[0].innerHTML;
const buttonPlayer1 = document.getElementsByClassName('buttonplayer1');
const buttonPlayer2 = document.getElementsByClassName('buttonplayer2');
const buttonReset = document.getElementsByClassName('buttonreset');
let scoreLimitInput = document.getElementsByClassName('scorelimiteinput').value = (5);

function incrementScorePlayer1() {
	scorePlayer1++;
}

function incrementScorePlayer2() {
	scorePlayer2++;
}

