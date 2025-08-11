//* MODULE-21 ER VIDEO NO.2 THE ENDING EI BOLSILO 2 PRACTICE THIS

//* FINDING SMALL NUMBER INSIDE AN NUMBER ARRAY(Vertically Priviledge)
let numbersArray = [1, 25, 487, 154, 98, 561, 3, 2, 87, 748, 52.89478, 1587,];

function findSmallNum(numbersArray) {
    // let number = numbersArray;
    // return number;

    let smallNumber = numbersArray[0];
    for (const number of numbersArray) {
        // console.log(number);
        if (number < smallNumber) {
            smallNumber = number
        }
    }
    return smallNumber;

}

findSmallNum(numbersArray);
console.log("Small number: " + findSmallNum(numbersArray));


// //* FINDING SMALL NUMBER INSIDE AN NUMBER ARRAY
let largeNum = [1, 25, 487, 154, 98, 561, 3, 2, 87, 748, 52.89478, 1587];

function bigNumber(arrayOfNumbers) {
    let bigNumber = arrayOfNumbers[0];
  for (const number of arrayOfNumbers) {
    // console.log(number);
if (number > bigNumber) {
    bigNumber = number;
}
  }
  return bigNumber
}

bigNumber(largeNum);
console.log("Big number: " + bigNumber(largeNum));