// DAY 2: Rock, Paper, Scissors

/** Part ONE */

// A, X: Rock; Score: 1
// B, Y: Paper; Score: 2
// C, Z: Scissors; Score: 3

// Win: 6
// Draw: 3
// Lose: 0

const { readInput } = require("../file-read.js");

const input = readInput("input.txt");

const gamePairs = input
  .filter((game) => game !== "")
  .map((game) => game.split(" "));

function getScore(game) {
  const [them, me] = game;
  let score;

  // hand score + outcome score
  if (them === "A" && me === "X") {
    // Rock vs Rock
    score = 1 + 3;
  } else if (them === "A" && me === "Y") {
    // Rock vs Paper
    score = 2 + 6;
  } else if (them === "A" && me === "Z") {
    // Rock vs Scissors
    score = 3 + 0;
  } else if (them === "B" && me === "X") {
    // Paper vs Rock
    score = 1 + 0;
  } else if (them === "B" && me === "Y") {
    // Paper vs Paper
    score = 2 + 3;
  } else if (them === "B" && me === "Z") {
    // Paper vs Scissors
    score = 3 + 6;
  } else if (them === "C" && me === "X") {
    // Scissors vs Rock
    score = 1 + 6;
  } else if (them === "C" && me === "Y") {
    // Scissors vs Paper
    score = 2 + 0;
  } else if (them === "C" && me === "Z") {
    // Scissors vs Scissors
    score = 3 + 3;
  }

  return score;
}

console.log(
  "Part one answer: ",
  gamePairs.map(getScore).reduce((acc, score) => acc + score, 0)
);

/** Part TWO */

// X: lose
// Y: draw
// Z: win

function getRealScore(game) {
  const [them, me] = game;
  let score;

  // hand score + outcome score
  if (them === "A" && me === "X") {
    // Rock and lose
    score = 3 + 0;
  } else if (them === "A" && me === "Y") {
    // Rock and draw
    score = 1 + 3;
  } else if (them === "A" && me === "Z") {
    // Rock and win
    score = 2 + 6;
  } else if (them === "B" && me === "X") {
    // Paper and lose
    score = 1 + 0;
  } else if (them === "B" && me === "Y") {
    // Paper and draw
    score = 2 + 3;
  } else if (them === "B" && me === "Z") {
    // Paper and win
    score = 3 + 6;
  } else if (them === "C" && me === "X") {
    // Scissors and lose
    score = 2 + 0;
  } else if (them === "C" && me === "Y") {
    // Scissors and draw
    score = 3 + 3;
  } else if (them === "C" && me === "Z") {
    // Scissors and win
    score = 1 + 6;
  }

  return score;
}

console.log(
  "Part two answer: ",
  gamePairs.map(getRealScore).reduce((acc, score) => acc + score, 0)
);
