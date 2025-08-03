// ? Build a student report app that shows each student’s average score, pass/fail status, and lets you search by name.

let student = [
  { name: "raihan", subject: { math: 90, english: 50, bangla: 45 } },
  { name: "rahman", subject: { math: 100, english: 85, bangla: 90 } },
  { name: "abdullah", subject: { math: 100, english: 85, bangla: 95 } }
];
let searchName = "kareem";
let found = false;

for (let avgScore of student) {
  let total = 0;
  let totallSubject = 0;
  // console.log(avgScore.subject);
  // console.log(avgScore.name);

  for (let subject in avgScore.subject) {
    // console.log(avgScore.subject[subject])
    total += avgScore.subject[subject];
    totallSubject++;
  }
  // console.log(totallSubject);
  // console.log(total);
  let avg = total / totallSubject;
  // console.log(avg);

  let status = "";
  if (avg > 70) {
    status = "pass"
    // console.log(`${avgScore.name} | ${avg} | ${status}`)
  } else {
    status = "Failed";
  }

  if (avgScore.name.toLowerCase() === searchName.toLowerCase()) {
    console.log(`${avgScore.name} | ${avg} | ${status}`)
    found = true;
    break;
  }
}
if (!found) {
  console.log("No student found with that name");
}