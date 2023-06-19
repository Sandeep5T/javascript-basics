// let person = { name: "a", age: 29 };
// let person2 = person;
// person2.age = 30;

// console.log(person);
// console.log(person2);

// console.log(person === person2);

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

console.log(courses.includes({ id: 1, name: "a" }));

console.log(
  courses.find(function (course) {
    return course.name === "a";
  })
);

console.log(
  courses.find(function (course) {
    return course.name === "xyz";
  })
);

console.log(
  courses.findIndex(function (course) {
    return course.name === "b";
  })
);

console.log(
  courses.findIndex(function (course) {
    return course.name === "xyz";
  })
);
