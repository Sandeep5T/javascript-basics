const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf(0));

console.log(numbers.indexOf(1));

console.log(numbers.indexOf("1"));

console.log(numbers.lastIndexOf(1));

//Check if an element exists in array

console.log(numbers.indexOf(1) !== -1);

console.log(numbers.includes(1));
console.log(numbers.includes("1"));

//Search from a given index
console.log(numbers.indexOf(1, 2));

console.log(
  "Using find",
  numbers.find(function (number) {
    return number > 2;
  })
);

console.log(
  "Using find",
  numbers.findIndex(function (number) {
    return number > 2;
  })
);
