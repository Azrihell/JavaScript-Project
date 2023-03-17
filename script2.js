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
  console.log(isUserValid(username, password));
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);



  //   if (username === database[0].username && password === database[0].password) {
  //   console.log(newsFeed);
  // } else {
  //   alert("Wrong username or password, please try again.");
  // }


