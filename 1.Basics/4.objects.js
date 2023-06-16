let person;
person = {};
person = { name: "Sandeep", age: 29 };
console.log(person);

//DOT notation
person.name = "John";
console.log(person.name);

//Bracket notation
person["name"] = "Mary";
console.log(person["name"]);

//Dynanmically using Bracket notation
let selection = "name";
person[selection] = "Kumar";
console.log(person["name"]);

console.log(person.isApproved); // returns undefined with no error
console.log(person["selectedColors"]); // returns undefined with no error
console.log(pers); //Uncaught refererence error: pers is not defined -- code executes till here with no problem and says pers is not defined
console.log("Hello World"); //Wont execute due to above error
