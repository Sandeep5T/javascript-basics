const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags: function () {
    const self = this;
    this.tags.forEach(function (tag) {
      console.log(self.title, tag);
    });
  },
};

video.showTags();

function playVideo(a, b) {
  console.log(this, a, b);
}

playVideo(1, 2);
playVideo.call({ name: "Mosh" }, 1, 2);
playVideo.apply({ name: "Mosh" }, [1, 2]);
const bindResult = playVideo.bind({ name: "Mosh" }, 1, 2);

bindResult();
playVideo.bind({ name: "Mosh" }, 1, 2)();

const videoUsingBind = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags: function () {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this)
    );
  },
};

videoUsingBind.showTags();

const videoUsingArrowFunctions = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags: function () {
    this.tags.forEach((tag) => console.log(this.title, tag));
  },
};

videoUsingArrowFunctions.showTags(1);
