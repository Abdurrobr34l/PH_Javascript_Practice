// //* Q-1
// let marks = [45, 98, 66, 56, 23, 89, 94];

// let toppers = marks.filter((arr) => {
//   return arr > 90;
// });

// console.log(toppers);

//* Q-2
let n = 10;
let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(i);
}
console.log(arr);

let sum = arr.reduce((prev, curr) => {
  return prev + curr;

});
console.log("Array numbers sum: " + sum);

let multiply = arr.reduce((prev, curr) => {
  return prev * curr;

});
console.log("Array numbers multiply: " + multiply);