function except(array, exclude) {
  const result = [];
  for (let element of array) {
    if (!exclude.includes(element)) result.push(element);
  }
  return result;
}

let numbers = [-1, 1, 2, -2, 3, 4, 1, 1];
console.log(except(numbers, [1, 2, -1]));
console.log(except(numbers, [-1, 1, -2, 2, 3, 4]));
