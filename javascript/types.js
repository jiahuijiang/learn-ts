// These are allll just really confused
// Punt and directly see how it works in TypeScript


// Number (float), String, Boolean, Date, Function, Array and Object
// NaN, null, undefined

const oneNumber = 1;
const oneObject = new Number(oneNumber);
console.log(`typeof '1' = ${typeof oneNumber}`)
console.log(`typeof 'new Number(1)' = ${typeof oneObject}`)

const stringString = "string";
const stringObject = new String(stringString);
console.log(`typeof "string = ${typeof stringString}`)
console.log(`typeof 'new String("string")' = ${typeof stringObject}`)

const arrayArray = [1, 2];
console.log(`typeof [1,2] = ${typeof arrayArray}`)

console.log(`typeof ${typeof 1/0}`)

var undefined;
console.log(`typeof ${typeof undefined}`)

var nullVar = null;
console.log(`typeof ${typeof nullVar}`)

console.log(`1 == "1" ${1 == "1"}`)
console.log(`2 == "1" ${2 == "1"}`)
console.log(`2 == "2" ${2 == "2"}`)