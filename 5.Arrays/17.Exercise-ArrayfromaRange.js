// function arrayFromRange(min, max) {
//   let result = [min, max];
//   for (let i = 1; i < max - min; i++) {
//     result.splice(i, 0, min + i);
//   }
//   return result;
// }

function arrayFromRange(min, max) {
  let result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}
console.log(arrayFromRange(1, 10));
