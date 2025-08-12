// //* THIS QUESTION ARE OF PH-BATCH 11 4TH ASSINGMENT, HERE IS THE LINK TO THE GOOGLE DOC - https://docs.google.com/document/d/1e1Vu3YkG-Dkw_BJWDTNXFYwVyfoyHs0YU7r-pPh5hcc/edit?tab=t.0

//* Problem - 1(basic math)
// // তোমাকে cubeNumber() নামে একটা function দেওয়া হয়েছে। functionটা একটা positive input নাম্বার নিবে। 
// // Task:
// // input নাম্বারটাকে cube করে result টা রিটার্ন করবে ফাংশন থেকে।
// // Bonus: ইনপুট হিসেবে number টাইপ এর পরিবর্তে অন্য কিছু দিলে তুমি একটা মিনিংফুল মেসেজ রিটার্ন করে দিবে ফাংশন থেকে। 

// // Sample Input
// // Sample Output
// // 3       27
// // 4        64

// function cubeNumber(number) {
//   // console.log(number);

//   let numberCube = number ** 3;

//   if (typeof number !== "number") {
//     return("Texts are not allowed in inputs");
//   } 
//   else if (number < 0) {
//     return("The input is a negative number");
//   } 
//   else if (number > 0) {
//     // console.log(numberCube);
//     return numberCube;
//   }

// }

// // cubeNumber(4);
// console.log(cubeNumber(4));
// console.log(cubeNumber(-1));
// console.log(cubeNumber("text"));


//* Problem - 2
// // তোমাকে একটা function দেওয়া হবে called “matchFinder()” যা ইনপুট হিসেবে দুইটা string নিবে। 

// // Task:
// // যদি প্রথম স্ট্রিংটির কোনো একটি অংশের সাথে দ্বিতীয় স্ট্রিংটির পুরোপুরি মিল খুজে পাও সেক্ষেত্রে তুমি true রিটার্ন করবে। 
// // আর যদি পুরোপুরি মিল খুজে না পাও সেক্ষেত্রে তুমি false রিটার্ন করবে।  
// // Bonus: দুটি ইনপুট স্ট্রিং দেওয়া হলো কিনা সেটা validate করবে। যদিদুইটি বা যেকোনো একটি ইনপুট স্ট্রিং না হয় সেক্ষেত্রে তুমি একটা মিনিংফুল মেসেজ রিটার্ন করে দিবে। 


// // Sample Input
// // Sample                  Output
// // “John Doe”, “ohn”        true
// // “JavaScript”, “Code”     false
// // “Peter Parker”, “Pen”    false
// // “Peter Parker”,”pet”     false

// function matchFinder(string1, string2) {
//   // console.log(string1);
//   // console.log(string2);

// if (typeof string1 !== "string" || typeof string2 !== "string") {
//     return "Both inputs must be strings";
//   }
//   if (string1 === "" || string2 === "") {
//     return "Input is empty";
//   }


//   return string1.includes(string2);

// }

// // matchFinder("John Doe", "ohn");
// console.log(matchFinder("John Doe", "ohn"));
// console.log(matchFinder("JavaScript", "Code"));
// console.log(matchFinder("Peter Parker", "Pen"));
// console.log(matchFinder("Peter Parker", "pet"));



//* Problem - 3
// // তোমাকে একটা ফাংশন লিখতে হবে যার নাম হবে sortMaker()। এই ফাংশনের parameter হবে একটি array এবং এই array তে সবসময় দুইটি উপাদান থাকবে।
// // Task:
// // যদি অ্যারের দুইটি উপাদান পজিটিভ সংখ্যা হয় সেক্ষেত্রে তুমি অ্যারেটিকে বড়ো থেকে ছোট ক্রমে সাজিয়ে রিটার্ন করবে।
// // যদি দুইটি উপাদান একই হয় সেক্ষেত্রে তুমি এই স্ট্রিং রিটার্ন করবেঃ “equal”
// //  Bonus: যদি অ্যারের যেকোনো একটি উপাদান নেগেটিভ সংখ্যা হয় সেক্ষেত্রে তুমি  রিটার্ন  করবে “Invalid Input”

