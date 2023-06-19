const circle = {
  radius: 1,
  get area() {
    return this.radius ** 2 * Math.PI;
  },
};

console.log(circle.area);
