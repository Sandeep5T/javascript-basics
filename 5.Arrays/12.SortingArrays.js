const numbers = [2, 3, 1];

numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javascript" },
  { id: 1, name: "HTML" },
];

courses.sort(function (a, b) {
  let nameA = a.name.toUpperCase();
  let nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

numbers.sort(function (a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});

console.log(courses);

console.log(numbers);
