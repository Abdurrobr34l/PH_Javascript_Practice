/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// ?Solution

let gradeGot = 88;

if (gradeGot > 100) {
    console.log("How did you get more than 100?");
} else if (gradeGot >= 90) {
    console.log("You got A");
} else if (gradeGot >= 80) {
    console.log("You got B");
} else if (gradeGot >= 70) {
    console.log("You got C");
} else if (gradeGot >= 60) {
    console.log("You got D");
} else if (gradeGot >= 0) {
    console.log("You got F");
} else {
    console.log("Result not published yet");
}