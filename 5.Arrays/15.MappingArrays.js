const numbers = [1, -1, 2, 3, 4];

const filtered = numbers.filter((n) => n >= 0);

const items = filtered.map((n) => `<li>${n}</li>`);

const itemObjects = filtered.map((n) => ({ value: n }));

const html = items.join("");

console.log(items);
console.log(html);
console.log(itemObjects);

const chainedResult = numbers
  .filter((n) => n >= 0)
  .map((n) => ({ n }))
  .filter((o) => o.n > 1)
  .map((o) => o.n);

console.log(chainedResult);
