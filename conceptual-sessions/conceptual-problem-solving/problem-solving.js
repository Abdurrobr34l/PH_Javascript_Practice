//* Here is the GitHub Repo - https://github.com/ferdouszihad/problem-solving-with-js.git
//* IT IS Milestone 04: JavaScript Problem Solving(CONCEPTUAL CLASS)

//* Task 1 :
// Create a Function sum which take 2 value and return the sum of 2 number
// Create a Function multiply which take 2 value and return the sum of 2 number
// Suppose you have 2 numbers a , b print the sum of ( a + b) and ( a x b ) using sum and
// multiply function.

// ?Sum
function sum(num1, num2) {
  return num1 + num2;
}
let sumResult = sum(4, 5);
// console.log(sumResult);

// ?Multiply
function multiply(num1, num2) {
  return num1 * num2;
}
let multiplyResult = multiply(4, 5);
// console.log(multiplyResult);

let total = sumResult + multiplyResult;
console.log(total);


//* Task 2:
// Create a function sumOfArray which takes an array and returns the sum of that array. If the
// input is not an array and if any data not a number found in the array , it will return ‘Invalid’

function sumOfArray(array) {
  // return ary;

  //? Checking is input is an array/not
  if (!Array.isArray(array)) {
    return "Invalid, not an array";
  }

  let sumOfNum = 0;
  for (let num of array) {
    // console.log(num)
    //? Is all no. in the Array is no.
    if (typeof num !== "number") {
      return "Invalid Input";
    }

    //? Return Array Sum
    sumOfNum += num;
  }
  return sumOfNum;
}

let sumOfArrayResult = sumOfArray([1, 2, 3]);
console.log(sumOfArrayResult);


//* Task 3 : Develop a way to think about solving problems
// Create a function countVowels which take a string as input and returns the total number of
// vowels in that string
// If the input is not a string return "Invalid"

function countVowels(vowelsStr) {
  // return vowelsStr;

  if (typeof vowelsStr !== "string") {
    return "Invalid";
  }

  let vowelsCounting = 0;
  for (let letters of vowelsStr) {

    if (letters === "a" ||
      letters === "e" ||
      letters === "i" ||
      letters === "o" ||
      letters === "u"
    ) {
      vowelsCounting++;
    }

  }
  return vowelsCounting;
}

const str = "108";
let countVowelsResult = countVowels(str);
console.log(countVowelsResult);


//! PROBLEM-01 : Calculate the cash-out Charge
function cashOut(money) {
  // return money;

  if (typeof money !== "number" || money < 0) {
    return "Invalid";
  }

  let cashOutCharge = 0.0175; //1.75%
  // return charge;

  let charge = money * cashOutCharge;
  let chargeFixedValue = parseFloat(charge.toFixed(2))

  return chargeFixedValue;
}

let cashOutResult = cashOut(2000);
console.log(cashOutResult);


//! PROBLEM-02 : Valid Bangladeshi contact

function validContact(contact) {
  // return contact

  if (typeof contact !== "string") {
    return "Invalid";
  }

  if (contact.includes(" ")) {
    return false;
  }

  if (contact.length !== 11) {
    return false;
  }

  if (!contact.startsWith("01")) {
    return false;
  }

  return true;

}

let validContactResult = validContact("01819234567");
console.log(validContactResult);


//! PROBLEM-03 : Admission Success (📚 Will He Succeed?)

function willSuccess(marks) {
  // return marks;

  if (!Array.isArray(marks)) {
    return "Invalid";
  }

  if (marks.length === 0) {
    return false;
  }

  let passingMark = 0;
  let failMark = 0;

  for (let mark of marks) {
    // console.log(mark);

    if (mark >= 50) {
      passingMark++;
    }

    if (mark < 50) {
      failMark++;
    }

  }

  if (passingMark === failMark) {
    return false;
  }

  if (passingMark > failMark) {
    return true;
  } else if (passingMark < failMark) {
    return false;
  }

  // return {passingMark, failMark};

}

let willSuccessResult = willSuccess([60, 70, 80, 40, 30]);
console.log(willSuccessResult);


//! PROBLEM-04: Valid Proposal

function validProposal(person1, person2) {
  // return {person1, person2};

  if (typeof person1 !== "object" || person1 === null || typeof person2 !== "object" || person2 === null) {
    return "Invalid";
  }


  if (person1.gender !== person2.gender && Math.abs(person1.age - person2.age) <= 7) {
    return true;
  } else {
    return false;
  }

}

let validProposalResult = validProposal(
  { name: "Rahul", gender: "male", age: 28 },
  { name: "Joya", gender: "female", age: 21 }
);
console.log(validProposalResult);


//! PROBLEM-05: Let’s Calculate Total Sleep Time

// 1hr = 3600sec
// 1min = 60sec
// Output Formate: { hour:14 , minute: 46 , second: 3 }

function calculateSleepTime(times) {
  // return times;

  let totalSec = 0;

  for (let sec of times) {

    if (typeof sec !== "number") {
      return "Invalid";
    }

    totalSec += sec;
  }

  let hr = Math.floor(totalSec / 3600);
  let remainder = totalSec % 3600;

  let min = Math.floor(remainder / 60);

  let sec = Math.floor(remainder % 60);

  return {hour:hr, minute:min, second:sec};
}

let calculateSleepTimeResult = calculateSleepTime([1000, 499, 519, 300]);
console.log(calculateSleepTimeResult);