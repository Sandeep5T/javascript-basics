function getMax(array) {
  let max = array[0];
  for (i = 0; i < array.length; i++) {
    if (array[i] > max) max = array[i];
  }
  return max;
}

const numbers = [12, 1, 3, 144, 0];
console.log(getMax(numbers));

console.log(
  numbers.reduce((max, number) => (max > number ? max : number), undefined)
);

console.log(numbers.reduce((a, b) => (a > b ? a : b), undefined));
