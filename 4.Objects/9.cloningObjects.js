const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

const another = {};

for (let key in circle) another[key] = circle[key];
another.draw();

console.log(another);

another.border = "dotted";

const assigned = Object.assign({}, circle, another);

console.log("Assigned", assigned);

const usingSpread = { ...circle };
console.log(assigned);
