const array = [2, 3, null, 10, false, true];

console.log(countTruthy(array));

// function countTruthy(array) {
//   let i = 0;
//   let j = 0;
//   while (j < array.length) {
//     if (array[j]) i++;
//     j++;
//   }
//   return i;
// }

function countTruthy(array) {
  let count = 0;
  for (let element of array) if (element) count++;
  return count;
}
