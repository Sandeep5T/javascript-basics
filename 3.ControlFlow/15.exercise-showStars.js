function showStars(rows) {
  for (let i = 1; i <= rows; i++) {
    let message = "";
    for (let j = 0; j < i; j++) message += "*";
    console.log(message);
  }
}

showStars(10);
