function greet() {
  console.log("Hello World");
}

function greetWithName(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

greet();
greetWithName(); //Hello undefined
greetWithName("Sandeep");
greetWithName("Sandeep", "Palagati");
console.log(greet()); //returns undefined as function does not have any return statement

function square(number) {
  return number * number;
}

let number = square(2);
console.log(number);
console.log(square(3));
