//* 2. Interview-Style Questions
// These sharpen your problem-solving for jobs:

// //? Write a function that finds the second largest number in an array.
let numAry = [5, 659, 8, 2532, 89, 65, 621, 52, 526, 58, 95];

function secLargNum(numAry) {
  let bigNum = -Infinity;
  let SecbigNum = -Infinity;

  for (let number of numAry) {
    // console.log(numAry[number])
    if (number > bigNum) {
      SecbigNum = bigNum
      bigNum = number;
    } else if (number > SecbigNum && number < bigNum) {
      SecbigNum = number;
    }
  }

  return { bigNum, SecbigNum };
}

let secLargNumResult = secLargNum(numAry);
console.log(secLargNumResult);

//? Reverse a string without using .reverse().
let str = "Hello World";
let revStr = "";

for (let letter of str) {
  revStr = letter + revStr
}
console.log("Reversed String:" + revStr);


//? Check if a string is a palindrome (e.g., "madam").
// let str = "madam";
if (str === revStr) {
  console.log("It is a palindrome");
} else {
  console.log("It is not palindrome");
}

//? Find the most frequent element in an array.
let num = [2, 9, 7, 8, 3, 9, 7, 1, 3, 8, 7, 9, 4, 3, 6, 9, 5, 8, 5]

let count = {};
for (let number of num) {
  if (count[number]) {
    count[number] = count[number] + 1;
  } else {
    count[number] = 1;
  }
}
// console.log(count);

let final = 0;
let number = null;
for (let num in count) {
  console.log(num);

  if (count[num] > final) {
    final = count[num];
    number = num
  }

}
console.log(number + ":" + final);



//? Write a function that removes all duplicate elements from an array.
let duplNum = [2, 9, 7, 8, 3, 9, 7, 1, 3, 8, 7, 9, 4, 3, 6, 9, 5, 8, 5]

function singleNumber(duplNum) {
  let newNum = [];
  for (let number of duplNum) {
    if (!newNum.includes(number)) {
      newNum.push(number);
    }
  }
  return newNum;
}

let singleNumberResult = singleNumber(num);
console.log(singleNumberResult);