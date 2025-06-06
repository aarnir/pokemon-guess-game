window.onload = function () {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  const pokemonList = [
    { name: "bulbasaur", image: "sprites/001.png" },
    { name: "ivysaur", image: "sprites/002.png" },
    { name: "venusaur", image: "sprites/003.png" },
    { name: "charmander", image: "sprites/004.png" },
    { name: "charmeleon", image: "sprites/005.png" },
    { name: "charizard", image: "sprites/006.png" },
    { name: "squirtle", image: "sprites/007.png" },
    { name: "wartortle", image: "sprites/008.png" },
    { name: "blastoise", image: "sprites/009.png" },
    { name: "caterpie", image: "sprites/010.png" },
    { name: "metapod", image: "sprites/011.png" },
    { name: "butterfree", image: "sprites/012.png" },
    { name: "weedle", image: "sprites/013.png" },
    { name: "kakuna", image: "sprites/014.png" },
    { name: "beedrill", image: "sprites/015.png" },
    { name: "pidgey", image: "sprites/016.png" },
    { name: "pidgeotto", image: "sprites/017.png" },
    { name: "pidgeot", image: "sprites/018.png" },
    { name: "rattata", image: "sprites/019.png" },
    { name: "raticate", image: "sprites/020.png" },
    { name: "spearow", image: "sprites/021.png" },
    { name: "fearow", image: "sprites/022.png" },
    { name: "ekans", image: "sprites/023.png" },
    { name: "arbok", image: "sprites/024.png" },
    { name: "pikachu", image: "sprites/025.png" },
    { name: "raichu", image: "sprites/026.png" },
    { name: "sandshrew", image: "sprites/027.png" },
    { name: "sandslash", image: "sprites/028.png" },
    { name: "nidoran-f", image: "sprites/029.png" },
    { name: "nidorina", image: "sprites/030.png" },
    { name: "nidoqueen", image: "sprites/031.png" },
    { name: "nidoran-m", image: "sprites/032.png" },
    { name: "nidorino", image: "sprites/033.png" },
    { name: "nidoking", image: "sprites/034.png" },
    { name: "clefairy", image: "sprites/035.png" },
    { name: "clefable", image: "sprites/036.png" },
    { name: "vulpix", image: "sprites/037.png" },
    { name: "ninetales", image: "sprites/038.png" },
    { name: "jigglypuff", image: "sprites/039.png" },
    { name: "wigglytuff", image: "sprites/040.png" },
    { name: "zubat", image: "sprites/041.png" },
    { name: "golbat", image: "sprites/042.png" },
    { name: "oddish", image: "sprites/043.png" },
    { name: "gloom", image: "sprites/044.png" },
    { name: "vileplume", image: "sprites/045.png" },
    { name: "paras", image: "sprites/046.png" },
    { name: "parasect", image: "sprites/047.png" },
    { name: "venonat", image: "sprites/048.png" },
    { name: "venomoth", image: "sprites/049.png" },
    { name: "diglett", image: "sprites/050.png" },
    { name: "dugtrio", image: "sprites/051.png" },
    { name: "meowth", image: "sprites/052.png" },
    { name: "persian", image: "sprites/053.png" },
    { name: "psyduck", image: "sprites/054.png" },
    { name: "golduck", image: "sprites/055.png" },
    { name: "mankey", image: "sprites/056.png" },
    { name: "primeape", image: "sprites/057.png" },
    { name: "growlithe", image: "sprites/058.png" },
    { name: "arcanine", image: "sprites/059.png" },
    { name: "poliwag", image: "sprites/060.png" },
    { name: "poliwhirl", image: "sprites/061.png" },
    { name: "poliwrath", image: "sprites/062.png" },
    { name: "abra", image: "sprites/063.png" },
    { name: "kadabra", image: "sprites/064.png" },
    { name: "alakazam", image: "sprites/065.png" },
    { name: "machop", image: "sprites/066.png" },
    { name: "machoke", image: "sprites/067.png" },
    { name: "machamp", image: "sprites/068.png" },
    { name: "bellsprout", image: "sprites/069.png" },
    { name: "weepinbell", image: "sprites/070.png" },
    { name: "victreebel", image: "sprites/071.png" },
    { name: "tentacool", image: "sprites/072.png" },
    { name: "tentacruel", image: "sprites/073.png" },
    { name: "geodude", image: "sprites/074.png" },
    { name: "graveler", image: "sprites/075.png" },
    { name: "golem", image: "sprites/076.png" },
    { name: "ponyta", image: "sprites/077.png" },
    { name: "rapidash", image: "sprites/078.png" },
    { name: "slowpoke", image: "sprites/079.png" },
    { name: "slowbro", image: "sprites/080.png" },
    { name: "magnemite", image: "sprites/081.png" },
    { name: "magneton", image: "sprites/082.png" },
    { name: "farfetch’d", image: "sprites/083.png" },
    { name: "doduo", image: "sprites/084.png" },
    { name: "dodrio", image: "sprites/085.png" },
    { name: "seel", image: "sprites/086.png" },
    { name: "dewgong", image: "sprites/087.png" },
    { name: "grimer", image: "sprites/088.png" },
    { name: "muk", image: "sprites/089.png" },
    { name: "shellder", image: "sprites/090.png" },
    { name: "cloyster", image: "sprites/091.png" },
    { name: "gastly", image: "sprites/092.png" },
    { name: "haunter", image: "sprites/093.png" },
    { name: "gengar", image: "sprites/094.png" },
    { name: "onix", image: "sprites/095.png" },
    { name: "drowzee", image: "sprites/096.png" },
    { name: "hypno", image: "sprites/097.png" },
    { name: "krabby", image: "sprites/098.png" },
    { name: "kingler", image: "sprites/099.png" },
    { name: "voltorb", image: "sprites/100.png" },
    { name: "electrode", image: "sprites/101.png" },
    { name: "exeggcute", image: "sprites/102.png" },
    { name: "exeggutor", image: "sprites/103.png" },
    { name: "cubone", image: "sprites/104.png" },
    { name: "marowak", image: "sprites/105.png" },
    { name: "hitmonlee", image: "sprites/106.png" },
    { name: "hitmonchan", image: "sprites/107.png" },
    { name: "lickitung", image: "sprites/108.png" },
    { name: "koffing", image: "sprites/109.png" },
    { name: "weezing", image: "sprites/110.png" },
    { name: "rhyhorn", image: "sprites/111.png" },
    { name: "rhydon", image: "sprites/112.png" },
    { name: "chansey", image: "sprites/113.png" },
    { name: "tangela", image: "sprites/114.png" },
    { name: "kangaskhan", image: "sprites/115.png" },
    { name: "horsea", image: "sprites/116.png" },
    { name: "seadra", image: "sprites/117.png" },
    { name: "goldeen", image: "sprites/118.png" },
    { name: "seaking", image: "sprites/119.png" },
    { name: "staryu", image: "sprites/120.png" },
    { name: "starmie", image: "sprites/121.png" },
    { name: "mr. mime", image: "sprites/122.png" },
    { name: "scyther", image: "sprites/123.png" },
    { name: "jynx", image: "sprites/124.png" },
    { name: "electabuzz", image: "sprites/125.png" },
    { name: "magmar", image: "sprites/126.png" },
    { name: "pinsir", image: "sprites/127.png" },
    { name: "tauros", image: "sprites/128.png" },
    { name: "magikarp", image: "sprites/129.png" },
    { name: "gyarados", image: "sprites/130.png" },
    { name: "lapras", image: "sprites/131.png" },
    { name: "ditto", image: "sprites/132.png" },
    { name: "eevee", image: "sprites/133.png" },
    { name: "vaporeon", image: "sprites/134.png" },
    { name: "jolteon", image: "sprites/135.png" },
    { name: "flareon", image: "sprites/136.png" },
    { name: "porygon", image: "sprites/137.png" },
    { name: "omanyte", image: "sprites/138.png" },
    { name: "omastar", image: "sprites/139.png" },
    { name: "kabuto", image: "sprites/140.png" },
    { name: "kabutops", image: "sprites/141.png" },
    { name: "aerodactyl", image: "sprites/142.png" },
    { name: "snorlax", image: "sprites/143.png" },
    { name: "articuno", image: "sprites/144.png" },
    { name: "zapdos", image: "sprites/145.png" },
    { name: "moltres", image: "sprites/146.png" },
    { name: "dratini", image: "sprites/147.png" },
    { name: "dragonair", image: "sprites/148.png" },
    { name: "dragonite", image: "sprites/149.png" },
    { name: "mewtwo", image: "sprites/150.png" },
    { name: "mew", image: "sprites/151.png" },
  ];

  shuffleArray(pokemonList);

  let currentIndex = 0;
  let score = 0;
  let timerStarted = false;
  let startTime = Date.now();
  let timerInterval;
  let isTransitioning = false;

  const imageElement = document.getElementById("pokemon-image");
  const input = document.getElementById("guess-input");
  const submitBtn = document.getElementById("submit-guess");
  const skipBtn = document.getElementById("skip-btn");
  const scoreDisplay = document.getElementById("score");
  const timerDisplay = document.getElementById("timer");
  const statusDisplay = document.getElementById("status");
  const guessedList = document.getElementById("guessed-list");
  const missedList = document.getElementById("missed-list");
  const label = document.getElementById("answer-label");
  const endRunBtn = document.getElementById("end-run-btn");
  const guessedHeading = document.getElementById("guessed-heading");

  function startGame() {
    shuffleArray(pokemonList);
    currentIndex = 0;
    score = 0;
    imageElement.src = pokemonList[currentIndex].image;
    input.value = "";
    input.focus();
    scoreDisplay.textContent = "0";
    statusDisplay.textContent = "";
    guessedList.innerHTML = "";
    missedList.innerHTML = "";
    input.disabled = false;
    submitBtn.disabled = false;
    skipBtn.disabled = false;
    clearInterval(timerInterval);
    timerDisplay.textContent = "0:00"; // Reset display
    timerInterval = null; // We'll start it later
    timerStarted = false;
  }

  function addToGuessed(name) {
    const entry = pokemonList.find(p => p.name === name);
    const number = entry.image.match(/\d+/)[0];
  
    // Add to array (if you're tracking) OR directly insert with sorting
    const items = Array.from(guessedList.children);
    const newItem = document.createElement("li");
    newItem.textContent = `#${number.padStart(3, "0")} ${capitalize(name)}`;

  
    // Insert in the right order
    const inserted = items.some((item, i) => {
      const existingNumber = item.textContent.match(/\d+/)[0];
      if (parseInt(number) < parseInt(existingNumber)) {
        guessedList.insertBefore(newItem, item);
        return true;
      }
      return false;
    });
  
    if (!inserted) guessedList.appendChild(newItem);
  
    // Update heading
    guessedHeading.textContent = `✅ Correct (${guessedList.children.length})`;
  }
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

 function addToMissed(name) {
  const entry = pokemonList.find(p => p.name === name);
  const number = entry.image.match(/\d+/)[0].padStart(3, "0");

  const li = document.createElement("li");
  li.textContent = `#${number} ${capitalize(name)}`;
  missedList.appendChild(li);
}

  function updateTimer() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    console.log(`⏱ Timer Tick: ${minutes}:${seconds}`);
    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }
  
  
  const restartBtn = document.getElementById("restart-btn");

  function bounceAndShowNext() {
    label.classList.remove("correct", "wrong", "visible", "bounce-out");
    void label.offsetWidth; // force reflow
    label.classList.add("bounce-out");

  
    setTimeout(() => {
      label.textContent = "";
      label.classList.remove("bounce-out");
      label.style.opacity = 0;
  
      showNextPokemon();
    }, 600);
  }

  restartBtn.addEventListener("click", () => {
    startGame();
  });
  const splashMessage = document.getElementById("splash-message");

  function showLabel(text, isCorrect) {
    label.textContent = text;
    label.classList.remove("bounce-out");
    label.className = isCorrect ? "visible correct" : "visible wrong";
    label.style.opacity = 1;
  }  

  function showNextPokemon() {
    console.log("▶️ Switching to next Pokémon:", currentIndex + 1);
    currentIndex++;
    if (currentIndex < pokemonList.length) {
      imageElement.classList.add("fly-out");

      setTimeout(() => {
        // Switch image after fly-out
        imageElement.src = pokemonList[currentIndex].image;
        imageElement.classList.remove("fly-out");
        imageElement.classList.add("fly-in");

        // Reset input
        input.value = "";
        input.focus();

        // Remove fly-in after it's done
        setTimeout(() => {
          imageElement.classList.remove("fly-in");
        }, 600);
      }, 600);
    } else {
      statusDisplay.textContent = `🎉 All done! Final Score: ${score}/151`;
      input.disabled = true;
      submitBtn.disabled = true;
      skipBtn.disabled = true;
      clearInterval(timerInterval); // <- stops the timer!
    }
  }

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("⌨️ Enter key pressed — clicking submit button");
      submitBtn.click();
    }
  });
    
  submitBtn.addEventListener("click", () => {
    if (!timerStarted) {
      timerStarted = true;
      startTime = Date.now();
      updateTimer(); // Show 0:00 instantly
      timerInterval = setInterval(updateTimer, 1000);
    }
    const rawGuess = input.value.trim().toLowerCase();
    const userGuess = rawGuess.replace(/[^a-z0-9]/g, "");
    const correctName = pokemonList[currentIndex].name.toLowerCase();
    const cleanedCorrect = correctName.replace(/[^a-z0-9]/g, "");
    
    if (
      userGuess === cleanedCorrect ||
      (userGuess === "nidoran" &&
        (correctName === "nidoran-m" || correctName === "nidoran-f"))
    ) {
      score++;
      showLabel("Correct!", true);
      scoreDisplay.textContent = score;
      addToGuessed(pokemonList[currentIndex].name);
    } else {
      showLabel("Wrong!", false);
      addToMissed(pokemonList[currentIndex].name);
    }
  
    setTimeout(bounceAndShowNext, 1200);
  });
  

  skipBtn.addEventListener("click", () => {
    addToMissed(pokemonList[currentIndex].name);
    showLabel("Skipped!", false); // optional message
    setTimeout(bounceAndShowNext, 1500);
  });
  endRunBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerStarted = false;
    input.disabled = true;
    submitBtn.disabled = true;
    skipBtn.disabled = true;
    statusDisplay.textContent = `⏹️ Run ended early! Final Score: ${score}/${pokemonList.length}`;
  }); 
startGame();
};
