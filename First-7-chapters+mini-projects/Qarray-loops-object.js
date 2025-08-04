                      //* Test: Array, Loop, Object (Only)
//* Task 1:
// let students = [
//   { name: "Sakib", age: 17, grade: "10" },
//   { name: "Tamim", age: 18, grade: "11" },
//   { name: "Liton", age: 16, grade: "10" }
// ];

// // ?Loop through the array and print each student’s name and grade.
// // ?Find and print the names of all students who are in grade "10".

// for (let info of students) {
//   // console.log(info.name + " " + info.grade);

//   if (info.grade === "10") {
//     console.log(info.name);
//   }
// }

//* Task 2:
// // Q2. Product Inventory System
// // You're making a simple inventory.

// let inventory = [
//   { name: "Pen", price: 10, quantity: 100 },
//   { name: "Notebook", price: 50, quantity: 20 },
//   { name: "Eraser", price: 5, quantity: 0 }
// ];


// // ?Loop and print only the products that are in stock (quantity > 0).
// // ?Show the total value of all products in stock (price × quantity).

// for (let stock of inventory) {
//   // console.log(stock.quantity);
//   let totalValue = stock.price * stock.quantity;
//   if (stock.quantity > 0) {
//     console.log(`${stock.name} is in stock`);
//     console.log(`${stock.name} price is ${totalValue} taka`);
//   }
// }

// // for (let stock of inventory) {
// //   // console.log(stock.price);
// //   let totalValue = stock.price * stock.quantity;
// //   console.log(`${stock.name} price is ${totalValue} taka`);
// // }

//* Task 3: Daily Task Tracker
// let tasks = [
//   { title: "Wake up", completed: true },
//   { title: "Exercise", completed: false },
//   { title: "Learn JS", completed: true },
//   { title: "Play", completed: false }
// ];

// // ?Loop through and show all task titles.
// // ?Print only completed tasks.
// // ?Count how many tasks are completed.

// let countTaskCompleted = 0;

// for (let titles of tasks) {
//   // console.log(titles.title);
//   if (titles.completed === true) {
//     console.log(titles);
//     countTaskCompleted++;
//   }
// }
// console.log(`${countTaskCompleted} task are completed`)

//* Task 4: Object Key Counting
// let car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2020,
//   color: "white"
// };

// // ?Count how many keys this object has (using loop).
// // ?Print all the keys and values one by one like:
// // brand: Toyota
// // model: Corolla
// let totallKeyss = 0;
// for (let noOfKeys in car) {
//   // console.log(noOfKeys);
//   console.log(`${noOfKeys}: ${car[noOfKeys]}`);
//   totallKeyss++;
// }
// console.log(`There are ${totallKeyss} keys in this car object`);