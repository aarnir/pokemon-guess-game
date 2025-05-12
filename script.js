// Minimal working logic for 1 Pokémon (Bulbasaur)

const pokemonList = [
  { name: "bulbasaur", image: "sprites/001.png" },
  { name: "ivysaur", image: "sprites/002.png" },
  { name: "venusaur", image: "sprites/003.png" },
  { name: "charmander", image: "sprites/004.png" },
  { name: "charmeleon", image: "sprites/005.png" },
  // Add more as needed...
];

let currentIndex = 0;
let score = 0;
let startTime = Date.now();

const imageElement = document.getElementById("pokemon-image");
const input = document.getElementById("guess-input");
const submitBtn = document.getElementById("submit-guess");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const statusDisplay = document.getElementById("status");

function updateTimer() {
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  timerDisplay.textContent = elapsed;
}

setInterval(updateTimer, 1000);

submitBtn.addEventListener("click", () => {
  const userGuess = input.value.trim().toLowerCase();
  const correctName = pokemonList[currentIndex].name;

  if (userGuess.includes(correctName)) {
    score++;
    statusDisplay.textContent = "Correct!";
  } else {
    score--;
    statusDisplay.textContent = `Wrong! It was ${correctName}.`;
  }

  scoreDisplay.textContent = score;
  input.value = "";
  input.focus();

  // Restart with same image for now — will add next logic later
});
