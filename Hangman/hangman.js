// Ensure the words.js is loaded before this file
let word = words[Math.floor(Math.random() * words.length)].toUpperCase();

let displayed = Array(word.length).fill('_');
let wrongGuesses = [];
let attemptsLeft = 6;

window.onload = () => {
  updateDisplay();
};

function updateDisplay() {
  document.getElementById('wordDisplay').textContent = displayed.join(' ');
  document.getElementById('wrongGuesses').textContent = wrongGuesses.join(', ');
  document.getElementById('attempts').textContent = attemptsLeft;
}

function guessLetter() {
  const input = document.getElementById('letterInput');
  const letter = input.value.toUpperCase();
  input.value = '';

  if (!letter.match(/^[A-Z]$/)) return;

  if (word.includes(letter)) {
    [...word].forEach((char, i) => {
      if (char === letter) displayed[i] = letter;
    });
  } else if (!wrongGuesses.includes(letter)) {
    wrongGuesses.push(letter);
    attemptsLeft--;
  }

  updateDisplay();
  checkGameStatus();
}

function checkGameStatus() {
  if (!displayed.includes('_')) {
    document.getElementById('message').textContent = '🎉 You won!';
  } else if (attemptsLeft <= 0) {
    document.getElementById('message').textContent = `💀 You lost! Word was: ${word}`;
  }
}
