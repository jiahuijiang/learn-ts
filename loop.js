const names = ["A", "B", "C"];

let index = 0;
while (index < names.length) {
    console.log(names[index]);
    index++;
}

for (let index = 0; index < names.length; index++) {
    console.log(names[index]);
}

for (let name of names) {
    console.log(name);
}