const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

const result = movies
  .filter((m) => m.year === 2018 && m.rating > 4)
  .sort((a, b) => (a.rating > b.rating ? -1 : b.rating > a.rating ? 1 : 0))
  .map((m) => m.title);

const resultAsPerMosh = movies
  .filter((m) => m.year === 2018 && m.rating > 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);

console.log(result.join());
console.log(resultAsPerMosh);
