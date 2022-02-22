function computerPlay() {
  let choices = ["paper", "rock", "scissors"];
  let choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function userPlay() {
  let choice = prompt("Rock, Paper or Scissors? ").toLowerCase();
  return choice;
}

function playRound(user, computer) {
  if (
    (user === "paper" && computer === "rock") ||
    (user == "rock" && computer === "scissors") ||
    (user === "scissors" && computer === "paper")
  ) {
    console.log(`You win, ${user} beats ${computer}`);
    return 1;
  } else if (user == computer) {
    console.log(`It's a tie, you both picked ${user}`);
    return;
  } else {
    console.log(`You lose, ${computer} beats ${user}`);
    return 2;
  }
}

function game() {
  let compScore = 0;
  let userScore = 0;

  for (i = 0; i < 5; i++) {
    let result = playRound(userPlay(), computerPlay());

    if (result === 1) {
      userScore += 1;
    } else if (result == 2) {
      compScore += 1;
    }
  }

  if (userScore > compScore) {
    return `You won with a final score of ${userScore} and the computer had ${compScore}`;
  } else if (compScore > userScore) {
    return `You lost with a final score of ${userScore} and the computer had ${compScore}`;
  } else {
    return `It's a tie! Final score for both ${userScore}`;
  }
}

console.log(game());
