let selectedColors;
selectedColors = [];
selectedColors = ["green", "blue"];
console.log(selectedColors);

selectedColors[2] = "red";
console.log(selectedColors);
selectedColors[2] = 1; //Items in Arrays and length of arrays are dynamic
console.log(selectedColors);

console.log(typeof selectedColors);
console.log(selectedColors[100]); //undefined
console.log(selectedColors[-1]); //undefined
console.log(selectedColors.length);

let noArray;
let testObject = {};
console.log(testObject.length); //returns undefined with no error
console.log(noArray.length); //uncaught type error: cannot read properties of undefined. code executes till here
console.log("Hello World"); //this line wont be executed
