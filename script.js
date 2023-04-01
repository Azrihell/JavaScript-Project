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


// // scope

// // root scope (window)
// var fun = 5;

// function funFunction() {
//   // child scope
//   var fun = "hello!";
//   console.log(1, fun);
// }

// function funnerFunction() {
//   // child scope
//   var fun = "bye!";
//   console.log(2, fun);
// }

// function funnestFunction() {
//   // child scope
//   fun = "OMG!";
//   console.log(3, fun);
// }

// console.log("window", fun);





// // let + const

// const player = 'bobby'
// let experience = 100;
// let wizardLevel = true;

// if (experience > 90) {
//   // let creates new scope inside {}
//   let wizardLevel = true;
//   console.log('inside', wizardLevel);
// }





// // destructuring
// const obj = {
//   player: 'john',
//   experience: 100,
//   wizardLevel: false
// }

// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;

// const { player, experience } = obj;
// let { wizardLevel } = obj;





// object properties

// const name = 'john doe'

// const obj = {
//   [name]: 'hello',
//   ['jane' + 'doe']: 'hiHi'
// }
// console.log(obj["john doe"])

// const a = "simon";
// const b = true;
// const c = {};

// const obj = {
//   a,
//   b,
//   c
// }



// // template strings

// const name = "sally";
// const age = 34;
// const pet = "cat"

// const greeting = "hello" + name + "you seem to be doing" + greeting + !

// const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;




// // default arguments

// function greet(name='', age=30, pet='cat') {
//   return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;
// }

// // greet("john", 30, "dog")

// // symbol

// let sym1 = Symbol();
// let sym2 = Symbol('yes');
// let sym3 = Symbol('yes');
// // sym2 === sym3 ------------false





// // arrow functions

// function add (a, b) {
//   return a + b;
// }

// const add = (a, b) => a + b;
// // use when there is one return


// const first = () => {
//   const greet = 'hi';
//   const second = () => {
//   }
//   return second;
// }

// const newFunc = first();
// newFunc();

// closures
//  children always have access to their parents scope, but parent scopes do not have access to their children.


// // currying
// const multiply = (a, b) => a * b;
// const curriedMultiply = (a) => (b) => a * b;
// curriedMultiply(3)
// // curriedMultiply(3)(4);
// // this is a munction inside a function



// // compose
// const compose = (f, g) => (a) => f(g(a));

// const sum = (num) => num + 1;

// compose(sum, sum)(5);



// // advanced arrays

// const array = [1, 2, 10, 16];

// const double = []
// const newArray = array.forEach(num => {
//   double.push(num * 2);
// })

// console.log('forEach', double);

// // map, filter, reduce

// const mapArray = array.map(num => num * 2);

// console.log('map', mapArray);

// // filter

// const filterArray = array.filter(num => num > 5);

// console.log('filter', filterArray);

// // reduce

// const reduceArray = array.reduce((accumulator, num) => {
//   return accumulator + num
// }, 0);

// console.log('reduce', reduceArray);




// // reference type

// var object1 = { value: 10 };
// var object2 = object1;
// var object3 = { value: 10 };

// // context

// var object4 = {
//   a: function() {
//     console.log(this);
//   }
// }

// // instantation

// class Player {
//   constructor(name, type) {
//     console.log('player', this);
//     this.name = name;
//     this.type = type;
//   }
//   introduce() {
//     console.log('Hi I am ${this.name}, I am a ${this.type}')
//   }
// }

// class Wizard extends Player {
//   constructor(name, type) {
//     super(name, type)
//     console.log('wizard', this);
//   }
//   play() {
//     console.log('Woo I am a ${this.type}');
//   }
// }

// const wizard1 = new Wizard('John', 'Healer');
// const wizard2 = new Wizard('Jane', 'Dark Magic user');





// // Object.keys
// // Object.values
// // Object.entries

// let obj = {
//   username0: 'John Doe',
//   username1: 'Jane Doe',
//   username3: 'Shellie'
// }

// Object.keys(obj).forEach((key, index) => {
//   console.log(key, obj[key]);
// })

// Object.values(obj).forEach(value => {
//   console.log(value);
// })

// Object.entries(obj).forEach(value => {
//   console.log(value);
// })

// //irl example

// Object.entries(obj).map(value=> {
//   return value[1] + value[0].replace('username', '');
// })



// //flat
// const entries = ['John', 'Jane',,,,,,,'Cindy', ['Joe']]
// entries.flat()

// //flatMap
// const entries = ['John', 'Jane',,,,,,,'Cindy', ['Joe']]
// const entriesDetails = entries.flatMap(names => names + '10');