// // Sample   Output
// // [2, 3]   [3,2]
// // [4,2]    [4,2]
// // [4,4]    equal
// // [1,2]    [2,1]
// // [4,-2]   Invalid Input

// function sortMaker(arr) {
//   // console.log(arr);

//   //? Checking Negative number
// if (arr[0] < 0 || arr[1] < 0) {
//   return "Invalid Input";
// }

// //? Checking Equal number
// if (arr[0] === arr[1]) {
//   return ("equal");
// }

// //? Decending Numbers in the array
// return arr.sort((a, b) => b-a);

// }

// // sortMaker([2, 2]);
// console.log(sortMaker([2, 3]));



//* Problem - 4
// // তোমাকে একটা function দেওয়া হবে called “findAddress()” যা ইনপুট হিসেবে একটা object  নিবে। Object এর তিনটি property থাকবে।


// // তোমাকে ১ম sample output এর format এ output return করতে হবে।
// // Bonus: যদি object এর কোনো property missing থাকে সেক্ষেত্রে সেই অংশটুকু double underscore দিয়ে replace হবে।
// // (২য় output এর format এ )

// // Input                                                      Output
// // {street: 10,house: 15A,society: “Earth Perfect”}      10,15A, Earth Perfect

// // {street: 10,society: “Earth Perfect”}                 10,__, Earth Perfect

// // {street: 10}                                              10, __, __


// function findAddress(obj) {
//   let streets;
//   let house;
//   let society;

//   if (obj.street !== undefined) {
//     streets = obj.street;
//   } else {
//     streets = "__";
//   }

//   if (obj.house !== undefined) {
//     house = obj.house;
//   } else {
//     house = "__";
//   }

//   if (obj.society !== undefined) {
//     society = obj.society;
//   } else {
//     society = "__";
//   }

//   return `${streets},${house}, ${society}`;

// }

// console.log(findAddress({ street: 10, house: "15A", society: "Earth Perfect" }));
// console.log(findAddress({ street: 10, society: "Earth Perfect" }));
// console.log(findAddress({ street: 10 }));



//* Problem - 5
// // তুমি দোকানে একটা চিপ্স কিনতে গেলা কিছু খুচরা টাকার নোট নিয়ে। একটা canPay() নামে function বানাও যেটা ২টা ইনপুট নেইঃ একটা array, এবং আরেকটা number।

// // Array এর প্রত্যেক টা element তোমার খুচরা টাকা বুঝাই 
// // 1 taka
// // 2 taka
// // 5 taka

// // second input টা বুঝাই চিপ্স এর দাম।
// // Task:
// // যদি খুচরা টাকা গুলো যোগ করে চিপ্স এর দাম বা তার বেশি হয় তাহলে true রিটার্ন করবে 
// // আর যদি নোটগুলোর যোগফল চিপ্স এর দামের চেয়ে কম হয় সেক্ষেত্রে  false রিটার্ন করবে।
// // Bonus: ইনপুট এর প্রথম উপাদান empty অ্যারে কিনা চেক করবে। empty  অ্যারে হলে মিনিংফুল মেসেজ রিটার্ন করে দিবে। 


// // Sample Input   // Sample Output
// // [1,2,5], 10       // false
// // [1,5,5],10        // true

// function canPay(changeArray, totalDue) {
//   // return [changeArray, totalDue];

//   // ?Checking Empty Array
//   if (changeArray.length === 0) {
//     return "Input is Empty";
//   }

//   // ?Checking Total Money Amount and comparing it to 10tk
//   let money = 0;
//   for (let taka of changeArray) {
//     money += taka;
//   }
  
//   if (money >= totalDue) {
//     return true;
//   } else {
//     return false;
//   }
  
// }

// // canPay([1,2,5], 10)
// console.log(canPay([], 10));
// console.log(canPay([1,2,5], 10));
// console.log(canPay([3,2,5], 10));
