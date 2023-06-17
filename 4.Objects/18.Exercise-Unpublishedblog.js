function Blog(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.comments = [];
  this.isLive = false;
  this.views = 0;
}

const draftBlog = new Blog("a", "b", "c");
console.log(draftBlog);
