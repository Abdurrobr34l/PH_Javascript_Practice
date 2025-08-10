// * NORMAL FUNCTION
function vowels(sentence) {
  // console.log(sentence);

  let countA = 0;
  let countE = 0;
  let countI = 0;
  let countO = 0;
  let countU = 0;

  for (let letter of sentence.toLowerCase()) {
    // console.log(letter);

    if (letter === "a") {
      countA++;
    } else if (letter === "e") {
      countE++;
    } else if (letter === "i") {
      countI++;
    } else if (letter === "o") {
      countO++;
    } else if (letter === "u") {
      countU++;
    }

  }

  console.log(`${countA} letter of a is there`);
  console.log(`${countE} letter of e is there`);
  console.log(`${countI} letter of i is there`);
  console.log(`${countO} letter of o is there`);
  console.log(`${countU} letter of u is there`);
}

vowels("Hi, my name is Raihan");

//* ARROW FUNCTION
const arrowFunctVowel = (someTexts) => {
    // console.log(sentence);

  let countA = 0;
  let countE = 0;
  let countI = 0;
  let countO = 0;
  let countU = 0;

  for (let letter of someTexts.toLowerCase()) {
    // console.log(letter);

    if (letter === "a") {
      countA++;
    } else if (letter === "e") {
      countE++;
    } else if (letter === "i") {
      countI++;
    } else if (letter === "o") {
      countO++;
    } else if (letter === "u") {
      countU++;
    }

  }

  console.log(`${countA} letter of a is there`);
  console.log(`${countE} letter of e is there`);
  console.log(`${countI} letter of i is there`);
  console.log(`${countO} letter of o is there`);
  console.log(`${countU} letter of u is there`);
}
arrowFunctVowel("Hi, my name is Raihan")

//* FOR EACH METHOD
let fruits = ["apple", "banana", "mango"];
fruits.forEach(function nameOfFruit(fruits) {
  console.log(fruits)
})

//? TASK 1 (Use if ForEach Method)
// Write a function countWords that takes a sentence (string) as input and prints how many times each word appears. Use forEach to loop through the array of words.

// Example:
// Input: "apple banana apple orange banana apple"

function countWords(texts) {
  // console.log(texts);

  let words = texts.split(" ")
  let noOfApples = 0;
  let noOfBananas = 0;
  let noOfOranges = 0;

  words.forEach(function word(words) {
    // console.log(words);

    if (words === "apple") {
      noOfApples++;

    } else  if (words === "banana") {
      noOfBananas++;
    } else  if (words === "orange") {
      noOfOranges++;
    }

  })

  console.log(`There are total ${noOfApples} "apple" word`);
  console.log(`There are total ${noOfBananas} "banana" word`);
  console.log(`There are total ${noOfOranges} "orange" word`);

}

countWords("apple banana apple orange banana apple")