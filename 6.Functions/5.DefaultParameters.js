function interest(prinicipal, rate, years) {
  rate = rate || 3.5;
  years = years || 5;
  return ((prinicipal * rate) / 100) * years;
}

function interestWithDefaultParameters(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

function interestWithFewDefaultParameters(principal, rate = 3.5, years) {
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000, 3.5, 5));
console.log(interest(10000));

console.log(interestWithDefaultParameters(10000));

console.log(interestWithFewDefaultParameters(10000, 5)); //In this case 5 is used a rate and years is still undefined

console.log(interestWithFewDefaultParameters(10000, undefined, 5));
//Above is ugly code. So whenever you want to have default parameters in function,
//make sure the parameters are at the end in the list. And the paramters after that also have a default value
