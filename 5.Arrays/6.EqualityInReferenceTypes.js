let course = { id: 1, name: "a" };
let course2 = course;

console.log(course === course2);

course.name = "b";

console.log(course2);
console.log(course === course2);

course = { id: 1, name: "b" };
console.log(course === course2);
console.log(course, course2);

course = course2;
console.log(course === course2);
console.log(course, course2);

let numbers = [1, 2, 3, 4];
let another = numbers;

console.log(numbers === another);

numbers = [];
console.log(numbers);
console.log(another);

console.log(numbers === another);

numbers = another;
console.log(numbers);

numbers.push(5);
console.log(numbers);
console.log(another);
console.log(numbers === another);
