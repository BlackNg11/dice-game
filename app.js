/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,activePlayer,gamePlaying;
//Var Challenges 2
var LastDice,input,winningscore;

BanDau();



function NextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
	roundScore = 0;
	
	document.getElementById('current-0').textContent = 0;
	document.getElementById('current-1').textContent = 0;
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';
}

function BanDau() {
	scores = [0,0]; 
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;
	
	document.getElementById('dice-1').style.display = 'none' ;
	document.getElementById('dice-2').style.display = 'none' ;
	document.getElementById('score-0').textContent = 0;
	document.getElementById('score-1').textContent = 0;
	document.getElementById('current-0').textContent = 0;
	document.getElementById('current-1').textContent = 0;
	document.querySelector('#name-0').textContent = "Player 1";
	document.querySelector('#name-1').textContent = "Player 2";
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('acive');
	document.querySelector('.player-0-panel').classList.add('acive');
	document.querySelector('.player-1-panel').classList.remove('acive');
}

document.querySelector('.btn-roll').addEventListener('click', function() {	
	if(gamePlaying) {
		//Random number
		var dice1 = Math.floor(Math.random() * 6) + 1;
		var dice2 = Math.floor(Math.random() * 6) + 1;
		//LastDice = dice;
		
		//Hien Thi Ket Qua
		document.getElementById('dice-1').style.display = 'block';
		document.getElementById('dice-2').style.display = 'block';
//		diceDOM.style.display = 'block';
		document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
		document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

		if (dice1 !== 1 && dice2 !== 1) {
			roundScore += dice1 + dice2;
			document.querySelector("#current-" + activePlayer).textContent = roundScore; 
		}else {
			NextPlayer();
		}
		//Nguoi choi mat diem khi ca 2 lan roll lien tiep = 6 va roll trung so 1
//		if(dice === 6 && LastDice === 6) {	
//			scores[activePlayer] = 0;
//			document.getElementById('score-' + activePlayer).textContent = 0;
//			NextPlayer();
//		}else if (dice !== 1) {
//			roundScore += dice;
//			document.querySelector("#current-" + activePlayer).textContent = roundScore; 
//		}else {
//			NextPlayer();
//		}
		
		
	}
	
});	

document.querySelector('.btn-hold').addEventListener('click', function() {	
	if(gamePlaying){
		//Them diem hien tai vao tong diem
		scores[activePlayer] += roundScore;

		//Cap nhap diem
		document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

		input = document.querySelector('.final-score').value;
		
		if (input) {
			winningscore = input;
		} else {
			winningscore = 100;
		}
		
		
		
		//Check neu nguoi choi thang
		if (scores[activePlayer] >= winningscore ) {
			gamePlaying = false;
			scores[activePlayer] = winningscore;
			
			document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
			document.querySelector('#name-' + activePlayer).textContent = "Winner";
			document.getElementById('dice-1').style.display = 'none';
			document.getElementById('dice-2').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		}else {
			//Doi Nguoi Choi
			NextPlayer();
		}
	}
	
});

document.querySelector('.btn-new').addEventListener('click', BanDau);