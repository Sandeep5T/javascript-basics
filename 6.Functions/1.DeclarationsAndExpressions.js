//Function Declaration
function walk() {
  console.log("walk");
}

//Function Expression
//Can be a named function expression or anonymous function expression
const run = function walk() {
  console.log("run");
};

walk();
run();

let move = run;
move();
