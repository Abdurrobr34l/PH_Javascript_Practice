//? Task-1:
// Count how many times a string has the letter a
let texts = "Check if the student has passed all subjects";
let textsLowerCase = texts.toLowerCase();
let textCounter = 0;

// console.log(texts);
// console.log(textsLowerCase);
for (let i=0; i<textsLowerCase.length; i++) {
  // console.log(textsLowerCase[i]);
  if (textsLowerCase[i] === "a") {
    textCounter++;
  }
}
console.log(textCounter);

//? Task-2:
// Count how many times a string has the letter a or A
let text = "Check if the student has passed all subjects JAVASCRIPT";
let textCounters = 0;

// console.log(text);
for (let i=0; i<text.length; i++) {
  // console.log(text[i]);
  if (text[i] === "A" || text[i] === "a") {
    textCounters++;
  }
}
console.log(textCounters);

//? Task-3:
// Check whether a string contains all the vowels a, e, i, o, u

//? Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

//? Task-5:
// Capitalize Every first Letter of each word in a String