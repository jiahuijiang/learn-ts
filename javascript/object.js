// JSON
// 1. collection of name-value pairs (a map, not orders)
// 2. ordered list of values

const json = {
    "key1": "value1",
    "key2": "value2",
}

const string1 = JSON.stringify(json);
console.log(string1);
const string2 = JSON.stringify([json, json]);
console.log(string2);

console.log(JSON.parse(string1).key2);
console.log(JSON.parse(string2)[1]["key1"]);

// objects have
// properties and methods

// object literal
const book = {
    title: "Norwegian woods",
    author: "Murakami",

    discard: function () {
        console.log(`discarded ${this.title} by ${this["author"]}`)
    }
}
book.discard()
console.log(typeof book)

const book2 = new Object();
book2.title = "Range";
book2.status = function() {
    console.log(`currently reading ${this.title}`);
}
book2["status"]()
console.log(typeof book2)
