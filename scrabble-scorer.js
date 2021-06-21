// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble!\n\n");
   enteredWord = input.question("Enter a word to score: ");

   while (!/^[A-Z a-z]+$/.test(enteredWord)){
     console.log("Invalid input. Try again.");
     enteredWord = input.question("Enter a word to score: ");
    }

   return enteredWord
   //console.log(oldScrabbleScorer(enteredWord));
};






let simpleScore = function(word){
  word=String(word);
  return simpleScore=word.length
};

let vowelBonusScore = function(word) {
  word = word.toUpperCase();
	let score = 0;

  for (let i=0; i<word.length; i++){
    if (word[i] === "A" || word[i] === "E" || word[i] === "I" || word[i] === "O" || word[i] === "U"){
      score += 3;
    } else {
      score +=1;
    }
  }
  return score;
};


let scrabbleScore = function(word){
  word = word.toLowerCase();
	let score = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (each in newPointStructure) {

      if (each === word[i]) {
			  score = score + Number(newPointStructure[each]);
        continue;
		  }
 
	  }
	}
	return score;
};




const scoringAlgorithms = [
  {name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scorerFunction: simpleScore
  },
  {name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.", 
  scorerFunction: vowelBonusScore
  },
  {name: "Scrabble",
  description: "The traditional scoring algorithm", 
  scorerFunction: scrabbleScore
  }
];



function scorerPrompt() {
  console.log(`Which scoring algorithm would you like to use?

0 - Simple: One point per character
1 - Vowel Bonus: Vowels are worth 3 points
2 - Scrabble: Uses scrabble point system`);
  let scoreMethodPicked = input.question("Enter 0, 1, or 2: ");

  while (scoreMethodPicked!=="0" && scoreMethodPicked!=="1" && scoreMethodPicked!=="2"){
    console.log("Invalid input. Try again.");
    scoreMethodPicked = input.question("Enter 0, 1, or 2: ");
  }
  return scoringAlgorithms[scoreMethodPicked];
}


function transform(obj) {
  let transformedObj = {};
  let letterLowercase = "";
  let letterUppercase = "";

  for (let i=97; i<123; i++){
    letterLowercase = String.fromCharCode(i);
    letterUppercase = String.fromCharCode(i-32);

    for (each in obj){
      if (obj[each].includes(letterUppercase)){
        transformedObj[letterLowercase] = each;
      } else {
      }
    }
  }

  transformedObj[" "] = "0";

  return transformedObj;
};

let newPointStructure=transform(oldPointStructure);



function runProgram() {
   let wordToScore = initialPrompt();
   //console.log(simpleScore("apple"))
   //console.log(vowelBonusScore("apple"))
   //console.log(scoringAlgorithms[0].description)
   let scoringObject=scorerPrompt();
   //console.log(scoringObject);
   let score = scoringObject.scorerFunction(wordToScore);
   console.log(`Score for '${wordToScore}': ${score}\n`)
}




// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

