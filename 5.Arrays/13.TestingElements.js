const numbers = [1, -1, 2, 3, 4];

const allPositive = numbers.every(function (value) {
  return value >= 0;
});

const atLeastOnePositive = numbers.some(function (value) {
  return value >= 0;
});

console.log(allPositive);
console.log(atLeastOnePositive);
