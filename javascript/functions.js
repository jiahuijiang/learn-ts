// Function
function functionName(var1, var2) {
    console.log(`var1=${var1} var2=${var2}`)
    return var1 > var2 ? var1 : var2;
}

let function1 = functionName;
console.log(function1.name);

// you can invoke function with different number of args, the values will be treated as undefined
function1(1)

// Anonymous Function
// the context is the parent's context

const a = 1;
const add = (b, c) => b + c;
const addWithA = (c) => a + c;

console.log(add(2, 3));
console.log(addWithA(3));

this.variable = 2;
const test = () => {
    console.log(this.variable);
}

test();