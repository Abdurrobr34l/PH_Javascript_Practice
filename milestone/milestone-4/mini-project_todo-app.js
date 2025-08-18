//* Todo App (without UI, console-based)
// Add tasks
// Mark as complete
// Delete tasks

function checkTask(taskDetails) {

  let taskCompleted = [];
  let taskDelted = [];
  for (let info of taskDetails) {
    // console.log(info.task, info.compli, info.dele);

    if (info.compli === true && info.dele === false) {
      taskCompleted.push(info.task);
    } else if (info.dele === true) {
      taskDelted.push(info.task);
    }


  }
  console.log("All tasks", taskDetails);
  console.log("Completed tasks",taskCompleted)
  console.log("Deleted tasks",taskDelted)

}

checkTask(
  [{ task: "Learn Js", compli: true, dele: false },
  { task: "Learn React", compli: false, dele: true },
  { task: "Learn Responsive", compli: true, dele: false },
  { task: "Learn Mongodb", compli: true, dele: true }
  ]
);