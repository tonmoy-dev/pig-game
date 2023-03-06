"use strict";

// player0 -> player 1, player1 = player 2.

// select elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const current0El = document.getElementById("current--0");
const score1El = document.getElementById("score--1");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const resetBtnEl = document.querySelector(".btn--new");
const rollDiceBtnEl = document.querySelector(".btn--roll");
const holdBtnEl = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

// NOTE: Starting conditions
const init = function () {
  // states -> scores of players
  scores = [0, 0]; // [playerScore0, playerScore1]
  currentScore = 0;
  activePlayer = 0; // player0 starts
  playing = true; // state variable - boolean

  score0El.textContent = 0;
  score1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player1El.classList.remove("player--active");
  player0El.classList.add("player--active");
};
init();

const switchPlayer = function () {
  // reset the current score dynamically
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // changing the active player
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  // toggling the player active class to toggle the background
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// NOTE: Rolling dice functionality event
rollDiceBtnEl.addEventListener("click", function () {
  if (playing) {
    // 1. Generating a random numbers 0 to 6 to dice roll
    const diceNumber = Math.trunc(Math.random() * 6 + 1);

    // 2. Display dice
    // remove the hidden class to show the diceEl
    diceEl.classList.remove("hidden");

    // rolling the dice -> generate random dice roll
    diceEl.src = `./images/dice-${diceNumber}.png`;

    // 3. Check for rolled 1:
    if (diceNumber !== 1) {
      // add dice number to current score
      currentScore += diceNumber;
      // show current score dynamically
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

// NOTE: Holding the current score
holdBtnEl.addEventListener("click", function () {
  if (playing) {
    // !. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore;
    // display the score of the active player dynamically
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 50) {
      // Finish the game
      // we're not playing now, so playing is false.
      playing = false;
      // dice should be disappear.
      diceEl.classList.add("hidden");
      // add the player winner background to the active player and remove the another.
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

// reset game -> remove or reset everything we've added or created.
resetBtnEl.addEventListener("click", init);
