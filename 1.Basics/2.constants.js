console.log("Hello World");
const interestRate = 0.3; //code executes execute till here due to below error
interestRate = 1; //Uncaught Typeerror: Reassignment to constant variable
console.log(interestRate); //this line will not be executed
console.log("Hello World"); //this line will not be executed
