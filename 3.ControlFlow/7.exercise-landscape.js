let landScapeEnabled = isLandscape(300, 300);
console.log(landScapeEnabled);

function isLandscape(width, height) {
  return width > height;
}
