function move(array, index, offset) {
  const position = offset + index;
  if (position >= array.length || position < 0) {
    console.error("Invalid Offset...");
    return;
  }
  const spliced = array.splice(index, 1);
  console.log(spliced);
  console.log(array);
  array.splice(position, 0, ...spliced);
  return array;
}

const numbers = [0, 1, 2, 3, 4];
console.log(move(numbers, -1, 1));
