//* Here is the GitHub Repo - https://github.com/ProgrammingHero1/js-problems-part1-practice-tasks.git
//* IT IS MODULE-20 PRACTICE TASK

// //* Task-1: Celsius to Fahrenheit
function tempFahrenheit(celsius) {
    let fahrenheit = 32;
    let tempConvertion = (celsius * 9/5) + fahrenheit;  // (0°C × 9/5) + 32
    return tempConvertion;
}

let tempConvertionResult = tempFahrenheit(1) + "°F";
console.log(tempConvertionResult);


// //* Task-2: Count occurrences of a number in an array
function numChecker(numbersArray) {
    let findNum = 5;
    let countNum = 0;
    for (const number of numbersArray) {
        if (number === findNum) {
            countNum++;
        }
    }
    return countNum;
}

let numCheckerResult = numChecker([5, 6, 11, 12, 98, 5]);
console.log(numCheckerResult);  // output: 2


//* Task-3:
// Write a function to count the number of vowels in a string.

function countingVowels(result) {
  // return result;

  let strLowCase = result.toLowerCase()
  // return strLowCase;

  let countVowels = 0;
  for (let letter of strLowCase) {
    // console.log(letter);

    if (letter == "a" ||
        letter == "e" || 
        letter == "i" || 
        letter == "o" || 
        letter == "u") {
          countVowels++;
    }

  }
  return countVowels;
}

// countingVowels("It is a long established fact that a reader will be distracted");
let countingVowelsResult = countingVowels("It is a long established fact that a reader will be distracted");
console.log(`There is ${countingVowelsResult} vowels in this string`);

//* Task-4:
// Write a function to find the longest word in a given string.
// sample-input: I am learning Programming to become a programmer
// sample-output: Programming

function longWord(str) {
  // return str;
  let words = str.split(" ")
  // console.log(words);
  
  let longestWord = "";
  for (let word of words) {
    // longestWord = word;

     if (word.length > longestWord.length) { // check if it's longer
      longestWord = word;
    }

  }
  return longestWord;
}

longWord("I am learning Programming to become a programmer");
let longWordResult = longWord("I am learning Programming to become a programmer");
console.log(longWordResult);

//* Task-5:
// Generate a random number between 10 to 20.
//?NOTE: In JavaScript, (Math.random() * (max - min)) + min is the standard formula for generating a random number between two values.

function numGenerator(min, max) {
  let generateNum = Math.random() * (max - min + 1) + min
  let intNum = Math.floor(generateNum)
  return intNum;
}

let numGeneratorResult = numGenerator(10, 20);
console.log(numGeneratorResult);