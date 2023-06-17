const message = " This is my\n 'first' message ";
console.log(typeof message);

const messageObject = new String("Hello");
console.log(typeof messageObject);

console.log(message.length);

console.log(message.includes("my"));

console.log(message[2]);

console.log(message.startsWith("This"));

console.log(message.startsWith("this"));

console.log(message.indexOf("my"));

console.log(message.endsWith("e"));

//The below functions will return a new string and does not change the input

console.log(message.replace("First", "second")); //case sensitive

console.log(message.replace("first", "second")); //case sensitive

console.log(message.toUpperCase());

console.log(message.trim());

console.log(message.trimStart());

console.log(message.trimEnd());

console.log(message.split(" "));
