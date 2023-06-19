const numbers = [1, 2, 3, 4];

console.log(numbers.join(""));
console.log(numbers.join("-"));

const message = "This is my first message";
const words = message.split("");
console.log(words);

const words2 = message.split();
console.log(words2); //The message in a single element array

const words3 = message.split(" ");
console.log(words3);
console.log(words3.join()); //Separator is optional. If ommitted, array elements will be joined with comma as separator
console.log(words3.join("")); //joined with no separator
console.log(words3.join("-")); //useful in building url slug ,where the spaces are not allowed
