function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const Circle1 = new Function(
  "radius",
  `
this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };`
);
console.log(Circle.name);
console.log(Circle.length);
console.log(Circle.constructor);

console.log(Circle1.name);
console.log(Circle1.length);
console.log(Circle1.constructor);

Circle.call({}, 1);
Circle.apply(window, [1, 2, 3]);

const circle = new Circle1(1);

const another = new Circle(1);
// Circle1.call({}, 1);

console.log(circle);
console.log(another);
console.log(window);
