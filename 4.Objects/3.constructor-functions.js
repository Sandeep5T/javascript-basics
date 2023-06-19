function Circle(radius) {
  console.log(this); //{}
  this.radius = radius;
  this.draw = function () {
    console.log(this); //refers to object created using new operator, but not window object
    console.log("draw");
  };
  console.log(this);
}

const circle = new Circle(1);
console.log(circle);
circle.draw();
