function start() {
  function end() {
    console.log("Hello");
  }
  const message = "hi";
  if (true) {
    const message = "bye";
    const another = "bye";
  }
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log(message);
  console.log(i);
  console.log(another);
}

const color = "red"; //global scope
const borderStyle = "solid";

function stop() {
  const borderStyle = "dotted";
  console.log(borderStyle); //Local variables or constants takes precedence over the global variables or constants
  console.log("global color", color); //cannot access color before initialization - Reference error
  console.log("local background", background); //cannot access color before initialization - Reference error
  const color = "blue";
  let background;
  const message = "bye";
}
stop();
start();

end(); //End is not defined: reference error

console.log(message); //message is not defined
