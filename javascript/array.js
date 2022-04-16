let array = [];
array[0] = 2;
console.log(array);
array[0] = 1;
console.log(array + ` size = ${array.length}`);
array[2] = 3;
console.log(array+ ` size = ${array.length}`);

// push(number) + pop, for the last element
// shift + unshift(number), for the first element
// array1.concat(array2)