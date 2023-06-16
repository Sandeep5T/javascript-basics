// 1 - 00000001
// 2 - 00000010
//OR - 00000011
//AND - 00000000

console.log(1 | 2);
console.log(1 & 2);

//Read, Write, Execute
//00000100
//00000010
//00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | writePermission;

console.log(myPermission & readPermission ? "yes" : "no");

let x = (2 + 3) * 4;
console.log(x);
