// var
// Function scoped, mutable.
// It's available BEFORE declaration!!! <- weird
// DEPRECATED
var one = 1;

// let
// Block scoped
// It's only available AFTER declaration
// Mutable
let two = 2;

// const
// Block scoped
// It's only available AFTER declaration
// Immutable
const three = 3;

// What to use?
// `const` by default. `let` in loops for reassignment

// Playground
console.log(variable)
var variable = "test";
console.log(variable)
variable = "new test";
console.log(variable)

const constant = "constant";
console.log(constant);
// throws runtime error
// constant = "new constant";
