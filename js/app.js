let player = {
  currentChoice: null,
};

let computer = {
  currentChoice: null,
};

function playerButton(e) {
  const options = ["lapiz", "papyrus", "scalpellus"];

  if (e.target.id == "lapiz") {
    player.currentChoice = options[0];
  } else if (e.target.id == "papyrus") {
    player.currentChoice = options[1];
  } else {
    player.currentChoice = options[2];
  }

  function computerChooses() {
    const randomIndex = Math.floor(Math.random() * options.length);
    computer.currentChoice = options[randomIndex];
  }

  computerChooses();

  function compareChoices() {
    let resultDisplay = document.getElementById("game-result");

    if (player.currentChoice === computer.currentChoice) {
      resultDisplay.innerText =
        "It's a tie! The computer chose " +
        computer.currentChoice +
        " and the player chose " +
        player.currentChoice;
    } else if (player.currentChoice == options[0]) {
      if (computer.currentChoice == options[2]) {
        resultDisplay.innerText =
          "The player wins! The player chose " +
          player.currentChoice +
          " and the computer chose " +
          computer.currentChoice +
          ".";
      } else {
        resultDisplay.innerText =
          "The computer wins! The player chose " +
          player.currentChoice +
          " and the computer chose " +
          computer.currentChoice +
          ".";
      }
    } else if (player.currentChoice == options[1]) {
      if (computer.currentChoice == options[0]) {
        resultDisplay.innerText =
          "The player wins! The player chose " +
          player.currentChoice +
          " and the computer chose " +
          computer.currentChoice +
          ".";
      } else {
        resultDisplay.innerText =
          "The computer wins! The player chose " +
          player.currentChoice +
          " and the computer chose " +
          computer.currentChoice +
          ".";
      }
    } else if (player.currentChoice == options[2]) {
      if (computer.currentChoice == options[1]) {
        resultDisplay.innerText =
          "The player wins! The player chose " +
          player.currentChoice +
          " and the computer chose " +
          computer.currentChoice +
          ".";
      } else {
        resultDisplay.innerText =
          "The computer wins! The player chose " +
          player.currentChoice +
          " and the computer chose " +
          computer.currentChoice +
          ".";
      }
    } else {
      resultDisplay.innerText =
        "There is a tie! The computer and the player chose " +
        computer.currentChoice +
        ".";
    }
  }

  compareChoices();
}

document.getElementById("lapiz").addEventListener("click", playerButton);
document.getElementById("papyrus").addEventListener("click", playerButton);
document.getElementById("scalpellus").addEventListener("click", playerButton);
