// //* Problem 1: Student Result System
// // You're building a system for a school to manage student results.

// let student = {
//   name: "Sakib Khan",
//   age: 17,
//   class: 10,
//   marks: {
//     math: 88,
//     english: 76,
//     science: 92
//   }
// };

// // *Checking Mark
// for (let checkMarks in student.marks) {
//   // console.log(student.marks[checkMarks]);
  
//   if (student.marks[checkMarks] >= 40) {
//     // console.log(checkMarks + "|" +"Pass");
//   }
// }

// // *Calculating Average Mark
// let allMarks = 0;
// let allSubj = 0;

// for (let avgMark in student.marks) {
//   // console.log(student.marks[avgMark]);
//   allMarks += student.marks[avgMark];
//   allSubj++;
// }
// let avgMarks = allMarks / allSubj;
// // console.log(allMarks);
// // console.log(allSubj);
// console.log(avgMarks);

// // *Printing Grades
// if (avgMarks > 85) {
//   console.log("Grade: A")
// }
// else if (avgMarks > 70) {
//   console.log("Grade: B")
// } 
// else {
//   console.log("Grade: C")
// }

// //? Tasks:
// // Check if the student has passed all subjects (passing mark is 40).
// // Calculate and print the average marks.
// // If average > 85, print "Grade: A", else if > 70 "Grade: B", else "Grade: C".

// //* Problem 2:
/*
Build a console-based to-do app.
- Add tasks (title, completed: false)
- Show all tasks
- Mark tasks as completed
- Remove a task by index
*/