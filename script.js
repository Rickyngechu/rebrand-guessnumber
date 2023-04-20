'use strict';
let inputArea = document.querySelector('.input-text');
const btnCheck = document.querySelector('.btn-check');
const header = document.querySelector('.header');
const mainSect = document.querySelector('.section__main');
const guessText = document.querySelector('.guess-start');
const btnAgain = document.querySelector('.again-btn');

let correctNum = document.querySelector('.answer-txt');

let scoreV = document.querySelector('.scoreV');
// let scoreValue = (score.innerHTML = 20);
let highScore = document.querySelector('.highestV');

//STEP 1) Generate random number which is between 1 and 20
//Math.random generates number which is between 0.0 and 1.0
//We are adding one in order the range to be from 1 to 20
//If we had not added the 1 then range would have been 0 to 19
const random = Math.trunc(Math.random() * 20 + 1);
let score = 20;

btnCheck.addEventListener('click', function (e) {
  e.preventDefault();

  //Getting the input value and converting it into a number
  const inputValue = +inputArea.value;

  //If there is no any input
  if (!inputValue) {
    guessText.textContent = '😶 No number entered!';
  }
  //If the input guess is correct
  else if (inputValue === random) {
    header.style.backgroundColor = '#30ac44';
    mainSect.style.backgroundColor = '#30ac44';

    guessText.textContent = '🥳 Genious,correct guess!';
    highScore.textContent = scoreV.textContent;
    correctNum.textContent = random;
  }
  //If the input guess is wrong
  else if (inputValue !== random) {
    if (score > 1) {
      guessText.textContent =
        inputValue < random ? '📉 Value too low' : '📈 Value too high';
      score--;
      scoreV.textContent = score;
    } else {
      guessText.textContent = '😥 You have lost.Try again!';
    }
  }
});

btnAgain.addEventListener('click', function (e) {
  e.preventDefault();
  guessText.textContent = 'Start guessing...';
  inputArea.value = '';
  correctNum.textContent = '?';
  header.style.backgroundColor = '#fce9e9';
  mainSect.style.backgroundColor = '#fce9e9';

  highScore.textContent = scoreV.textContent;
  scoreV.textContent = 20;
});
