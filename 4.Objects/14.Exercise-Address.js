const address = {
  street: "Nagawara",
  city: "Bangalore",
  zipCode: 560045,
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

showAddress(address);
