// Step 1: Create the array of todos
const todos = [
  { title: "Do homework", done: false },
  { title: "Wash dishes", done: true },
  { title: "Read a book", done: false },
  { title: "Clean the room", done: true },
  { title: "Buy groceries", done: false }
];

// Step 2: Filter the todos
const completedTasks = todos.filter(todo => todo.done === true);
const ongoingTasks = todos.filter(todo => todo.done === false);

// Step 3: Display the results
console.log("Done Tasks:");
completedTasks.forEach((task, index) => {
  console.log(`${index + 1}. ${task.title}`);
});

console.log("\nOngoing Tasks:");
ongoingTasks.forEach((task, index) => {
  console.log(`${index + 1}. ${task.title}`);
});
