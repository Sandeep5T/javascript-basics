function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const address1 = new Address("a", "b", "c");
const address2 = new Address("a", "b", "c");
const address3 = address1;

function areEqual(address1, address2) {
  const keys1 = Object.keys(address1);
  const keys2 = Object.keys(address2);
  if (keys1.length !== keys2.length) return false;
  for (let i in address1) {
    if (address1[i] !== address2[i]) return false;
  }
  return true;
}

function areSame(address1, address2) {
  return address1 === address2;
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

console.log(areEqual(address1, address3));
console.log(areSame(address1, address3));
