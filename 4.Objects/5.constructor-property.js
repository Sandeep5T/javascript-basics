let person = { name: "Sandeep", age: 20 };
console.log(person.constructor); //f Object() --> Object is a inbuilt cobstructor function

function createCircle(radius) {
  return {
    // radius: radius,
    radius,
    // draw: function () {
    //   console.log("draw");
    // },
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1.constructor); //f Object()

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle2 = new Circle(2);
console.log(circle2.constructor);

//Above returns

//f Circle(radius){
//this.radius = radius;
//this.draw = function () {
//console.log("draw");
//};}
