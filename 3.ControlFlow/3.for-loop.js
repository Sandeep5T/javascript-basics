for (let i = 0; i < 5; i++) console.log("Hello World", i);

for (let i = 1; i <= 5; i++) {
  console.log("Hello World", i);
}

for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);
}

for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) console.log(i);
}

let i = 5;
while (i > 0) {
  if (i % 2 !== 0) console.log(i);
  i--;
}

let j = 11;
do {
  if (j % 2 !== 0) console.log(j);
  j++;
} while (j <= 20);
