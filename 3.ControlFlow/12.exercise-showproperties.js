function showProperties(object) {
  for (key in object)
    typeof object[key] === "string" && console.log(key, object[key]);
}

let movie = { title: "a", age: 29, releaseYear: 2007, director: "b" };
showProperties(movie);
