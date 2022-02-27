function resetRoundResult(roundResult) {
  roundResult.textContent = "Round Result:";
}

function resetMatchResult(matchResult) {
  matchResult.textContent = "Match Result:";
}
function modifyMatchResult(matchResult, scores, round) {
  if (round == 5) {
    if (scores.get("userScore") > scores.get("computerScore")) {
      matchResult.textContent = "Match Result: User Wins!";
    } else if (scores.get("userScore") < scores.get("computerScore")) {
      matchResult.textContent = "Match Result: Computer Wins!";
    } else {
      matchResult.textContent = "Match Result: It was a tie!";
    }
  }
}

function modifyRoundResult(roundResult, computer, user, result) {
  user = user.charAt(0).toUpperCase() + user.slice(1);
  computer = computer.charAt(0).toUpperCase() + computer.slice(1);

  if (result == 1) {
    roundResult.textContent = `Round Result: You win! ${user} beats ${computer}.`;
  } else if (result == 2) {
    roundResult.textContent = `Round Result: You lose! ${computer} beats ${user}.`;
  } else {
    roundResult.textContent = `Round Result: It's a tie!`;
  }
}

function modifyScores(spanComputerScore, spanUserScore, spanTies, scores) {
  spanComputerScore.textContent = scores.get("computerScore");
  spanUserScore.textContent = scores.get("userScore");
  spanTies.textContent = scores.get("ties");
}

function calculateRound(player, computer) {
  if (
    (player === "paper" && computer === "rock") ||
    (player == "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper")
  ) {
    // player wins
    return 1;
  } else if (player == computer) {
    // computer and player tie
    return 3;
  } else {
    // player loses
    return 2;
  }
}

function updateScore(scores, result, round) {
  if (round == 1) {
    scores.set("userScore", 0);
    scores.set("computerScore", 0);
    scores.set("ties", 0);
  }

  if (result == 1) {
    scores.set("userScore", scores.get("userScore") + 1);
  } else if (result == 2) {
    scores.set("computerScore", scores.get("computerScore") + 1);
  } else if (result == 3) {
    scores.set("ties", scores.get("ties") + 1);
  }

  return scores;
}

