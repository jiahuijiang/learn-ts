console.log(`${1 <= "2"}`)
console.log(`${3 <= "2"}`)
// Implicit false values
// empty string, null or undefined, 0

// case sensitive
console.log(`${"a"=="A"}`)

// || and && does shortcut and don't evaluate both unless necessary
// | and & always evaluate
// switch statement is the same as in Java
const status = 200;
switch (status) {
    case 200:
        console.log('OK!');
        break;
    case 400:
    case 500:
        console.log("not OK!");
    default:
        console.log("something else");
        break;
}