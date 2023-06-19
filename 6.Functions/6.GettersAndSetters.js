const person = {
  firstName: "Sandeep",
  lastName: "Palagati",
  //   fullName: function () {
  //     return `${person.firstName} ${person.lastName}`;
  //   },
  get fullName() {
    console.log("getter method called");
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

console.log(`${person.firstName} ${person.lastName}`);
// console.log(person.fullName());
console.log(person.fullName);

person.fullName = "Mosh Hamedani";
console.log(person);
