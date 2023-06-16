//Strict Equality Operator(Type + Value)
console.log(1 === 1);
console.log("1" === 1);

//Lose Equality(Only value)
console.log(1 == 1);
console.log("1" == 1);
console.log(true == 1);
console.log(true == "1");
console.log("1" == true);
console.log("001" == true);
console.log(true == 0);
console.log(true == "0");
console.log("Tests on false");
console.log(false == 0);
console.log(false == "0");
console.log("" == false);
console.log(" " == false);
console.log(false == "");
console.log(false == "   ");
console.log(true == null);
console.log(true == undefined);
console.log(false == null);
console.log(false == undefined);
console.log(null == true);
console.log(undefined == true);
console.log(null == false);
console.log(undefined == false);

console.log(null == undefined); //True
console.log(undefined == null); //True
console.log(null === undefined); //false
console.log(undefined === null); //false

console.log("Tests on null and undefined");
console.log(null == "");
console.log(undefined == "");
console.log("" == null);
console.log("" == undefined);
console.log("" == "   ");
console.log("   " == "");
console.log(0 == "");
console.log("" == 0);
console.log("   " == 0);
console.log("" == "0");
