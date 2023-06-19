const person = {
  firstName: "Sandeep",
  lastName: "Palagati",
  set fullName(value) {
    // const error = new Error();
    if (typeof value !== "string")
      // return;
      throw new Error("value is not a string");
    const parts = value.split(" ");
    if (parts.length !== 2)
      throw new Error("Please enter a first name and a last name");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  //   person.fullName = null;
  person.fullName = "";
} catch (e) {
  alert(e);
}

console.log(person);
