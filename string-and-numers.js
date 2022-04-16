const greeting = "Hello"
const place = "World"

console.log(`${greeting} ${place} ${1+1}`);
console.log(greeting + " " + place + " " + (1+1));

// everything after a special character is ignored
console.log(`${parseInt("1.50")}`)
console.log(`${parseFloat("1.50")}`)

// everything after + is ignore, it's error-prone, just don't use it
console.log(`${parseInt("1 + 1")}`)
console.log(`${parseFloat("1 + 1")}`)
