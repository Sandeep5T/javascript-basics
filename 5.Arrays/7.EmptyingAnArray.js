let numbers = [1, 2, 3, 4];
let another = numbers;

//Soution 1 to empty an array but does not work when you have any references to original object

// numbers = [];
console.log(numbers);
console.log(another);

//Solution 2 - To Truncate the array
// numbers.length = 0;
console.log(numbers);
console.log(another);

//Solution 3
numbers.splice(0, numbers.length);
console.log(numbers);
console.log(another);

//Solution 4
while (numbers.length > 0) numbers.pop(); //This comes with a performance cost when numbers array is huge with millions of elements

//Solution 1 and 2 are preferred as they are not noisy. Solution2 is best
