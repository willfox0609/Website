let word = "";
let displayed = [];
let wrongGuesses = [];
let attemptsLeft = 6;
let gameStarted = false;

async function fetchWord() {
  if (gameStarted) return; // prevent re-fetching
  gameStarted = true;

  try {
    const response = await fetch('/api/word');
    const text = await response.text();
    word = text.toUpperCase().trim();
    displayed = Array(word.length).fill('_');
    updateDisplay();
  } catch (error) {
    console.error("Error fetching word:", error);
    document.getElementById('message').textContent = "Error fetching word.";
  }
}

function updateDisplay() {
  document.getElementById('wordDisplay').textContent = displayed.join(' ');
  document.getElementById('wrongGuesses').textContent = wrongGuesses.join(', ');
  document.getElementById('attempts').textContent = attemptsLeft;
}

function guessLetter() {
  if (!word) return;

  const input = document.getElementById('letterInput');
  const letter = input.value.toUpperCase();
  input.value = '';

  if (!letter.match(/^[A-Z]$/)) return;

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

window.onload = fetchWord;
