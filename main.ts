/**
 * @author Zoe Wrubleski
 * @version 1.0.0
 * @date 2026-01-13
 * @fileoverview This program asks trivia questions based on Harry Potter and allows the user to answer
 */

// set variables
const maxScore: number = 20;
let userScore: number = 0;
function score(): string {
  console.log(userScore + "/" + maxScore)
};

// testing if function is set up correct and score is able to update
userScore = userScore +1;
score();

userScore = userScore + 1;
score();

console.log("\nDone");
