const numbers = [1, 2, 3, 4];

//Using for of
for (let number of numbers) console.log(number);

//using foreach method
numbers.forEach(function (number) {
  console.log(number);
});

numbers.forEach((number) => console.log(number));

numbers.forEach((number, index) => console.log(index, number));
