//method in object --> here this refers to the object itself
//A regular function (outside an object) --> here this refers to global object (i.e. window object in browsers and global object in node)

//1. method in an object

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  play() {
    console.log(this);
  },
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);
  },
};

//stop is also a method in video object
video.stop = function () {
  console.log(this);
};

video.play();
video.stop();

//2. Regular function
function playVideo() {
  return this;
}

console.log("In regular function, this refers to", playVideo());

//3. Constructor Function
function Video(title) {
  this.title = title;
  console.log(this);
}

const newVideo = new Video("b");

video.showTags();
