var todo = [
  "clean room",
  "brush teeth",
  "exercize",
  "study javascript",
  "go to gym",
];

var todoImportant = [
  "clean room!",
  "brush teeth!",
  "exercize!",
  "study javascript!",
  "go to gym!",
];

var todoLength = todo.length;

/*
for (var i=0; i < todo,length; i++) {
  console.log(todo[i], i);
}
*/

function logTodo(todo, i) {
  console.log(todo, i);
}

todo.forEach(logTodo);
todoImportant.forEach(logTodo);


