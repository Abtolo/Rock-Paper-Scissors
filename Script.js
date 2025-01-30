"use strict";

const buttonClicked = document.querySelector(".photoClicked");
const userChoiceDisplay = document.querySelector(".you-choice");
const computerChoiceDisplay = document.querySelector(".computer-choice");
const buttons = document.querySelectorAll(".photoBtn");
let scores = [0, 0];
let userScore = document.querySelector(".user-score");
let compScore = document.querySelector(".comp-score");
const textScore = document.querySelector(".text-scoring");

const generateComputerChoice = function (boolean, number) {
  const choices = ["Rock", "Paper", "Scissors"];
  if (boolean === 0) {
    return choices[number];
  }
  let randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
};

const playgame = function (playerChoices, computerChoice) {
  userChoiceDisplay.setAttribute("src", `Images/${playerChoices}.png`);
  computerChoiceDisplay.setAttribute("src", `Images/${computerChoice}.png`);

  console.log(scores[0]);

  if (playerChoices === "Rock" && computerChoice === "Scissors") {
    textScore.textContent = "You Win, 1 point for you";
    scores[0] += 1;
    userScore.textContent = "Score : " + scores[0];
  } else if (playerChoices === "Rock" && computerChoice === "Paper") {
    textScore.textContent = "Computer Wins, 1 point for computer";
    scores[1] += 1;
    compScore.textContent = "Score : " + scores[1];
  } else if (playerChoices === "Paper" && computerChoice === "Rock") {
    textScore.textContent = "You Win, 1 point for you";
    scores[0] += 1;
    userScore.textContent = "Score : " + scores[0];
  } else if (playerChoices === "Paper" && computerChoice === "Scissors") {
    textScore.textContent = "Computer Wins, 1 point for computer";
    scores[1] += 1;
    compScore.textContent = "Score : " + scores[1];
  } else if (playerChoices === "Scissors" && computerChoice === "Rock") {
    textScore.textContent = "Computer Wins, 1 point for computer";
    scores[1] += 1;
    compScore.textContent = "Score : " + scores[1];
  } else if (playerChoices === "Scissors" && computerChoice === "Paper") {
    textScore.textContent = "You Win, 1 point for you";
    scores[0] += 1;
    userScore.textContent = "Score : " + scores[0];
  } else if (playerChoices === computerChoice) {
    textScore.textContent = "It's a Tie";
  }
};

// Heres I determine what the players choice is and the computers choice then I play the game using the function
for (let index = 0; index < 4; index++) {
  buttons[index].addEventListener("click", function () {
    const player = generateComputerChoice(0, index);
    const comp = generateComputerChoice(1, 0);
    playgame(player, comp);
  });
}
