let currentScore1 = 0;
let currentScore2 = 0;
let activePlayer = 0;
let score = 2;
let color = 1;
var name1='player 1';
var name2='player 2';
function rolldice() {
  var diceElement = document.getElementById("dice6");
  var dice = Math.trunc(Math.random() * 6) + 1;
  diceElement.style.visibility = "visible";
  diceElement.src = `dice${dice}.jpg`;
  if (activePlayer === 0) {
    currentScore1 += dice;
    document.querySelector(`#curzero--${activePlayer}`).textContent =
      currentScore1;
  } else {
    currentScore2 += dice;
    document.querySelector(`#curzero--${activePlayer}`).textContent =
      currentScore2;
  }

  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(`.player${color}`).style.backgroundColor =
    "palevioletred";
  color = color === 1 ? 2 : 1;
  document.querySelector(`.player${color}`).style.backgroundColor =
    "rgb(247, 140, 158)";
  score = score === 1 ? 2 : 1;
  if (currentScore1 >= 20 || currentScore2 >= 20) {
    document.getElementById(`zero--${score}`).style.visibility = "visible";
    document.querySelector("body").style.backgroundColor = "rgb(84, 248, 84)";
    currentScore1 = 0;
    currentScore2 = 0;
  }
}
function nxtplayer() {
  name1 = prompt("Enter the name for Player 1");
  name2 = prompt("Enter the name for Player 2");
  document.querySelector(".pla1").textContent = name1;
  document.querySelector(".pla2").textContent = name2;
}

function newgame() {
  currentScore1 = 0;
  currentScore2 = 0;
  var diceElement = document.getElementById("dice6");
  document.getElementById(`zero--1`).style.visibility = "hidden";
  document.getElementById(`zero--2`).style.visibility = "hidden";
  document.querySelector("body").style.backgroundColor = "rgb(221, 73, 73)";
  document.querySelector(`.player1`).style.backgroundColor =
    "rgb(247, 140, 158)";
  document.querySelector(`.player2`).style.backgroundColor = "palevioletred";
  diceElement.style.visibility = "hidden";
  document.querySelector(`#curzero--0`).textContent = 0;
  document.querySelector(`#curzero--1`).textContent = 0;
  document.querySelector(".pla1").textContent = name1;
  document.querySelector(".pla2").textContent = name2;
}
