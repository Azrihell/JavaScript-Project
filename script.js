/*function sing(song) {
  console.log(song);
}

sing("la la la")
sing("do do do")
sing("ke ke ke")


function multiply(a,b) {
      return a*b;
  }

alert(multiply(3,4));
*/

/*var list = ["tiger", "cat", "bear", "bird"];
list.push ("fish");
console.log(list);
*/

/*var user = {
  name: "John",
  age: 25,
  hobby: "Golf",
  isMarried: false,
  favoriteFoods: ["apple", "chicken", "brownie"],
  shout: function() {
    console.log("AHHHH");
  }
};

var database = [
  {
    username: "Az",
    password: "superSecret"
  },
  {
    username: "John",
    password: "john123"
  },
  {
    username: "Jane",
    password: "jane123"
  }
];

var newsFeed = [
  {
    username: "John",
    timeline: "super tired from all that climbing."
  },
  {
    username: "Jane",
    timeline: "Climbing is so much fun!"
  }
];

function isUserValid(username, password) {
  for (var i=0; i< database.length; i++) {
    if(database[i].username === username &&
        database[i].password === password) {
          return true
        }
    }
    return false;
}
function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    alert("Wrong username or password, please try again.");
  }

}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);



/*
var counterOne = 10;
while (counterOne > 0) {
  console.log(counterOne);
  counterOne--;
}
*/

/*var todo = [
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

for (var i=0; i < todo,length; i++) {
  console.log(todo[i], i);
}

function logTodo(todo, i) {
  console.log(todo, i);
}

todo.forEach(logTodo);
todoImportant.forEach(logTodo);


*/