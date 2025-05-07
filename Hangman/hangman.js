let word = "";
let displayed = [];
let wrongGuesses = [];
let attemptsLeft = 6;

window.onload = () => {
  word = words[Math.floor(Math.random() * words.length)].toUpperCase();
  displayed = Array(word.length).fill('_');
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
  document.getElementById('message').textContent = '';

  if (!letter.match(/^[A-Z]$/)) return;

  if (word.includes(letter)) {
    [...word].forEach((char, i) => {
      if (char === letter) displayed[i] = letter;
    });
  } else if (!wrongGuesses.includes(letter)) {
    wrongGuesses.push(letter);
    attemptsLeft--;
    document.getElementById('message').textContent = 'Incorrect guess, try again.';
  }

  updateDisplay();
  checkGameStatus();
}

function guessWord() {
  const input = document.getElementById('wordInput');
  const guess = input.value.toUpperCase().trim();
  input.value = '';
  document.getElementById('message').textContent = '';

  if (guess === word) {
    displayed = word.split('');
    document.getElementById('message').textContent = '🎉 You won!';
  } else {
    attemptsLeft--;
    document.getElementById('message').textContent = 'Incorrect guess, try again.';
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
