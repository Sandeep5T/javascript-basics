//Logical And (&&)
//Returns TRUE if both operands are true
console.log(true && false);

let highIncome = false;
let goodCreditScore = false;
// let eligibleForLoan = highIncome && goodCreditScore;
let eligibleForLoan = highIncome || goodCreditScore;

console.log("Eligible for Loan", eligibleForLoan);

//Logical OR (||)
//Returns TRUE if one of the operands is true

//NOT (!)
let applicationRefused = !eligibleForLoan;
console.log("Application Refused", applicationRefused);

//False values in Javascript

//0
//false
//""
//null
//undefined
//NaN

//Anything other than falsy is truthy
let userColor;
let defaultColor = "blue";
let selectedColor = userColor || defaultColor;
console.log(selectedColor);
