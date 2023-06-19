function sum(...args) {
  console.log(args);
  console.log(typeof args);
  console.log(...args);
  //   console.log(typeof ...args);
  return args.reduce((a, b) => a + b);
}

function sumWithDiscount(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum(1, 2, 3, 4, 5, 10));

console.log(typeof sum);

console.log(sumWithDiscount(0.1, 20, 30));
