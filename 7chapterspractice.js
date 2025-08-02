// *Q1. Student Grading System
// // You have student data like this:
// let students = [
//   { name: "Sakib", scores: { math: 80, english: 65, science: 90 } },
//   { name: "Tamim", scores: { math: 40, english: 55, science: 60 } },
//   { name: "Litton", scores: { math: 10, english: 80, science: 95 } }
// ];

// // ✅ Tasks:
// // Print each student’s name and their average score.
// // If a student’s average is >= 70, print "Passed" else "Failed".


// for (let studentsName of students) {
//   // ?each students name
//   // console.log(studentsName.name);

//   // ?no. of subjects
//   let totallSubject = Object.keys(studentsName.scores).length;
//   // console.log(totallSubject);

//   // ?each students average mark
//   let math = studentsName.scores.math;
//   let english = studentsName.scores.english;
//   let science = studentsName.scores.science;
//   let average = (math + english + science) / totallSubject;
//   // console.log(`${studentsName.name} average mark is ${average}`);

//   // ?each students passed/failed
//   if (average >= 70) {
//     console.log(`${studentsName.name} is passed`)
//   } else {
//     console.log(`${studentsName.name} is failed`)
//   }
// }


// *Q2. Employee Attendance Tracker
// let employees = [
//   { name: "Rahim", present: true },
//   { name: "Karim", present: false },
//   { name: "Nazia", present: true },
//   { name: "Mitu", present: false }
// ];

// // ✅ Tasks:
// // Show how many employees were present today.
// // Print the names of all absent employees.

// let noOfEmployeesPresent = 0;
// for (let employee of employees) {
//   // console.log(employee.name);
//   // console.log(employee.present);
//   if (employee.present === true) {
//     // noOfEmployeesPresent = noOfEmployeesPresent + 1;
//     noOfEmployeesPresent++;
//   } else {
//     console.log(`${employee.name} was not present`);
//   }
// }
// console.log(`${noOfEmployeesPresent} employees were present`);


// // *Q3. E-commerce Cart Total Calculator
// let cart = [
//   { product: "Shirt", price: 500, quantity: 2 },
//   { product: "Pant", price: 900, quantity: 1 },
//   { product: "Shoes", price: 1200, quantity: 0 }
// ];

// // ✅ Tasks:
// // Calculate and print the total payable amount (exclude items with quantity 0).
// // Print the name of the product with the highest total value (price × quantity).

// for (let productTotallPrice of cart) {
//   // console.log(productTotallPrice.price);
//   // console.log(productTotallPrice.quantity);

//   let totall = (productTotallPrice.price * productTotallPrice.quantity);
//   if (productTotallPrice.quantity >= 1) {
//     console.log(`${productTotallPrice.product}: ${totall} taka`);
//   }
// }


// *Q4. Travel Group Organizer
// let travelers = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 15 },
//   { name: "Diana", age: 30 }
// ];

// // ✅ Tasks:
// // Separate travelers into two groups: Adults (age >= 18) and Minors (age < 18).
// // Print the names in both groups separately.
// let adults = [];
// let minors = [];
// for (let travelerAge of travelers) {
//   // console.log(travelerAge.age)
//   if (travelerAge.age >= 18) {
//     adults.push(travelerAge.name);
//   } if (travelerAge.age < 18) {
//     minors.push(travelerAge.name);
//   }
// }
// console.log(`Adults: ${adults}`)
// console.log(`Minors: ${minors}`)


// *Q5.What will you do to get the total age?
// let students = [
//   { name: "A", age: 18 },
//   { name: "B", age: 20 },
//   { name: "C", age: 22 }
// ];

// let agess = 0;
// for (let stuAge of students) {
//   // console.log(stuAge.age);
//   agess += stuAge.age;
// }
// console.log(`Total age is ${agess}`);


// *Q6. How do you loop and print only the products with quantity greater than 0?
// let products = [
//   { name: "Pen", quantity: 3 },
//   { name: "Book", quantity: 0 },
//   { name: "Bag", quantity: 5 }
// ];

// for (let productQnt of products) {
//   // console.log(productQnt.quantity)
//   if (productQnt.quantity > 0) {
//     console.log(productQnt.name);
//   }
// }


// *Q7. Count the number of "a" in a sentence
// let sentence = "JavaScript is amazing";

// let noOfA = 0;
// let sentenceLowerCase = sentence.toLowerCase();
// // console.log(sentenceLowerCase);

// for (let letters of sentence) {
//   // console.log(letters);
//   if (letters === "a") {
//     noOfA++;
//   }
// }
// console.log(noOfA);


// *Q8. Check if the sentence contains "js" (case-insensitive)
// let input = "I love JS and coding!";
// // ?Convert the input to lowercase and check if it contains "js".

// let inputLowerCase = input.toLowerCase();
// // console.log(inputLowerCase)

//   if (inputLowerCase.includes("js")) {
//     console.log("We have js written in this input")
//   } else {
//     console.log("We do not have js written in this input")
//   }


// *Q9. Print only the vowels from a string
// let word = "Programming";
// // ?Use loop + condition to print all vowels (a, e, i, o, u) in the word.

// let wordLowerCase = word.toLowerCase();
// for (let wordLetters of wordLowerCase) {
//   // console.log(wordLetters);
//   if (wordLetters === "a" || wordLetters === "e" || wordLetters === "i" || wordLetters === "o" || wordLetters === "u") {
//     console.log(wordLetters);
//   }
// }


// *Q10. Slice the first 6 characters from a string and make them uppercase
// let phrase = "developer life";
// // ?>Output: "DEVELO"

// let phraseSlicing = phrase.slice(0, 6);
// // console.log(phraseSlicing);
// let remainingPhrase = phrase.slice(6); 
// // console.log(remainingPart);
// let phraseUpperCase = phraseSlicing.toUpperCase();
// console.log(phraseUpperCase + remainingPhrase);