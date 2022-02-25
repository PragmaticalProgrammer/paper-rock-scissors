let playerScore = 0;
let computerScore = 0;
let ties = 0;
let rounds = 0;

function result(computerObjet, player, roundResult) {
  let computer = Math.floor(Math.random() * 3);
  choices = ["paper", "rock", "scissors"];

  if (
    (player === "paper" && choices[computer] === "rock") ||
    (player == "rock" && choices[computer] === "scissors") ||
    (player === "scissors" && choices[computer] === "paper")
  ) {
    roundResult.textContent = `Round Result: You win, ${player} beats ${choices[computer]}`;
    computerObjet.style.backgroundImage = `url(images/${choices[computer]}.png)`;
    return 1;
  } else if (player == choices[computer]) {
    roundResult.textContent = `Round Result: It's a tie, you both picked ${player}`;
    computerObjet.style.backgroundImage = `url(images/${choices[computer]}.png)`;
    return 3;
  } else {
    computerObjet.style.backgroundImage = `url(images/${choices[computer]}.png)`;
    roundResult.textContent = `Round Result: You lose, ${choices[computer]} beats ${player}`;
    return 2;
  }
}

function playGame(computer, player, status, roundResult) {
  if (status) {
    computer.classList.add("rainbow-color");
    computer.style.backgroundImage = "url(images/question-mark.png)";
  } else {
    computer.classList.remove("rainbow-color");
    return result(computer, player, roundResult);
  }
}

const computerChoice = document.querySelector("#computerChoice");
const playerChoiceOne = document.querySelector("#playerChoiceOne");
const playerChoiceTwo = document.querySelector("#playerChoiceTwo");
const playerChoiceThree = document.querySelector("#playerChoiceThree");
const spanPlayerScore = document.querySelector("#spanPlayerScore");
const spanComputerScore = document.querySelector("#spanComputerScore");
const spanTies = document.querySelector("#spanTies");
const currentRound = document.querySelector("#currentRound");
const roundResult = document.querySelector("#roundResult");
const matchResult = document.querySelector("#matchResult");

playerChoiceOne.addEventListener("click", function () {
  playGame(computerChoice, "paper", true, roundResult);
  roundResult.textContent = "Round Result: ";
  playerChoiceOne.style.pointerEvents = "none";
  playerChoiceTwo.style.pointerEvents = "none";
  playerChoiceThree.style.pointerEvents = "none";
  if (rounds + 1 > 5) {
    playerScore = 0;
    computerScore = 0;
    ties = 0;
    rounds = 0;
    rounds++;
  } else {
    rounds++;
  }
  currentRound.textContent = `Round: ${rounds}`;
  setTimeout(function () {
    let score = playGame(computerChoice, "paper", false, roundResult);
    if (score == 1) {
      playerScore++;
    } else if (score == 2) {
      computerScore++;
    } else {
      ties++;
    }
    console.log(`player score: ${playerScore}`);
    spanPlayerScore.textContent = playerScore;
    console.log(`computer score: ${computerScore}`);
    spanComputerScore.textContent = computerScore;
    console.log(`ties: ${ties}`);
    spanTies.textContent = ties;
    playerChoiceOne.style.pointerEvents = "auto";
    playerChoiceTwo.style.pointerEvents = "auto";
    playerChoiceThree.style.pointerEvents = "auto";

    if (rounds + 1 == 6) {
      if (playerScore > computerScore) {
        matchResult.textContent = "Match Result: PLAYER WINS!";
      } else if (computerScore > playerScore) {
        matchResult.textContent = "Match Result: Computer WINS!";
      } else if (playerScore == computerScore || ties == 5) {
        matchResult.textContent = "Match Result: It was a tie!";
      }
    }
  }, 3000);
});

playerChoiceTwo.addEventListener("click", function () {
  playGame(computerChoice, "rock", true, roundResult);
  roundResult.textContent = "Round Result: ";
  playerChoiceOne.style.pointerEvents = "none";
  playerChoiceTwo.style.pointerEvents = "none";
  playerChoiceThree.style.pointerEvents = "none";
  if (rounds + 1 > 5) {
    playerScore = 0;
    computerScore = 0;
    ties = 0;
    rounds = 0;
    rounds++;
  } else {
    rounds++;
  }

  currentRound.textContent = `Round: ${rounds}`;
  setTimeout(function () {
    let score = playGame(computerChoice, "rock", false, roundResult);
    if (score == 1) {
      playerScore++;
    } else if (score == 2) {
      computerScore++;
    } else {
      ties++;
    }
    console.log(`player score: ${playerScore}`);
    spanPlayerScore.textContent = playerScore;
    console.log(`computer score: ${computerScore}`);
    spanComputerScore.textContent = computerScore;
    console.log(`ties: ${ties}`);
    spanTies.textContent = ties;

    if (rounds + 1 == 6) {
      if (playerScore > computerScore) {
        matchResult.textContent = "Match Result: PLAYER WINS!";
      } else if (computerScore > playerScore) {
        matchResult.textContent = "Match Result: Computer WINS!";
      } else if (playerScore == computerScore || ties == 5) {
        matchResult.textContent = "Match Result: It was a tie!";
      }
    }
    playerChoiceOne.style.pointerEvents = "auto";
    playerChoiceTwo.style.pointerEvents = "auto";
    playerChoiceThree.style.pointerEvents = "auto";
  }, 3000);
});

playerChoiceThree.addEventListener("click", function () {
  playGame(computerChoice, "scissors", true, roundResult);
  roundResult.textContent = "Round Result: ";
  playerChoiceOne.style.pointerEvents = "none";
  playerChoiceTwo.style.pointerEvents = "none";
  playerChoiceThree.style.pointerEvents = "none";
  if (rounds + 1 > 5) {
    playerScore = 0;
    computerScore = 0;
    ties = 0;
    rounds = 0;
    rounds++;
  } else {
    rounds++;
  }

  currentRound.textContent = `Round: ${rounds}`;
  setTimeout(function () {
    let score = playGame(computerChoice, "scissors", false, roundResult);
    if (score == 1) {
      playerScore++;
    } else if (score == 2) {
      computerScore++;
    } else {
      ties++;
    }

    if (rounds + 1 == 6) {
      if (playerScore > computerScore) {
        matchResult.textContent = "Match Result: PLAYER WINS!";
      } else if (computerScore > playerScore) {
        matchResult.textContent = "Match Result: Computer WINS!";
      } else if (playerScore == computerScore || ties == 5) {
        matchResult.textContent = "Match Result: It was a tie!";
      }
    }

    console.log(`player score: ${playerScore}`);
    spanPlayerScore.textContent = playerScore;
    console.log(`computer score: ${computerScore}`);
    spanComputerScore.textContent = computerScore;
    console.log(`ties: ${ties}`);
    spanTies.textContent = ties;

    if (rounds + 1 == 6) {
      if (playerScore > computerScore) {
        matchResult.textContent = "Match Result: PLAYER WINS!";
      } else if (computerScore > playerScore) {
        matchResult.textContent = "Match Result: Computer WINS!";
      } else if (playerScore == computerScore || ties == 5) {
        matchResult.textContent = "Match Result: It was a tie!";
      }
    }
    playerChoiceOne.style.pointerEvents = "auto";
    playerChoiceTwo.style.pointerEvents = "auto";
    playerChoiceThree.style.pointerEvents = "auto";
  }, 3000);
});
