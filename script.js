"use strict";

// select elements
const score0El = document.getElementById("score--0");
const current0El = document.getElementById("current--0");
const score1El = document.getElementById("score--1");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const resetBtnEl = document.querySelector(".btn--new");
const rollDiceBtnEl = document.querySelector(".btn--roll");
const holdBtnEl = document.querySelector(".btn-hold");

// In the begining, score sets to zero & dice will not be appeared.
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
