var todo = [
  "clean room",
  "brush teeth",
  "exercize",
  "study javascript",
  "go to gym",
];

var todoLength = todo.length;

for (var i=0; i < todo,length; i++) {
  todo.pop();
}

todo.forEach(function(todo, i) {
  console.log(todo, i);
})

/*
var counterOne = 10;
while (counterOne > 0) {
  console.log(counterOne);
  counterOne--;
}
*/

