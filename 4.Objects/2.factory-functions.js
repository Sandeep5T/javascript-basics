// const circle = {
//   radius: 1,
//   location: { x: 1, y: 2 },
//   isVisible: true,
//   draw: function () {
//     console.log(draw);
//   },
// };

// const circle2 = {
//   radius: 2,
//   location: { x: 3, y: 4 },
//   isVisible: false,
//   draw: function () {
//     console.log("Draw");
//   },
// };

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
console.log(circle1);
const circle2 = createCircle(2);
console.log(circle2);
circle1.draw();
circle2.draw();
