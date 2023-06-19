const first = [{ id: 1 }, 1, 2, 3];
const second = [4, 5, 6];

first[0].id = 10;

const combined = first.concat(second);

console.log("Combined", combined);

const sliced = combined.slice(2, 4);
console.log("Sliced", sliced);

const copyUsingSlice = combined.slice();
copyUsingSlice.pop();
console.log(combined);
console.log(copyUsingSlice);

//In both methods, objects will be passed by reference to target variables
