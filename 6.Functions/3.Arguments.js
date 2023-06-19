function sum(a, b) {
  return a + b;
}

function sumUsingArguments() {
  console.log(arguments);
  console.log(arguments[0], arguments[1], arguments[2]);
  let sum = 0;
  for (let value of arguments) sum += value;
  return sum;
}

console.log(sum(1)); // 1 + b=undefined=NaN
console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4)); //3

console.log(sumUsingArguments(1, 2));
console.log(sumUsingArguments(1, 2, 3, 4, 5));
