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

// setting up the trivia questions, options and answers usong arrays
const question: string[] = ["How does a wizard/witch cast a patronus?", "Who tried to kill Harry Potter during his first Quidditch match?", "Where did the members of Dumbledore's army practice defense against the dark arts?", "What was Harry Potter forced to write during detention with Professor Umbridge?", "What is the name of Hagrid’s Hippogriff?", "Why was Ron upset at Hermione when his pet rat, Scabbers, went missing?", "Who was not an Animagus (able to turn into an animal)?", "What do you need to say to use the Marauder’s Map?", "What is the Order of the Phoenix?", "Which house was Harry Potter almost placed in?", "What animal represents Hufflepuff?", "What train station platform do Hogwarts students use to board the Hogwarts Express?", "What is the name of the village close to Hogwarts that the students are allowed to visit?", "Which of the Weasley’s died in the battle of Hogwarts", "Who is the half-blood prince?", "What magical creature can only be seen by those who have witnessed death?", "What position does Harry Potter play on his Quidditch team?", "Which Hogwarts house values bravery and courage the most?", "Who killed Dumbledore?","What spell is used to unlock doors?"];
const optionA: string[] = ["a. By saying Expecto Patronus", "a. Professor Snape", "a. The chamber of secrets", "a. I must not tell lies", "a. Buckbeak", "a. He thought Hermione had stolen Scabbers", "a. James Potter", "a. Mischief managed", "a. A group of Hogwarts students that meet in secret to practice DADA", "a. Slytherin", "a. Ferret", "a. 9 ¼", "a. Hornville", "a. Ron", "a. Draco Malfoy", "a. Hippogriff", "a. Beater", "a. Ravenclaw", "a. Draco Malfoy","a. Exoelliarmus"];
const optionB: string[] = ["b. By throwing their wand at a Dementor", "b. Professor Quirrell", "b. The Shrieking Shack", "b. I must not speak unless spoken to", "b. Nagini", "b. Hermione had used Scabbers to make soup", "b. Minerva McGonagall", "b. I solemnly swear that I am up to no good", "b. A group of Phoenix's lead by Fawkes, Dumbledore's Phoenix", "b. Ravenclaw", "b. Squirrel", "b. 13", "b. Hogsmeade", "b. George", "b. Tom Riddle", "b. Dementor", "b. Chaser", "b. Hufflepuff", "b. Bellatrix Lestrange", "b. Alohomora"];
const optionC: string[] = ["c. By thinking of their happiest memories", "c. Hermione Granger", "c. The Gryffindor common room", "c. The Dark Lord has not returned", "c. Fluffy", "c. He thought Hermione’s cat had killed Scabbers", "c. Alastor (Mad-Eye) Moody", "c. Moony, Wormtail, Padfoot and Prongs", "c. A secret society of witches and wizards that fight against Voldemort", "c. Hufflepuff", "c. Beaver", "c. 9 ¾", "c. Diagon", "c. Fred", "c. Severus Snape", "c. Thestral", "c. Keeper", "c. Gryffindor", "c. Voldemort", "c. Colloportus"];
const optionD: string[] = ["d. By drinking Polyjuice potion", "d. Draco Malfoy", "d. The room of requirements", "d. Harry Potter will not lie", "d. Aragog", "d. Hermione had given Scabbers to Neville", "d. Rita Skeeter", "d. Open", "d. The name of the branch of the ministry of magic that stores prophecies", "d. Gryffindor", "d. Badger", "d. 6 ⅓", "d. Azkaban", "d. Percy", "d. Sirius Black", "d. Basilisk", "d. Seeker", "d. Slytherin", "d. Severus Snape", "d. Nox"];
const answer: string[] = ["c", "b", "d", "a", "a", "c", "c", "b", "c", "a", "d", "c", "b", "c", "c", "c", "d", "c", "d", "b"];

// loop that asks the trivia questions and updated the score based on the users answer
for (let number = 0; number <= 9; number ++) {
  // asking the questions and giving multiple coice options
  console.log(question[number]);
  console.log(optionA[number]);
  console.log(optionB[number]);
  console.log(optionC[number]);
  console.log(optionD[number]);

  //prompting the user to answer the question
  let userAnswer: string = prompt("Enter a, b, c or d: ");
  userAnswer = userAnswer.toLowerCase();

  // updating the score based on the users answer
  if (userAnswer == answer[number]) {
    userScore ++;
    console.log("Great!");
  } else {
    console.log("Wrong :(");
  }

  // dividing line to clearly separate the questions
  console.log("------------------------------------");
}

console.log("Congratulations! You are done Level 1");

//testing to see if the score works with the loop
score();
