"use strict";

// select elements
const score0El = document.getElementById("score--0");
const current0El = document.getElementById("current--0");
const score1El = document.getElementById("score--1");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const resetBtnEl = document.querySelector(".btn--new");
const rollDiceBtnEl = document.querySelector(".btn--roll");
const holdBtnEl = document.querySelector(".btn--hold");

// states -> scores of players
let playerScore0 = 0;
let playerScore1 = 0;
let playerCurrentScore0 = 0;
let playerCurrentScore1 = 0;

// In the begining, score sets to zero & dice will not be appeared.
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

rollDiceBtnEl.addEventListener("click", function () {
  // remove the hidden class to show the diceEl
  diceEl.classList.remove("hidden");

  // generating random numbers 0 to 6
  const randomNumber = Math.trunc(Math.random() * 6 + 1);

  // rolling the dice -> generate random dice roll
  // console.log(diceEl.getAttribute("src"));
  diceEl.setAttribute("src", `./images/dice-${randomNumber}.png`);

  // update the current value
  playerCurrentScore0 = playerCurrentScore0 + randomNumber;
  current0El.textContent = playerCurrentScore0;
});

// hold the game for a player
holdBtnEl.addEventListener("click", function () {
  // add current score to player score
  playerScore0 = playerScore0 + playerCurrentScore0;
  score0El.textContent = playerScore0;

  // reset the current score of a player
  playerCurrentScore0 = 0;
  current0El.textContent = playerCurrentScore0;
});

// reset game
resetBtnEl.addEventListener("click", function () {
  // reset all -> current score, player score, disappear dice
  playerCurrentScore0 = 0;
  current0El.textContent = playerCurrentScore0;

  playerScore0 = 0;
  score0El.textContent = playerScore0;

  diceEl.classList.add("hidden");
});
