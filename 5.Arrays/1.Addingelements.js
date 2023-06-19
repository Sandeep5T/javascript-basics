const numbers = [3, 4];
// numbers = [1, 2]; //Type error: Assignment to constant variable

//Adding Elements at the end and returns the length of new array

numbers.push(5, 6);

//Adding elements at the start. Pushes existing elements to the right and adds new ones at the start and returns the length of new array

numbers.unshift(1, 2);

//Adding in the middle and returns the deleted elements, if any in an array

numbers.splice(2, 0, "a", "b");

console.log(numbers);
