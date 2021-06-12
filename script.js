'use strict';

/*
console.log(document.querySelector('.para').textContent);

document.querySelector('.para').textContent = 'Awesome Course!';

console.log(document.querySelector('.para').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector('.para').textContent = 'No number!';
  }
  // when player wins
  else if (guess === secretNumber) {
    document.querySelector('.para').textContent = 'Correct number!';

    document.querySelector('body').style.background = '#60b347';

    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // when guess is wrong
  // else if (guess !== secretNumber) {
  // }

  // when guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.para').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.para').textContent = 'You Lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }

  // when guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.para').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.para').textContent = 'You Lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// coding challenge

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.para').textContent = 'start guessing!!!';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '8rem';
  document.querySelector('body').style.background = 'rgb(117, 117, 117)';
});
