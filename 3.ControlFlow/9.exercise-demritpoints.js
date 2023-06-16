function checkSpeed(speed) {
  console.log("started");
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) {
    console.log("License suspended");
    kmPerPoint++; //no code executes and throws type error:Reassignment to constant variable
  } else {
    console.log("Points", points);
  }
}

checkSpeed(131);
