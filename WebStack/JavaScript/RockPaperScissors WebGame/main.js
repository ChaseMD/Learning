// Cache DOM : convience, better performant
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("userscore");
const compScore_span = document.getElementById("compscore");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randNumber = Math.floor(Math.random() * 3);
  return choices[randNumber];
}

function win(userChoice, compChoice) {
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `Your ${userChoice} beats computer's ${compChoice}. You win!`;
  userChoice_div.classList.add("win");
  setTimeout(() => {
    userChoice_div.classList.remove("win");
  }, 500);
}

function lose(userChoice, compChoice) {
  const userChoice_div = document.getElementById(userChoice);
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `Computer's ${compChoice} beats your ${userChoice}. You lose!`;
  userChoice_div.classList.add("lose");
  setTimeout(() => {
    userChoice_div.classList.remove("lose");
  }, 500);
}

function draw(userChoice, compChoice) {
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `Your ${userChoice} ties computer's ${compChoice}. Draw!`;
  userChoice_div.classList.add("draw");
  setTimeout(() => {
    userChoice_div.classList.remove("draw");
  }, 500);
}

function game(userChoice) {
  const compChoice = getComputerChoice();
  switch (userChoice + compChoice) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      win(userChoice, compChoice);
      break;
    case "RockPaper":
    case "ScissorsRock":
    case "PaperScissors":
      lose(userChoice, compChoice);
      break;
    case "RockRock":
    case "ScissorsScissors":
    case "Paperpaper":
      draw(userChoice, compChoice);
      break;
  }
}

function main() {
  // Event Listeners
  rock_div.addEventListener("click", () => {
    game("Rock");
  });

  paper_div.addEventListener("click", () => {
    game("Paper");
  });

  scissors_div.addEventListener("click", () => {
    game("Scissors");
  });
}

main();
