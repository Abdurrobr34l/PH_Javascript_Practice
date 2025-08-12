//* array-looping-tasks
//* Programming Hero Git repo link of the questions - https://github.com/ProgrammingHero1/array-looping-tasks.git

//* Task 1
// // Write a JavaScript code to reverse the array colors without using the reverse method.
// // Input: 
// // const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// // Output:
// // ['orange', 'yellow', 'green', 'blue', 'red']

// // const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// let colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// let reversedColors = [];

// for (let i = colors.length - 1; i >= 0; i--) {
//   // console.log(colors[i]);
//   reversedColors.push(colors[i]);
// }
// console.log(reversedColors);


//* Task 2
// // Write a JavaScript code to get the even numbers from an array using any looping technique.

// // Input: 
// // const numbers = [12, 98, 5, 41, 23, 78, 46];

// // Output:
// // [12, 98, 76, 46]

// const numbers = [12, 98, 5, 41, 23, 78, 46];
// let evenNumbers = [];

// for(let evenNum of numbers) {
//   // console.log(evenNum);
//   if (evenNum % 2 === 0) {
//     evenNumbers.push(evenNum);
//   }
// }
// console.log(evenNumbers);


//* Task 3
// // Use a for...of loop to concatenate all the elements of an array into a single string.

// // Input:
// // var words = ['Tom', 'Tim', 'Tin', 'Tik']

// // Output:
// // 'TomTimTinTik'

// var words = ['Tom', 'Tim', 'Tin', 'Tik']
// var addingWords = "";

// for (var word of words) {
//   // console.log(word);
//   addingWords += word;
// }
// console.log(addingWords);


//* Task 4 (Hard)
// // Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// // Input:
// // const statement = 'I am a hard working person'

// // Output:
// // 'person working hard a am I'

// const statement = 'I am a hard working person'

// const word = statement.split(' ');
// // console.log(word);
// const wordReversed = word.reverse();
// // console.log(wordReversed);
// const wordAdd = wordReversed.join(' ');
// console.log(wordAdd);


//* Task 5
// // Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

// // Input: [1, 2, 3]

// // Expected Output:
// // Original: [1, 2, 3] Copy: [99, 2, 3]

// let input = [1, 2, 3];
// let copiedInput = input.slice();

// copiedInput[0] = 99;

// console.log(`Original: ${input}`);
// console.log(`Copied: ${copiedInput}`);


//* Task 6
// // Given an array of student objects, print each student’s name and marks.

// let student = [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ];

// // Expected ooutput:
// // John scored 85
// // Alice scored 90

// for (let details of student) {
//   // console.log(details);
//   // console.log(details.name);
//   // console.log(details.marks);

//   console.log(`${details.name} scored ${details.marks}`);
// }

//* Task 7
// // Given a 2D array, update the value at second row first item to 99 and print the updated array.

// // input:
// // [
// //   [1, 2],
// //   [3, 4],
// //   [5, 6]
// // ]

// // Expected Array:
// // [
// //   [1, 2],
// //   [99, 4],
// //   [5, 6]
// // ]

// let numbers = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ];
// numbers[1][0] = 99;
// console.log(numbers);