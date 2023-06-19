const numbers = [1, 2, 3, 4, 5, 6];

//End

const last = numbers.pop();
console.log(numbers);
console.log(last);

const first = numbers.shift();
console.log(numbers);
console.log(first);

const deleted = numbers.splice(2, 2);
console.log(deleted);
console.log(numbers);