function computerGenerator() {
  choices = ["paper", "rock", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function computerChoiceIcon(card, choice) {
  card.style.backgroundImage = `url(images/${choice}.png)`;
}

function computerQuestionIcon(card) {
  card.style.backgroundImage = `url(images/question-mark.png)`;
}

function rainbowColor(card, conditional) {
  if (conditional == true) {
    card.classList.add("rainbow-color");
  } else {
    card.classList.remove("rainbow-color");
  }
}

function clickLockout(choiceOne, choiceTwo, choiceThree, conditional) {
  if (conditional == true) {
    choiceOne.style.pointerEvents = "none";
    choiceTwo.style.pointerEvents = "none";
    choiceThree.style.pointerEvents = "none";
  } else {
    choiceOne.style.pointerEvents = "auto";
    choiceTwo.style.pointerEvents = "auto";
    choiceThree.style.pointerEvents = "auto";
  }
}

function modifyCurrentRound(round, currentRoundElement) {
  if (round + 1 <= 5) {
    round = round + 1;
  } else {
    round = 1;
  }
  currentRoundElement.textContent = `Round: ${round}`;
  return round;
}

// This is selecting all the elements I need to modify in my program from the HTML with their
// unique ID identifiers
const computerChoiceCard = document.querySelector("#computerChoice");
const userChoiceOne = document.querySelector("#userChoiceOne");
const userChoiceTwo = document.querySelector("#userChoiceTwo");
const userChoiceThree = document.querySelector("#userChoiceThree");
const spanUserScore = document.querySelector("#spanPlayerScore");
const spanComputerScore = document.querySelector("#spanComputerScore");
const spanTies = document.querySelector("#spanTies");
const currentRound = document.querySelector("#currentRound");
const roundResultElement = document.querySelector("#roundResult");
const matchResult = document.querySelector("#matchResult");

// map with all the score values referencabel from a single variable
let scores = new Map();
scores.set("userScore", 0);
scores.set("computerScore", 0);
scores.set("ties", 0);

let round = 0;

// repeated logic for each button, only the first has comments
userChoiceOne.addEventListener("click", function () {
  // Everything here happens as soon as you click
  let userChoice = "paper";
  // this stops user from making more choices while computer is making their selection
  clickLockout(userChoiceOne, userChoiceTwo, userChoiceThree, true);
  // this changes the background color of the computer card to rainbow for 3 seconds
  rainbowColor(computerChoiceCard, true);
  // changes the computer choice card icon to a questionmark while in shifting colors mode
  computerQuestionIcon(computerChoiceCard);
  // changes round
  round = modifyCurrentRound(round, currentRound);
  // this resets the round result and match result elements on click
  resetRoundResult(roundResultElement);
  resetMatchResult(matchResult);
  // this setTimeout lets me pause the game while we play the animation of colors changing
  // everything within setTimeout happens three seconds after you click
  setTimeout(function () {
    // generates a choice for the computer
    let computerChoice = computerGenerator();
    // this changes the icon to computer choice on the card
    computerChoiceIcon(computerChoiceCard, computerChoice);
    // this calculates the result of the round and stores it in a variable resault
    result = calculateRound(userChoice, computerChoice);
    // this updates the scores map with the result of the round
    scores = updateScore(scores, result, round);
    // this modifies the scores displayed to the user
    modifyScores(spanComputerScore, spanUserScore, spanTies, scores);
    // this modifies the round result displayed to the user
    modifyRoundResult(roundResultElement, computerChoice, userChoice, result);
    // this modifies the match result on the fifth and final round displayed for the user
    modifyMatchResult(matchResult, scores, round);
    // this disables clicking of other buttons while we play the color animation
    clickLockout(userChoiceOne, userChoiceTwo, userChoiceThree, false);
    // this gives the computer a shift of colors for it's background
    rainbowColor(computerChoiceCard, false);
  }, 3000);
});

userChoiceTwo.addEventListener("click", function () {
  let userChoice = "rock";
  clickLockout(userChoiceOne, userChoiceTwo, userChoiceThree, true);
  rainbowColor(computerChoiceCard, true);
  computerQuestionIcon(computerChoiceCard);
  round = modifyCurrentRound(round, currentRound);
  resetRoundResult(roundResultElement);
  resetMatchResult(matchResult);
  setTimeout(function () {
    let computerChoice = computerGenerator();
    computerChoiceIcon(computerChoiceCard, computerChoice);
    result = calculateRound(userChoice, computerChoice);
    scores = updateScore(scores, result, round);
    modifyScores(spanComputerScore, spanUserScore, spanTies, scores);
    modifyRoundResult(roundResultElement, computerChoice, userChoice, result);
    modifyMatchResult(matchResult, scores, round);
    clickLockout(userChoiceOne, userChoiceTwo, userChoiceThree, false);
    rainbowColor(computerChoiceCard, false);
  }, 3000);
});

userChoiceThree.addEventListener("click", function () {
  let userChoice = "scissors";
  clickLockout(userChoiceOne, userChoiceTwo, userChoiceThree, true);
  rainbowColor(computerChoiceCard, true);
  computerQuestionIcon(computerChoiceCard);
  round = modifyCurrentRound(round, currentRound);
  resetRoundResult(roundResultElement);
  resetMatchResult(matchResult);
  setTimeout(function () {
    let computerChoice = computerGenerator();
    computerChoiceIcon(computerChoiceCard, computerChoice);
    result = calculateRound(userChoice, computerChoice);
    scores = updateScore(scores, result, round);
    modifyScores(spanComputerScore, spanUserScore, spanTies, scores);
    modifyRoundResult(roundResultElement, computerChoice, userChoice, result);
    modifyMatchResult(matchResult, scores, round);
    clickLockout(userChoiceOne, userChoiceTwo, userChoiceThree, false);
    rainbowColor(computerChoiceCard, false);
  }, 3000);
});
