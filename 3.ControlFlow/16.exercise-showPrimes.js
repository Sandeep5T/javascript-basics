// function showPrimes(limit) {
//   console.log(2);
//   for (let i = 2; i <= limit; i++) if (i % 2 === 1) console.log(i);
// }

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    isPrime(number) && console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}

showPrimes(20);
