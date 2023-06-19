function sum(...args) {
  let input = args;
  if (Array.isArray(...args)) {
    input = args[0];
  }
  return input.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum([1, 2, 3, 4, 5]));
