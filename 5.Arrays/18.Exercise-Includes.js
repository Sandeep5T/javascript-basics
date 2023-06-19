const numbers = [1, 2, 3, 4];

function includes(array, search) {
  for (let element of array) {
    if (element === search) return true;
  }
  return false;
}

console.log(numbers.includes(0));
