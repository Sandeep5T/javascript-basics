function countOccurences(array, searchElement) {
  //   let count = 0;
  //   for (let element of array) {
  //     if (element === searchElement) count++;
  //   }
  //   return count;
  return array.reduce((count, element) => {
    return element === searchElement ? count + 1 : count;
  }, 0);
}

const numbers = [1, 2, 3, 4, 5, 1, 2, 1, 1];

console.log(countOccurences(numbers, 1));
