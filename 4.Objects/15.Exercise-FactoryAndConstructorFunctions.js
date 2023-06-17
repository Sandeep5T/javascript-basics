function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const addressUsingFactoryFunction = createAddress("a", "b", 1);
console.log(addressUsingFactoryFunction);

const addressUsingConstructorFunction = new Address("a1", "b1", 2);
console.log(addressUsingConstructorFunction);
