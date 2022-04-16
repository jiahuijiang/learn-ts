// Stored in Date object
// Date is not a primitive type, it's just an object
// Internally time is stored as a timestamp
const now = new Date();
// month starts from 0; day starts from 1 <- so confusing
// time will be midnight
// default display human readable UTC time
const day = new Date(1999, 3, 15);
console.log(day);

day.setHours(1);
console.log(day);
