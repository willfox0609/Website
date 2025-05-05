let word = "";
let displayed = [];
let wrongGuesses = [];
let attemptsLeft = 6;

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("/api/word");
    const result = await response.text();
    word = result.toUpperCase().trim();
    displayed = Array(word.length).fill('_');
    updateDisplay();
  } catch (err) {
    console.error("Failed to fetch word:", err);
    document.getElementById("message").textContent = "Error fetching word.";
  }
});

function updateDisplay() {
  document.getElementById("wordDisplay").textContent = displayed.join(" ");
  document.getElementById("wrongGuesses").textContent = wrongGuesses.join(", ");
  document.getElementById("attempts").textContent = attemptsLeft;
}

function guessLetter() {
  if (!word || attemptsLeft <= 0 || !displayed.includes('_')) return;

  const input = document.getElementById("letterInput");
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
    document.getElementById("message").textContent = "🎉 You won!";
  } else if (attemptsLeft <= 0) {
    document.getElementById("message").textContent = `💀 You lost! Word was: ${word}`;
  }
}
