function fizzBuzz(input) {
  return typeof input !== "number"
    ? NaN
    : input % 15 === 0
    ? "FizzBuzz"
    : input / 3 === 1
    ? "Fizz"
    : input / 5 === 1
    ? "Buzz"
    : input;
}

console.log(fizzBuzz(false));
