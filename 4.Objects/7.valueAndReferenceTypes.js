let x = 10;
let y = x;

x = 20;

console.log(y);

function increase(number) {
  number++;
}

function increaseObject(obj) {
  obj.value++;
}

function increaseObjectWithDestructuring({ value }) {
  value++;
}

let number = 5;
let object = { value: 5 };

increase(number);
console.log(number);

increaseObject(object);
console.log(object);

increaseObjectWithDestructuring(object);
console.log(object);
