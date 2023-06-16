const person = {
  name: "Sandeep",
  age: 29,
};

for (let key in person) console.log(person.key);
for (let key in person) console.log(person[key]);

const colors = ["red", "green", "blue"];
for (let index in colors) console.log(index, colors[index]);

for (let color of colors) console.log(color);

let i = 0;
while (i <= 10) {
  if (i === 5) break;
  if (i % 2 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}
