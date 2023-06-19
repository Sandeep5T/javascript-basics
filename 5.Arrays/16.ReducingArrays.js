const numbers = [1, -1, 2, 3];

// let sum = 0;
// for (let number of numbers) sum += number;

//a=0, c=1 => a=1
//a=1, c=-1 => a=0
//a=0, c=2 => a=2
//a=2, c=3 =>a =5
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

//Reducing without initializer. Accumulator will be initialized to first element in the array

//a=1. c=-1 => a=0
//a=0, c=2 => a=2
//a=2, c=3 => a=5
const sumWithOutInitializer = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sumWithOutInitializer);
