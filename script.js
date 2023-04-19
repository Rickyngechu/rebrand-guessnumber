'use strict';
const inputArea = document.querySelector('.input-text');
const btnCheck = document.querySelector('.btn-check');
const header = document.querySelector('.header');
const mainSect = document.querySelector('.section__main');
const guessText = document.querySelector('.guess-start');

let correctNum = document.querySelector('.answer-txt');

let score = document.querySelector('.scoreV');
let highScore = document.querySelector('.highestV');

// const update = function () {

// };
// update();
// update();

//STEP 1) Generate random number which is between 1 and 20
//Math.random generates number which is between 0.0 and 1.0
//We are adding one in order the range to be from 1 to 20
//If we had not added the 1 then range would have been 0 to 19

//STEP 2)We are getting the input value when a user inputs the number
//Since the user's input will be string we must covert it into number

btnCheck.addEventListener('click', function (e) {
  e.preventDefault();

  //   We generate the random number which is between 1 and 20
  const random = Math.trunc(Math.random() * 20 + 1);
  console.log(random);

  //For testing purposes(remember to remove this)
  //   const random = 12;
  //Convert the input value to be a number
  const inputValue = +inputArea.value;

  //We check if the input value is too high or too low
  if (inputValue > random) {
    guessText.innerHTML = '📈 Too high';
  }
  if (inputValue < random) {
    guessText.innerHTML = '📉 Too low';
  }
  const checkInputNumber = function (input) {
    if (random === input) {
      header.style.backgroundColor = 'green';
      mainSect.style.backgroundColor = 'green';

      highScore.innerHTML = input;
      correctNum.innerHTML = input;
    } else random !== input;
    //If the guess is wrong decrease the number by one
    score.innerHTML--;

    console.log(input);
  };
  checkInputNumber(inputValue);
});
