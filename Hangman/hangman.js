let word = "";
let displayed = [];
let wrongGuesses = [];
let attemptsLeft = 6;

async function fetchWord() {
  const response = await fetch('/api/word');
  const text = await response.text();
  word = text.toUpperCase();
  displayed = Array(word.length).fill('_');
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('wordDisplay').textContent = displayed.join(' ');
  document.getElementById('wrongGuesses').textContent = wrongGuesses.join(', ');
  document.getElementById('attempts').textContent = attemptsLeft;
}

function guessLetter() {
  const input = document.getElementById('letterInput');
  const letter = input.value.toUpperCase();
  input.value = '';
  if (!letter.match(/[A-Z]/) || letter.length !== 1) return;

  if (word.includes(letter)) {
    word.split('').forEach((char, i) => {
      if (char === letter) displayed[i] = letter;
    });
  } else {
    if (!wrongGuesses.includes(letter)) {
      wrongGuesses.push(letter);
      attemptsLeft--;
    }
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

fetchWord();
