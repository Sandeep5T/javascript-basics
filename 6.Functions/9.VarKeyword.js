// console.log(i);
console.log(color); //undefined
var color = "blue"; //Global variable declared using var gets attached a property to window object
let age = 30; //does not impact window object

function start() {
  console.log(i);
  console.log(color);
  for (var i = 0; i < 5; i++) {
    console.log("color defined below in this function scope", color);
    console.log("global color using var attached to window", window.color);
    console.log(i);
    if (true) {
      var color = "red";
    }
  }
  console.log(i);
  console.log(color);
  console.log(window.color);
}

//var = create function scoped variables
//ES6 (let, const) = create block scoped variables
console.log("color set on window object", window.color);
console.log(
  "global age variable declared using let did not attach to window object",
  window.age
);
start();

window.sayHi(); //bad practice to use function declaration as below at global level

function sayHi() {
  console.log("Hello");
}

// console.log(i);
