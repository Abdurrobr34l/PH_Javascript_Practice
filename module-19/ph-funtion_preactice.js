//* IT IS AN PRACTICE TASK FROM PH OF MODULE-19, LINK TO THE GIT REPO - https://github.com/ProgrammingHero1/js-function-practice-tasks.git

//* Task-1
// // Take four parameters. Multiply the four numbers and then return the result

// function num(num1, num2, num3, num4) {
//   let multiply = num1 * num2 * num3 * num4;
//   return multiply;
//   // return num1 * num2 * num3 * num4;
// }
// console.log(num(10, 10, 10, 10));


//* Task-2
// // Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// let num = [1, 695, 9, 3, 2, 89, 2, 945, 63];

// function oddEvenNum(numbers) {
//   let results = [];
//   for (let number of numbers) {
//     // console.log(number);

//     if (number % 2 === 1) {
//       let result = number *2;
//       results.push(result);
//       console.log(`Odd Number Result: ${result}`)
//     } else {
//       let result = number /2;
//       results.push(result);
//       console.log(`Even Number Result: ${result}`)
//     }

//   }
//   return results;
// }
// let output = oddEvenNum(num);
// console.log(output);


//* Task-3
// // Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// let numArray = [12, 7, 25, 3, 18, 42, 9, 30];

// function make_avg(integers) {
//   console.log(`Total numbers inside the array is: ${integers.length}`);

//   let average = 0;
//   for (const numAvg of integers) {
//     // console.log(numAvg);
//     average += numAvg;
//   }
//   console.log(`The average of this array is: ${average / integers.length}`);

// }
// make_avg(numArray);


//* Task-4
// // Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// function count_zero(binaryString) {
//   // console.log(binaryString);

//   let zeroCount = 0;
//   let OneCount = 0;

//   for (let findNum of binaryString) {
//     // console.log(findNum);
//     if (findNum === "0") {
//       zeroCount += 1;
//     } if (findNum === "1") {
//        OneCount += 1;
//     }
//   }

//   return {zeroCount, OneCount};

// }
// let result = count_zero("010110101001101101");
//   console.log(`No of Zero's: ${result.zeroCount}`);
//   console.log(`No of One's: ${result.OneCount}`);


//* Task-5
// // Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
// function odd_even(integers) {
//   // console.log(integers.length); //9 integers

//   let evenNumbers = [];
//   let oddNumbers = [];

//   for (let number of integers) {
//     // console.log(number);
    
//     if (number % 2 === 0) {
//       evenNumbers.push(number);
//       // console.log("Even number: " + number)
//     } if (number % 2 === 1) {
//       oddNumbers.push(number);
//     }
    
//   }

//   return {evenNumbers, oddNumbers};

// }
// let output = odd_even([12, 69, 6, 8, 947, 3, 78, 45, 647]);
// console.log(`Even Numbers:`, output.evenNumbers);
// console.log(`Odd Numbers:`, output.oddNumbers);