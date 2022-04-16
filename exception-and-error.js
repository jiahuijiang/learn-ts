// Throw Exception
// Can throw what every
// throw "a string";
// throw true;

function throwingException() {
    throw "throwing an exception";
}

function logError(exception) {
    console.log(exception);
}

try {
    throwingException();
} catch (e) {
    console.log("Got an error");
    logError(e);
} finally {
    console.log("Finally");
}