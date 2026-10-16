let score = JSON.parse(localStorage.getItem("score")) || {
  Wins: 0,
  Losses: 0,
  Tie: 0,
};

updateScoreElement();

function updateScore(result) {
  if (result === "You win") {
    score.Wins += 1;
  } else if (result === "Tie") {
    score.Tie += 1;
  } else if (result === "You lose") {
    score.Losses += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();
}

function updateGameDisplay(result, playerMove, computerMove) {
  document.querySelector(".result-js").innerHTML = `${result}`;

  document.querySelector(".move-js").innerHTML =
    `You
    <img id="playerMove" src="./${playerMove}.png">
    <img id="playerMove" src="./${computerMove}.png">
    Computer`;
}

function getCompMove() {
  const randomNum = Math.random();
  let computerMove = "";

  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNum >= 2 / 3 && randomNum < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}

function getResult(playerMove, computerMove) {
  let result = "";
  if (playerMove === computerMove) {
    result = "Tie";
  } else if (
    (playerMove === "Rock" && computerMove === "Scissors") ||
    (playerMove === "Paper" && computerMove === "Rock") ||
    (playerMove === "Scissors" && computerMove === "Paper")
  ) {
    result = "You win";
  } else {
    result = "You lose";
  }

  return result;
}

function updateScoreElement() {
  document.querySelector(".score-js").innerHTML =
    `Wins: ${score.Wins}. Losses: ${score.Losses}. Ties: ${score.Tie}`;
}

const rockButton = document.querySelector("#rock");

rockButton.addEventListener("click", function () {
  let computerMove = getCompMove();

  let result = getResult("Rock", computerMove);

  updateScore(result);

  updateGameDisplay(result, "Rock", computerMove);
});

const paperButton = document.querySelector("#paper");

paperButton.addEventListener("click", function () {
  let computerMove = getCompMove();

  let result = getResult("Paper", computerMove);

  updateScore(result);

  updateGameDisplay(result, "Paper", computerMove);
});

const scissorsButton = document.querySelector("#scissors");

scissorsButton.addEventListener("click", function () {
  let computerMove = getCompMove();

  let result = getResult("Scissors", computerMove);

  updateScore(result);

  updateGameDisplay(result, "Scissors", computerMove);
});

const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function () {
  score.Wins = 0;
  score.Losses = 0;
  score.Tie = 0;

  localStorage.removeItem("score");
  updateScoreElement();
});

