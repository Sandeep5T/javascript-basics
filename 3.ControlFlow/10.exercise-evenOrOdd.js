function showNumbers(limit) {
  const i = 0; //code executes till ZERO:EVEN even if this const is reassigned,1 as const i is limited to the function scope
  while (i <= limit) {
    console.log(i, i % 2 === 0 ? "EVEN" : "ODD");
    i++;
  }
}

showNumbers(10);
