//* Here is the GitHub Repo - https://github.com/ProgrammingHero1/B11-js-problems-part2-practice-tasks.git
//* IT IS BATCH-11 JS PRACTICE TASK

//* Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.
function tempFahrenheit(celsius) {
	// return celsius;
	let fahrenheit = 32;
	let tempConvertion = (celsius * 9/5) + fahrenheit; //(0°C × 9/5) + 32
	return tempConvertion;
}

let tempConvertionResult = tempFahrenheit(1) + "°F";
console.log(tempConvertionResult);


//* Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.
// sample-input: numbers = [5,6,11,12,98, 5]

function numChecker(numbersArray) {
	// return numbers;

	let findNum = 5;
	let countNum = 0;
	for (const number of numbersArray) {
		// console.log(number);
		if (number === findNum) {
			countNum++;
		}
	}

	return ( findNum, countNum );
}

let numCheckerResult = numChecker([5, 6, 11, 12, 98, 5]);
console.log(numCheckerResult);


//* Task-3
// Your task is to calculate the total budget required to buy electronics:
//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(prices, laptopQnt, tabletQnt, mobileQnt) {
    // console.log(electronics);

    const totalMoney = (prices[0] * laptopQnt) + (prices[1] * tabletQnt) + (prices[2] * mobileQnt);
    return totalMoney;

}

// (calculateElectronicsBudget([35000, 15000, 20000]));
const result = calculateElectronicsBudget([35000, 15000, 20000], 2, 4, 7);
console.log(`${result} tk is required to buy this electronics`);


//* Task-4
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones) {
    // console.log(phones);

    let totalModels = 0;
    let totalModelPrice = 0;

    for (const info of phones) {
        // console.log(info);
        // console.log(info.price);
        totalModels++;
        totalModelPrice += info.price;
    }

    let avg = totalModelPrice / totalModels;

    return avg;
}

// findAveragePhonePrice(phones);
let results = (findAveragePhonePrice(phones));
console.log(result.toFixed(2));


//* Task-5 (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function totalSalary(employees) {
    // return employees;

    let total = 0;
    for (const info of employees) {
        // console.log(info);

        const currentSalary = info.starting + (info.experience * info.increment);
        total += currentSalary;
    }
    

    return total;
}

// totalSalary(employees)
const totalSalaryPerMonth = totalSalary(employees);
console.log(totalSalaryPerMonth);